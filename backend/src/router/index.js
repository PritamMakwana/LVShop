import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/view/Dashboard.vue';
import Login from '@/view/Login.vue';
import ResetPassword from '@/view/ResetPassword.vue';
import RequestPassword from '@/view/RequestPassword.vue';

const routes = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/request-password',
        name: 'request-password',
        component: RequestPassword
    },
    {
        path: '/reset-password/:token',
        name: 'reset-password',
        component: ResetPassword
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
