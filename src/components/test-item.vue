<template>
    <div class="test p-4 d-flex flex-column align-items-center">
        <p class="h2 fw-bold mb-4">{{ title }}</p>
        <div v-if="question_img" class="w-100 px-2 mb-4">
            <img  :src="`http://tests.flexidev.ru${question_img}`" alt="">
        </div>
        <template v-if="type_question">
            <b-form-radio-group class="w-100 row g-2" v-for="answer in answers" :key="'answer_'+answer.id+Date.now()">
                <b-form-checkbox v-if="answer.question_img" button button-variant="outline-secondary">
                    <div class="d-flex align-items-center">
                        <p> {{ answer.name }}</p>
                        <span class="d-block mx-4">
                            <img :src="answer.question_img" alt="">
                        </span>
                    </div>
                </b-form-checkbox>
                <b-form-checkbox v-else button button-variant="outline-secondary">
                    {{ answer.name }}
                </b-form-checkbox>
            </b-form-radio-group>
        </template>
        <template v-else>
            <b-form-radio-group class="row g-3">
                <b-form-group class="col-6 col-sm-4 " v-for="answer in answers" :key="'answer_'+answer.id+Date.now()">
                    <b-form-radio button button-variant="outline-secondary">
                        <div class="d-flex align-items-center">
                            <p>{{ answer.name }}</p>
                            <span class="d-block mx-4">
                            <img :src="answer.question_img" alt="">
                        </span>
                        </div>
                    </b-form-radio>
                    <b-form-radio button button-variant="outline-secondary">{{ answer.name }}</b-form-radio>
                </b-form-group>
            </b-form-radio-group>
        </template>
    </div>
</template>

<script>

export default {
    name: "TestItem",
    props: {
        question_img: {
            type: String,
            default: null
        },
        image2: {
            type: String,
            default: null
        },
        type_question: {
            type: Boolean,
            default: false
        },
        answers: {
            type: Array,
            default() {
                return []
            }
        },
        title: {
            type: String
        }
    },
    created() {
    }
}
</script>