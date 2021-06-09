<template>
    <div>
        文件列表
    </div>
</template>

<script>

// 一期：实现一个这样的功能，展示一个表格，表格每一行为文件夹或者文件
// 若为文件，点击进入详情页面，可预览
// 若为文件夹，进入文件夹内部
// 先只处理视频和图片两种文件

import { putObject, getBucketObj } from '../../utils/cos'

import { reactive, toRefs, onMounted } from 'vue'

export default {
    setup () {
        onMounted(() => {
            getBucketObj()
        })
        return {
            // ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>