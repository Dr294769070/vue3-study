<template>
    <div class="app-container">
        <div class="app-left-container">
            <div class="user-detail">
                <el-avatar :size="'medium'" src="https://s3-fs.pstatp.com/static-resource/v1/8489279b-d0af-414e-8df3-40498891c89g~?image_size=100x100&cut_type=&quality=&format=png&sticker_format=.webp" class="avatar"></el-avatar>
                <div class="name">frank</div>
            </div>
            <div class="left-nav-container">
                <el-menu :uniqueOpened="true" default-active="2" class="left-nav" background-color="#303133" text-color="#fff" active-text-color="#ffd04b">
                    <el-submenu index="1">
                        <template #title>
                            <i class="el-icon-location"></i>
                            <span>文件列表</span>
                        </template>
                        <router-link custom v-slot="scope" to="/editTodo">
                            <el-menu-item index="1-1" @click="scope.navigate">图片</el-menu-item>
                        </router-link>
                    </el-submenu>
                    <router-link custom v-slot="scope" to="/home/uploadPage">
                        <el-menu-item index="2"  @click="scope.navigate">
                            <i class="el-icon-menu"></i>
                            <template #title>上传文件</template>
                        </el-menu-item>
                    </router-link>
                </el-menu>
            </div>
        </div>
        <div class="app-right-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import UploadPage from '../UploadPage/index.vue'

export default {
    name: 'Homepage',
    components: {
        UploadPage
    }
}
</script>

<style lang='scss' scoped>
.app-container {
    height: 100%;
    .app-left-container {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 200px;
        height: 100%;
        background: #303133;
        .user-detail {
            display: flex;
            align-items: center;
            height: 80px;
            padding-left: 20px;
            .name {
                font-size: 16px;
                line-height: 30px;
                height: 30px;
                color: #fff;
                margin-left: 10px;
            }
        }
        .left-nav-container {
            background: #303133;
            .left-nav {
                width: 100%;
            }
        }
    }
    .app-right-content {
        height: 100%;
        padding-left: 200px;
        position: relative;
    }
}
</style>
