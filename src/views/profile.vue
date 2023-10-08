<template>
    <TopBar/>
    <div class="row mt-4 pb-5">
        <div class="col-3">
            <b-form class="tab tab-radius-small p-4 form">
                <div class="user d-flex gap-3 align-items-center mb-4">
                    <div class="user__cover">
                        <img class="w-100" src="@/assets/img/icon/profile-user.svg" alt=""/>
                    </div>
                    <p class="d-flex flex-column h6 text-primary fw-bolder">
                        Фамилия <br/> Имя
                        <span class="h6 text-success">
                            {{ 'name@mail.ru' }}
                        </span>
                    </p>
                </div>
                <b-form-group class="mb-4" label="Мои данные">
                    <div class="form__input mb-3 d-flex align-items-center">
                        <b-form-input
                            class="form__input"
                            placeholder="Имя"
                        />
                        <button>
                            <img src="@/assets/img/icon/edit-fill.svg" alt="">
                        </button>
                    </div>
                    <div class="form__input mb-3 d-flex align-items-center">
                        <b-form-input
                            class="form__input"
                            placeholder="Фамилия"
                        />
                        <button>
                            <img src="@/assets/img/icon/edit-fill.svg" alt="">
                        </button>
                    </div>
                    <div class="form__input mb-3 d-flex align-items-center">
                        <b-form-input
                            class="form__input"
                            placeholder="Пол"
                        />
                        <button>
                            <img src="@/assets/img/icon/edit-fill.svg" alt="">
                        </button>
                    </div>
                    <div class="form__input mb-3 d-flex align-items-center">
                        <b-form-input
                            class="form__input"
                            placeholder="Дата рождения"
                        />

                        <button>
                            <img src="@/assets/img/icon/edit-fill.svg" alt="">
                        </button>
                    </div>
                    <div class="form__input mb-3 d-flex align-items-center">
                        <b-form-input
                            class="form__input"
                            placeholder="Email"
                        />
                        <button>
                            <img src="@/assets/img/icon/edit-fill.svg" alt="">
                        </button>
                    </div>
                </b-form-group>
                <b-form-group class="mb-3" label="Впишите старый пароль">
                    <b-form-input class="form__input" placeholder="****************"/>
                </b-form-group>
                <b-form-group class="mb-4" label="Придумайте новый пароль">
                    <b-form-input class="form__input" placeholder="****************"/>
                </b-form-group>
                <b-button variant="primary" class="p-2">Сохранить</b-button>
            </b-form>
        </div>
        <div class="col-9 d-flex flex-column">
            <h1 class="d-flex flex-column h2 text-primary">
                <span class="h5 text-success">
                    Личный кабинет
                </span>
                Пройденные тесты
            </h1>
            <div class="d-flex flex-column flex-grow-1 gap-3 justify-content-center">
                <test-card :isPassed="true"/>
                <div class="d-flex justify-content-end mt-3">
                    <b-button variant="primary" class="w-auto px-4" @click="next('tests')">ВСЕ ТЕСТЫ</b-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TopBar from "@/components/top-bar.vue";
import TestCard from "@/components/test-card.vue";

export default {
    name: "ProfilePage",
    components: {TestCard, TopBar},
    data() {
        return {
            passedTests: [1, 2, 3, 4, 5, 6, 7]
        }
    },
    methods: {
        next(params) {
            this.$router.push(params)
        }
    }
}
</script>