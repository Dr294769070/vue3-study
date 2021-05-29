<template>
    <div class="upload-page">
        <div class="select">
            <span class="form-item-label">选择文件类型：</span>
            <el-radio-group v-model="radio">
                <el-radio :label="0">图片</el-radio>
                <el-radio :label="1">视频</el-radio>
            </el-radio-group>
        </div>
        <div class="upload-content">
            <UploadFile @success="handleSuccess"></UploadFile>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'


export default {
    setup() {
        const state = reactive({
            radio: 0
        })
        return {
            ...toRefs(state)
        }
    },
    methods: {
        handleSuccess() {
            this.$notify({
                title: '成功',
                message: '上传成功'
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.upload-page {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .select {
        display: flex;
        justify-content: center;
        align-items: baseline;
        .form-item-label {
            display: inline-block;
            font-size: 16px;
            color: #606266;
            margin-right: 10px;
            margin-bottom: 20px;
        }
    }
    .upload-content{
        margin-top: 10px;
    }
}
</style>