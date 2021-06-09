import { h } from 'vue'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

export const router = createRouter({
    history: createWebHashHistory(),
    // history: createWebHistory('/base'), // base参数
    routes: [
        {
            path: '/home',
            name: '首页',
            component: () => import('../pages/Homepage/index.vue'),
            children: [
                {
                    path: '/home/uploadPage',
                    name: '上传文件',
                    component: () => import('../pages/UploadPage/index.vue')
                },
                {
                    path: '/home/fileList',
                    name: '文件列表',
                    component: () => import('../pages/fileList/index.vue')
                },
                {
                    path: '/home/detail',
                    name: '文件详情',
                    component: () => import('../pages/detail/index.vue')
                }
            ]
        },
        {
            path: '/editTodo',
            name: '记事本',
            component: () => import('../pages/todos/editTodo.vue')
        },
        {
            path: '/:pathMatch(.*)*', // 将未匹配的路径名称导航到该路径
            name: '404',
            component: {
                render() {
                    return h('div', '404')
                }
            }
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { top: 0, left: 0}
    }
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