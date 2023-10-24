<template>
    <b-overlay
        :show="showLoaderSending"
        class="row flex-column-reverse flex-md-row pb-5"
        rounded
        spinner-big
        spinner-variant="primary"
    >
        <div class="col-12 col-sm-12 col-md-10  row">
            <div class="swiper swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="testCard testCard-point  mb-4">
                            Авторы: Арнольд Басс, Энн Дарки (1957)<br/>
                            Адаптация: А. К. Осницкий (1998); А. А. Хван и др. (2005)<br/>
                            смотрите замечания по методике<br/>
                        </div>
                        <div class="testCard testCard-point  mb-4">
                            Шкала тревоги Спилбергера-Ханина (State-Trait Anxiety Inventory, STAI) является
                            информативным способом
                            самооценки как уровня тревожности в данный момент (реактивная тревожность, как состояние),
                            так и
                            личностной
                            тревожности (как устойчивая характеристика человека).
                            <br/>
                            <br/>
                            Шкала тревоги Спилбергера-Ханина (State-Trait Anxiety Inventory, STAI) является
                            информативным способом
                            самооценки как уровня тревожности в данный момент (реактивная тревожность, как состояние),
                            так и
                            личностной
                            тревожности (как устойчивая характеристика человека).
                        </div>
                        <b-button variant="primary" class="px-4 py-2 w-100" @click="startSubTest()">Начать</b-button>
                    </div>
                    <div class="swiper-slide" v-for="question in test.select_subtest.question"
                         :key="'question_'+question.id">
                        <TestItem :question="question.name"/>
                    </div>
                </div>
            </div>
            <div v-if="isStartTesting" class="tools">
                <b-button variant="outline-primary" class="px-4 py-2" @click="changeQuestion('prev')">Назад</b-button>
                <div class="d-flex gap-2">
                    <button
                        v-for="(slide,index) in swiper?.slides.slice(1)"
                        :key="slide"
                        :class="`tools__pagination ${swiper.activeIndex>=index + 1?'tools__pagination--active':''}`"
                        @click="changeQuestion(index + 1,true)"
                    >
                        {{ index + 1 }}
                    </button>
                </div>
                <b-button variant="primary" class="px-4 py-2" @click="changeQuestion('next')">Далее</b-button>
            </div>
        </div>
        <div v-if="isStartTesting" class="col-12 col-md-2 d-flex justify-content-end align-items-start">
            <p class="counter py-3 text-primary h3 fw-bold">
                {{ getTimeByFormat }}
            </p>
        </div>
    </b-overlay>
</template>

<script>
import TestItem from "@/components/test-item.vue";
import {onMounted, ref} from "vue";
import Swiper from "swiper";
import app from "@/services/app";

export default {
    name: "TestResponse",
    components: {TestItem},
    data() {
        return {
            test: null,
            timerValue: 1000000,
            isStartTesting: false,
            showLoaderSending: false
        }
    },
    created() {
        this.test = this.$store.state.test;
        this.getSubTest();
    },
    setup() {
        const swiper = ref(null);
        onMounted(() => {
            const options = {};
            swiper.value = new Swiper('.swiper-container', options);
        });
        return {
            swiper,
        };
    },
    mounted() {
    },
    computed: {
        getTimeByFormat() {
            return `${Math.floor(this.timerValue / 60) === 0 ? '' : Math.floor(this.timerValue / 60) + ':'}${this.timerValue % 60 === 0 ? '0' + this.timerValue % 60 : this.timerValue % 60}`;
        }
    },
    methods: {
        changeQuestion(type, meaning = false) {
            if (this.swiper.activeIndex === this.swiper.slides.length - 1) {
                this.onSubmit();
            }
            if (meaning) {
                this.swiper.slideTo(type);
            } else {
                if (type === 'prev') this.swiper.slidePrev();
                else this.swiper.slideNext();
            }
        },
        startTimer() {
            this.timer = setInterval(() => {
                this.timerValue--
                if (this.timerValue === 0) {
                    this.onSubmit();
                    this.stopTimer();
                }
            }, 1000)
        },
        stopTimer() {
            clearTimeout(this.timer)
        },
        onSubmit() {
            if (this.test.active_subtest <= this.test.subtest.length - 1) {
                this.test.active_subtest += 1;
                this.getSubTest();
            } else {
                this.next();
            }
        },
        next(params) {
            this.$router.push(params || 'finale');
        },
        getSubTest() {
            this.showLoaderSending = true;
            this.stopTimer();
            app.getSubTest(this.test.subtest[this.test.active_subtest].id).then(data => {
                this.$store.dispatch('updateTest', {...this.test, select_subtest: data});
                this.showLoaderSending = false;
                this.startTimer();
            }).catch(err => {
                this.$store.dispatch('showError', err);
                this.showLoaderSending = false;
            })
        },
        startSubTest() {
            this.isStartTesting = true;
            this.startTimer();
            this.swiper.slideNext();
        }
    }
}
</script>
