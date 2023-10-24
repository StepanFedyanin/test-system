<template>
    <div class="test p-4 d-flex flex-column align-items-center">
        <p class="h2 fw-bold mb-4">{{question}}</p>
        <div v-if="image" class="w-100 px-2 mb-4">
            <img class="w-auto" src="@/assets/img/temp/delitThem.png" alt="">
        </div>
        <template v-if="type==='radio'">
            <b-form-radio-group class="w-100 row g-2">
                <b-form-checkbox button button-variant="outline-secondary">Мужчина</b-form-checkbox>
                <b-form-checkbox button button-variant="outline-secondary">Мужчина</b-form-checkbox>
                <b-form-checkbox button button-variant="outline-secondary">Мужчина</b-form-checkbox>
                <b-form-checkbox button button-variant="outline-secondary">Мужчина</b-form-checkbox>
                <b-form-checkbox button button-variant="outline-secondary">Мужчина</b-form-checkbox>
            </b-form-radio-group>
        </template>
        <template v-else>
            <b-form-radio-group class="row g-3" v-if="image2">
                <b-form-group class="col-6 col-sm-4 ">
                    <b-form-radio button button-variant="outline-secondary">
                        <div class="d-flex align-items-center">
                            <p>1</p>
                            <span class="d-block mx-4">
                            <img src="@/assets/img/temp/delitThem.png" alt="">
                        </span>
                        </div>
                    </b-form-radio>
                </b-form-group>
                <b-form-group class="col-6 col-sm-4 ">
                    <b-form-radio button button-variant="outline-secondary">
                        <div class="d-flex align-items-center">
                            <p>1</p>
                            <span class="d-block mx-4">
                            <img src="@/assets/img/temp/delitThem.png" alt="">
                        </span>
                        </div>
                    </b-form-radio>
                </b-form-group>
                <b-form-group class="col-6 col-sm-4 ">
                    <b-form-radio button button-variant="outline-secondary">
                        <div class="d-flex align-items-center">
                            <p>1</p>
                            <span class="d-block mx-4">
                            <img src="@/assets/img/temp/delitThem.png" alt="">
                        </span>
                        </div>
                    </b-form-radio>
                </b-form-group>
                <b-form-group class="col-6 col-sm-4 ">
                    <b-form-radio button button-variant="outline-secondary">
                        <div class="d-flex align-items-center">
                            <p>1</p>
                            <span class="d-block mx-4">
                            <img src="@/assets/img/temp/delitThem.png" alt="">
                        </span>
                        </div>
                    </b-form-radio>
                </b-form-group>
                <b-form-group class="col-6 col-sm-4 ">
                    <b-form-radio button button-variant="outline-secondary">
                        <div class="d-flex align-items-center">
                            <p>1</p>
                            <span class="d-block mx-4">
                            <img src="@/assets/img/temp/delitThem.png" alt="">
                        </span>
                        </div>
                    </b-form-radio>
                </b-form-group>
                <b-form-group class="col-6 col-sm-4 ">
                    <b-form-radio button button-variant="outline-secondary">
                        <div class="d-flex align-items-center">
                            <p>1</p>
                            <span class="d-block mx-4">
                            <img src="@/assets/img/temp/delitThem.png" alt="">
                        </span>
                        </div>
                    </b-form-radio>
                </b-form-group>
            </b-form-radio-group>
            <b-form-radio-group v-else class="w-100 row g-2">
                <b-form-radio button button-variant="outline-secondary">мужчина</b-form-radio>
                <b-form-radio button button-variant="outline-secondary">мужчина</b-form-radio>
                <b-form-radio button button-variant="outline-secondary">мужчина</b-form-radio>
                <b-form-radio button button-variant="outline-secondary">мужчина</b-form-radio>
            </b-form-radio-group>
        </template>
    </div>
</template>

<script>

export default {
    name: "TestItem",
    props: {
        image: {
            type: String,
            default: null
        },
        image2: {
            type: String,
            default: null
        },
        type: {
            type: String,
            default: 'checkbox'
        },
        question:{
            type:String
        }
    }
}
</script>