import { h } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: '首页',
            component: () => import('../pages/Homepage/index.vue')
        },
        {
            path: '/editTodo',
            name: '记事本',
            component: () => import('../pages/todos/editTodo.vue')
        }
    ]
})

// 动态添加路由
router.addRoute({
    path: '/about',
    name: 'about',
    component: () => import('../pages/demos/about.vue')
})

router.addRoute('about', {
    path: '/about/info',
    name: 'about-info',
    component: {
        render() {
            return h('div', 'about info page')
        }
    }
})