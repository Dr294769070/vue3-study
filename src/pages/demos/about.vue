<template>
    <div>
        about page
        <nav-link to="/"></nav-link>
        <nav-link to="/about"></nav-link>
        <nav-link to="/editTodo"></nav-link>
    </div>
    <router-view></router-view>
</template>

<script>
import { watch } from 'vue'
import { onBeforeRouteLeave, useRoute } from 'vue-router'
import navLink from './navLink.vue'
    export default {
    components: { navLink },
        setup() {
            const route = useRoute()
            // router实例 单例 响应式
            watch(() => route.query, (val) => {
                console.log('val', val)
            })
            // 路由守卫 只在离开当前about页面时生效
            onBeforeRouteLeave((to, from) => {
                const answer = window.confirm('确定离开？') 
                if (!answer) return false
            })
            return {}
        }
    }
</script>

<style lang="sass" scoped>

</style>