import { createRouter, createWebHistory } from 'vue-router'
import Demo from '@/Demo'

export const routes = [
    {
        path: '/',
        component: Demo,
        redirect: 'index',
        children: [
            {
                path: 'index',
                name: 'Index',
                component: () => import('@/views/index/index'),
                meta: {
                    title: '首页',
                    icon: 'home',
                    affix: true,
                },
            },
        ],
    },
    {
        path: '/menu',
        component: Demo,
        redirect: 'noRedirect',
        name: 'Menu',
        // alwaysShow: true,
        meta: { title: '菜单', icon: 'box-open' },
        children: [
            {
                path: 'test',
                name: 'Test',
                component: () => import('@/views/menu/test/test'),
                meta: {
                    title: '测试',
                    //   permissions: ['admin', 'editor'],
                },
            },
            {
                path: 'test2',
                name: 'Test2',
                component: () => import('@/views/menu/test/test'),
                meta: {
                    title: '测试2',
                    //   permissions: ['admin', 'editor'],
                },
            },
            {
                path: 'test2',
                name: 'Test2',
                component: () => import('@/views/menu/test/test'),
                meta: {
                    title: '测试2',
                    //   permissions: ['admin', 'editor'],
                },
            },
            {
                path: 'test3',
                name: 'Test3',
                component: () => import('@/views/menu/test/test'),
                meta: {
                    title: '测试3',
                    //   permissions: ['admin', 'editor'],
                },
            },
            {
                path: 'test4',
                name: 'Test4',
                component: () => import('@/views/menu/test/test'),
                meta: {
                    title: '测试4',
                    //   permissions: ['admin', 'editor'],
                },
            },
            {
                path: 'test5',
                name: 'Test5',
                component: () => import('@/views/menu/test/test'),
                meta: {
                    title: '测试5',
                    //   permissions: ['admin', 'editor'],
                },
            },
            {
                path: 'test6',
                name: 'Test6',
                component: () => import('@/views/menu/test/test'),
                meta: {
                    title: '测试6',
                    //   permissions: ['admin', 'editor'],
                },
            },
            {
                path: 'test7',
                name: 'Test7',
                component: () => import('@/views/menu/test/test'),
                meta: {
                    title: '测试7',
                    //   permissions: ['admin', 'editor'],
                },
            },
            {
                path: 'test8',
                name: 'Test8',
                component: () => import('@/views/menu/test/test'),
                meta: {
                    title: '测试8',
                    //   permissions: ['admin', 'editor'],
                },
            },
            {
                path: 'test9',
                name: 'Test9',
                component: () => import('@/views/menu/test/test'),
                meta: {
                    title: '测试9',
                    //   permissions: ['admin', 'editor'],
                },
            },
            {
                path: 'test10',
                name: 'Test10',
                component: () => import('@/views/menu/test/test'),
                meta: {
                    title: '测试10',
                    //   permissions: ['admin', 'editor'],
                },
            },
            {
                path: 'test11',
                name: 'Test11',
                component: () => import('@/views/menu/test/test'),
                meta: {
                    title: '测试11',
                    //   permissions: ['admin', 'editor'],
                },
            },
            {
                path: 'test12',
                name: 'Test12',
                component: () => import('@/views/menu/test/test'),
                meta: {
                    title: '测试12',
                    //   permissions: ['admin', 'editor'],
                },
            },
            {
                path: 'test13',
                name: 'Test13',
                component: () => import('@/views/menu/test/test'),
                meta: {
                    title: '测试13',
                    //   permissions: ['admin', 'editor'],
                },
            },
            {
                path: 'test14',
                name: 'Test14',
                component: () => import('@/views/menu/test/test'),
                meta: {
                    title: '测试14',
                    //   permissions: ['admin', 'editor'],
                },
            },
            {
                path: 'test15',
                name: 'Test15',
                component: () => import('@/views/menu/test/test'),
                meta: {
                    title: '测试15',
                    //   permissions: ['admin', 'editor'],
                },
            },
            {
                path: 'test16',
                name: 'Test16',
                component: () => import('@/views/menu/test/test'),
                meta: {
                    title: '测试16',
                    //   permissions: ['admin', 'editor'],
                },
            },
        ]
    }
]




export const router = createRouter({
    routes,
    history: createWebHistory(),
    // ...
})