<template>
    <div class="row flex-column-reverse flex-md-row pb-5">
        <div class="col-12 col-sm-12 col-md-10  row">
            <div class="swiper swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <TestItem/>
                    </div>
                    <div class="swiper-slide">
                        <TestItem image="true"/>
                    </div>
                    <div class="swiper-slide">
                        <TestItem image2="true"/>
                    </div>
                    <div class="swiper-slide">
                        <TestItem image="true" image2="true"/>
                    </div>

                    <div class="swiper-slide">
                        <TestItem type="radio" image="true"/>
                    </div>
                </div>
            </div>
            <div class="tools">
                <b-button variant="outline-primary" class="px-4 py-2" @click="changeQuestion('prev')">Назад</b-button>
                <div class="d-flex gap-2">
                    <button
                        v-for="(slide,index) in swiper?.slides"
                        :key="slide"
                        :class="`tools__pagination ${swiper.activeIndex>=index?'tools__pagination--active':''}`"
                        @click="changeQuestion(index,true)"
                    >
                        {{ index + 1 }}
                    </button>
                </div>
                <b-button variant="primary" class="px-4 py-2" @click="changeQuestion('next')">Далее</b-button>
            </div>
        </div>
        <div class="col-12 col-md-2 d-flex justify-content-end align-items-start">
            <p class="counter py-3 text-primary h3 fw-bold">
                {{ getTimeByFormat }}
            </p>
        </div>
    </div>
</template>

<script>
import TestItem from "@/components/test-item.vue";
import {onMounted, ref} from "vue";
import Swiper from "swiper";

export default {
    name: "TestResponse",
    components: {TestItem},
    data() {
        return {
            timerValue: 1000
        }
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
        this.startTimer()
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
            this.next();
        },
        next(params) {
            this.$router.push(params || 'finale');
        }
    }
}
</script>
