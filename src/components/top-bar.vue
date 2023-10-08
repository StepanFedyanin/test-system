<template>
    <div class="topBar row p-4 align-items-center">
        <b-button :class="`topBar__title ${isAuth?'col-2':'col-10'}`" @click="next('profile')">Pro<span>Test</span>
        </b-button>
        <template v-if="isAuth">
            <div class="col-8 d-flex gap-3">
                <router-link
                    v-for="item in accountMenu"
                    :key="item.name"
                    class="topBar__link text-uppercase fw-bold"
                    :to="item.link"
                    :title="item.title"
                >
                    {{ item.title }}
                </router-link>
            </div>
        </template>
        <div v-if="isAuth" class="d-flex align-items-center gap-2 col-2 h6 text-primary">
            {{ 'name@mail.ru' }}
            <div class="topBar__user">
                <img src="@/assets/img/icon/profile-user.svg" alt=""/>
            </div>
        </div>
        <b-button v-else variant="outline-primary" class="col-2 py-2 px-3" @click="next">вход / регистрация</b-button>
    </div>
</template>

<script>
import {accountMenu} from '@/settings';

export default {
    name: "TopBar",
    data() {
        return {
            accountMenu: accountMenu,
            isAuth: true
        }
    },
    methods: {
        next(params) {
            this.$router.push({name: params || 'auth'});
        }
    }
}
</script>
