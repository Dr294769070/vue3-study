<template>
    <div class="upload-file">
        <div class="file-area">
            <div class="el-icon-upload icon-upload"></div>
            <el-link type="primary" class="text"> 上传文件 </el-link>
            <input
                ref="fileInput"
                id="fileInput"
                type="file"
                class="file-input"
                @change="handleChange"
            />
        </div>
        <el-progress :percentage="percentage" v-if="showProgress" :format="format"></el-progress>
        <div class="tip">请注意文件合法性</div>
    </div>
</template>

<script>
import { reactive, toRefs, ref } from 'vue'
import { putObject } from '../../utils/cos'

export default {
    setup(props, context) {
        const state = reactive({
            showProgress: false,
            percentage: 0
        })
        const fileInput = ref()
        const completeCb = (data) => {
            if (data.statusCode == 200) {
                context.emit('success')
            }
        }
        const progressCb = (data) => {
            console.log(data.percent, Math.floor(100 * data.percent))
            state.percentage = Math.floor(100 * data.percent)
        }
        function handleChange(file) {
            const targetFile = file.target.files[0]
            const fileName = targetFile.name
            state.showProgress = true
            putObject(fileName, targetFile, completeCb, progressCb)
        }
        function format(percentage) {
            return percentage === 100 ? '满' : `${percentage}%`;
        }

        return {
            ...toRefs(state),
            fileInput,
            handleChange,
            format,
        }
    }
}
</script>

<style lang="scss" scoped>
.upload-file {
    width: 300px;
    .file-area {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 200px;
        border: 1px dashed #c0c4cc;
        margin-bottom: 10px;
        position: relative;
        border-radius: 6px;
        &:hover {
            border: 1px dashed #409eff;
            .icon-upload,
            .text {
                color: #409eff;
            }
        }
        .icon-upload {
            font-size: 40px;
            color: #c0c4cc;
        }
        .text {
            margin-top: 10px;
            position: relative;
            color: #c0c4cc;
        }
    }
    .file-input {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer !important;
    }
}
</style>