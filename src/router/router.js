import {createRouter, createWebHistory} from 'vue-router';
// import { helpers } from '@/utils/helpers';
// import store from '@/store/store';
import home from '@/views/home.vue';
import auth from "@/views/auth.vue";
import profile from "@/views/profile.vue";
import AllTests from "@/views/all-tests.vue";
import PassedTests from "@/views/passed-tests.vue";
import Test from "@/views/test.vue";
import testDescription from "@/views/test-description.vue";
import testFinale from "@/views/test-finale.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: home,
        meta: {title: 'ProTest'},
        props: true
    },
    {
        path: '/auth',
        name: 'auth',
        component: auth,
        meta: {title: 'ProTest'},
        props: true,
    },
    {
        path: '/profile',
        name: 'profile',
        component: profile,
        meta: {title: 'ProTest'},
        props: true,
    },
    {
        path: '/tests',
        name: 'tests',
        component: AllTests,
        meta: {title: 'ProTest'},
        props: true,
    },
    {
        path: '/passed_tests',
        name: 'passed_tests',
        component: PassedTests,
        meta: {title: 'ProTest'},
        props: true,
    },
    {
        path: '/test',
        name: 'test',
        component: Test,
        meta: {title: 'ProTest'},
        props: true,
        redirect: { name: 'description' },
        children: [
            {
                path: '',
                name: 'description',
                component: testDescription,
                meta: {title: 'Описание теста', step: 1, requiresAuth: true},
                props: true
            },
            {
                path: 'finale',
                name: 'finale',
                component: testFinale,
                meta: {title: 'Описание теста', step: 2, requiresAuth: true},
                props: true
            }
        ]
    },

];

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'is-subactive',
    linkExactActiveClass: 'is-active',
    routes
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title + ' - L Radio Direct' || 'L Radio Direct';
    // if (to.matched.some(record => record.meta.requiresAuth)) {
    //     if (store.state.user && store.state.user.id) {
    //         let jwt = helpers.parseJwt(store.state.access);
    //         console.log('Check token');
    //         let expDate = new Date(jwt.exp * 1000);
    //         if (expDate < new Date()) {
    //             next({ name: 'auth' });
    //         } else {
    //             next();
    //         }
    //     } else {
    //         next({ name: 'auth' });
    //     }
    // } else {
        next();
    // }
});

export default router;
