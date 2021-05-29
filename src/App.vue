<template>
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
    <!-- <todos></todos> -->
    <Homepage></Homepage>
</template>

<script>
import HelloWorld from './pages/HelloWorld.vue'
import Todos from './pages/todos/todos.vue'
import Homepage from './pages/Homepage/index.vue'

export default {
    name: 'App',
    components: {
        HelloWorld,
        Todos,
        Homepage
    }
}
</script>

<style lang='scss' scoped>
* {
    margin: 0;
    padding: 0;
}
.app-container {
    height: 100%;
    .app-left-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 200px;
        height: 100%;
        background: #303133;
        .user-detail{
            display: flex;
            align-items: center;
            height: 100px;
        }
    }
    .app-right-content {
        padding-left: 200px;
    }
}
</style>
