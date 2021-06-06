<template>
    <div>
        about page
        <nav-link to="/"></nav-link>
        <nav-link to="/about"></nav-link>
        <router-link to="/editTodo" custom v-slot="scope">
            <div @dblclick="scope.navigate">{{ scope.route.name }}</div>
        </router-link>
        <nav-link to="/editTodo"></nav-link>
    </div>
    <div>
        <p @click="add">{{$store.state.count}}</p>
        <p>{{count}}</p>
        <!-- <p>{{ state.count }}</p> -->
    </div>
    <router-view v-slot={Component}>
        <keep-alive>
            <component :is="Component"></component>
        </keep-alive>
    </router-view>
</template>

<script>
import { toRefs, watch } from 'vue'
import { onBeforeRouteLeave, useRoute } from 'vue-router'
import { useStore } from 'vuex'
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
            // onBeforeRouteLeave((to, from) => {
            //     const answer = window.confirm('确定离开？') 
            //     if (!answer) return false
            // })

            const store = useStore()
            function add() {
                store.commit('add')
            }
            return {
                add,
                // state: store.state, // 这个时候 文本插值为state.count
                ...toRefs(store.state) // 将数据转为响应式，然后结构  文本插值使用的时候，直接使用count即可
            }
        }
    }
</script>

<style lang="sass" scoped>

</style>