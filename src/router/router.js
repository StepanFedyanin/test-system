import {createRouter, createWebHistory} from 'vue-router';
import home from '@/views/home.vue';
import auth from "@/views/auth.vue";
import profile from "@/views/profile.vue";
import AllTests from "@/views/all-tests.vue";
import PassedTests from "@/views/passed-tests.vue";
import Test from "@/views/test.vue";
import testDescription from "@/views/test-description.vue";
import testFinale from "@/views/test-finale.vue";
import testResponse from "@/views/test-response.vue";


const notAuthorizedRoutes = [
    {
        path: '/',
        name: 'home',
        component: home,
        meta: {title: 'Приветствие'},
        props: true
    },
    {
        path: '/auth',
        name: 'auth',
        component: auth,
        meta: {title: 'Авторизация'},
        props: true,
    },
    {
        path: '/tests',
        name: 'tests',
        component: AllTests,
        meta: {title: 'Все тесты'},
        props: true,
    },
    {
        path: '/test',
        name: 'test',
        component: Test,
        meta: {title: ''},
        props: true,
        redirect: {name: 'description'},
        children: [
            {
                path: '',
                name: 'description',
                component: testDescription,
                meta: {title: 'Описание', step: 1, requiresAuth: true},
                props: true
            },
            {
                path: '/response',
                name: 'response',
                component: testResponse,
                meta: {title: 'Тестирование', step: 2, requiresAuth: true},
                props: true
            },
            {
                path: 'finale',
                name: 'finale',
                component: testFinale,
                meta: {title: 'Заключение', step: 3, requiresAuth: true},
                props: true
            }
        ]
    },
]
const authorizedRoutes = [
    {
        path: '/',
        name: 'home',
        component: home,
        meta: {title: 'Приветствие'},
        props: true
    },
    {
        path: '/auth',
        name: 'auth',
        component: auth,
        meta: {title: 'Авторизация'},
        props: true,
    },
    {
        path: '/profile',
        name: 'profile',
        component: profile,
        meta: {title: 'Личный кабинет'},
        props: true,
    },
    {
        path: '/tests',
        name: 'tests',
        component: AllTests,
        meta: {title: 'Все тесты'},
        props: true,
    },
    {
        path: '/passed_tests',
        name: 'passed_tests',
        component: PassedTests,
        meta: {title: 'Пройденные тесты'},
        props: true,
    },
    {
        path: '/test',
        name: 'test',
        component: Test,
        meta: {title: 'ProTest'},
        props: true,
        redirect: {name: 'description'},
        children: [
            {
                path: '',
                name: 'description',
                component: testDescription,
                meta: {title: 'Описание теста', step: 1, requiresAuth: true},
                props: true
            },
            {
                path: '/response',
                name: 'response',
                component: testResponse,
                meta: {title: 'Описание теста', step: 2, requiresAuth: true},
                props: true
            },
            {
                path: '/finale',
                name: 'finale',
                component: testFinale,
                meta: {title: 'Описание теста', step: 3, requiresAuth: true},
                props: true
            }
        ]
    },
];

const authUser = this?.$store.state.user;
console.log(this,'authUser')
const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'is-subactive',
    linkExactActiveClass: 'is-active',
    routes: !authUser ? authorizedRoutes : notAuthorizedRoutes
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title + ' - ProTest' || 'ProTest';
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
