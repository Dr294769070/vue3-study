<template>
    <div>
        <el-tabs v-model="mode" type="card" @tab-click="handleClick">
            <el-tab-pane label="图片" :name="0">
                <el-table :data="tableData">
                  <el-table-column align="center" v-for="item in tableColumns" :key="item.prop" :label="item.label" :prop="item.prop"></el-table-column>
                  <el-table-column align="center" label="操作">
                      <template v-slot="scope">
                          <el-button size="mini" @click="toDetail(scope.row)">详情</el-button>
                      </template>
                  </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="视频" :name="1"></el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>

// 一期：实现一个这样的功能，展示一个表格，表格每一行为文件夹或者文件
// 若为文件，点击进入详情页面，可预览
// 若为文件夹，进入文件夹内部
// 先只处理视频和图片两种文件

// 需求变更
// 两个文件夹，分别存放图片和视频
// 上传文件时，传到对应的文件夹下
// 本页面设置两个tab 分别显示图片/视频
// 点击进入详情页，可以预览

import { getBucketObj } from '../../utils/cos'

import { reactive, toRefs, onMounted } from 'vue'

export default {
    setup() {
        const state = reactive({
            mode: 0,
            tableData: [],
            tableColumns: [{
                prop: 'ETag',
                label: '标识'
            }, {
                prop: 'Key',
                label: '名称'
            }]
        })
        function handleClick() {}
        function toDetail(row) {
            console.log('t', row)
            // 获取唯一标识，放在query中，跳转到详情页
        }
        onMounted(() => {
            getBucketObj().then(res => {
                console.log('res', res.Contents)
                state.tableData = res.Contents
            })
        })
        return {
            ...toRefs(state),
            handleClick,
            toDetail
        }
    }
}
</script>

<style lang="scss" scoped>
</style>