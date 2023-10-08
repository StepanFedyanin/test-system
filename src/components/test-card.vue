<template>
    <template v-if="isPassed">
        <div class="testCard testCard-background testCard-point testCard-small d-flex justify-content-between" @click="next('test')">
            <p class="text-secondary fw-medium">Тест Название</p>
            <p class="text-primary testCard-arrow">14 попыток </p>
        </div>
    </template>
    <template v-else>
        <div class="testCard testCard-background testCard-boxshadow pb-2" @click="next('test')">
            <p class="testCard-title text-light mb-2">
            <span>
                <img src="@/assets/img/icon/info.svg" alt=""/>
            </span>
                Проективные
            </p>
            <ul class="d-flex flex-column">
                <li class="testCard-arrow px-4 py-1 text-secondary" v-for="test in tests" :key="'test_'+test">Тест Название {{ test }}
                </li>
            </ul>
        </div>
    </template>
</template>

<script>
export default {
    name: "TestCard",
    props: {
        tests: {
            type: Array,
            default(){
                return [];
            }
        },
        isPassed:{
            type:Boolean,
            default(){
                return false;
            }
        }
    },
    methods:{
        next(params){
            this.$router.push({name:params});
        }
    }
}
</script>
