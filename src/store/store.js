import {createStore} from 'vuex';
import VuexPersist from 'vuex-persist'

const vuexPersist = new VuexPersist({
    key: 'test-system',
    storage: window.localStorage
});


const store = createStore({
    state: {
        user: true,
    },
    plugins: [vuexPersist.plugin],
    mutations: {},
    actions: {}
});

export default store;


