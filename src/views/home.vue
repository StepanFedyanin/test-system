<template>
    <TopBar/>
    <div class="row align-items-center h-75">
        <div class="col-6 d-flex flex-column">
            <h1 class="mb-4 h1 fw-bold text-primary">Выбери и пройди тестирование</h1>
            <p class="mb-5 h3 text-secondary">Авторизируйтесь на платформе,<br/> чтобы проходить
                тесты </p>
            <div class="d-flex flex-column align-items-center col-5">
                <b-button variant="primary" class="w-100 p-3 mb-3" @click="next()">ВОЙТИ</b-button>
                <b-button variant="secondary" class="btn  w-100 mb-3 h3 text-secondary" @click="next()">
                    Зарегистрироваться
                </b-button>
            </div>
        </div>
        <div class="col-6">
            <img src="@/assets/img/temp/sign_up.png" alt="">
        </div>
    </div>
</template>

<script>

import TopBar from "@/components/top-bar.vue";

export default {
    name: "NamePage",
    components: {TopBar},
    methods: {
        next(params) {
            this.$router.push(params || 'auth');
        }
    }

}
</script>