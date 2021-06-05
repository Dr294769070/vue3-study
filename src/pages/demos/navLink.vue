<template>
    <div :class="{ active: isActive }" @click="navigate">
        {{ route.name }}
    </div>
</template>

<script>
// 该组件替换了 router-link to='xxx' 的写法
// 相当于自己将组件重写了下，用useLink获取到路由信息

import { RouterLink, useLink } from 'vue-router'
    export default {
        props: {
            ...RouterLink.props,
            inacticeClass: String
        },
        setup(props) {
            const { route, href, isActive, isExactActive, navigate } = useLink(props)
            return {
                route,
                isActive,
                navigate
            }
        }
    }
</script>

<style lang="scss" scoped>
.active{
    color: green;
}
</style>