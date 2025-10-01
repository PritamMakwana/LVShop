import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/view/Dashboard.vue';
import Login from '@/view/Login.vue';
import ResetPassword from '@/view/ResetPassword.vue';
import RequestPassword from '@/view/RequestPassword.vue';
import NotFound from '@/view/NotFound.vue';
import AppLayout from '@/components/AppLayout.vue';
import store from "../store";

const routes = [
    {
        path: '/',
        redirect: '/app'
    },
    {
        path: '/app',
        name: 'app',
        redirect: '/app/dashboard',
        component: AppLayout,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: 'dashboard',
                name: 'app.dashboard',
                component: Dashboard
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            requiresGuest: true
        }
    },
    {
        path: '/request-password',
        name: 'requestPassword',
        component: RequestPassword,
        meta: {
            requiresGuest: true
        }
    },
    {
        path: '/reset-password/:token',
        name: 'resetPassword',
        component: ResetPassword,
        meta: {
            requiresGuest: true
        }
    },
    {
        path: '/:pathMatch(.*)',
        name: 'notfound',
        component: NotFound,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})


router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.user.token) {
        console.log('redirecting to login');
        next({ name: 'login' })
    } else if (to.meta.requiresGuest && store.state.user.token) {
        console.log('redirecting to dashboard');
        next({ name: 'app.dashboard' })
    } else {
        console.log('proceeding to route');
        next();
    }
})

export default router;
