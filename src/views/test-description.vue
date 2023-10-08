<template>
    <template v-if="longDescription">
        <div class="pb-5">
            <history-page class="my-4"/>
            <div class="row align-items-start">
                <table class="attempts col-3 mb-4">
                    <thead>
                    <tr>
                        <td>
                            Попытка
                        </td>
                        <td>
                            Дата
                        </td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(attempt,index) in attempts" :key="attempt+Date.now()">
                        <td>
                            {{ index + 1 }} Попытка
                        </td>
                        <td>
                            {{ attempt }}
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div class="col-9">
                    <div class="testCard testCard-point text-default7 text-color-Tundora mb-4">
                        Авторы: Арнольд Басс, Энн Дарки (1957)<br/>
                        Адаптация: А. К. Осницкий (1998); А. А. Хван и др. (2005)<br/>
                        смотрите замечания по методике<br/>
                    </div>
                    <div class="testCard testCard-point text-default7 text-color-Tundora mb-4">
                        Шкала тревоги Спилбергера-Ханина (State-Trait Anxiety Inventory, STAI) является информативным способом
                        самооценки как уровня тревожности в данный момент (реактивная тревожность, как состояние), так и личностной
                        тревожности (как устойчивая характеристика человека).
                        <br/>
                        <br/>
                        Шкала тревоги Спилбергера-Ханина (State-Trait Anxiety Inventory, STAI) является информативным способом
                        самооценки как уровня тревожности в данный момент (реактивная тревожность, как состояние), так и личностной
                        тревожности (как устойчивая характеристика человека).
                        <br/>
                        <br/>
                        Шкала тревоги Спилбергера-Ханина (State-Trait Anxiety Inventory, STAI) является информативным способом
                        самооценки как уровня тревожности в данный момент (реактивная тревожность, как состояние), так и личностной
                        тревожности (как устойчивая характеристика человека).
                        <br/>
                        <br/>
                        Шкала тревоги Спилбергера-Ханина (State-Trait Anxiety Inventory, STAI) является информативным способом
                        самооценки как уровня тревожности в данный момент (реактивная тревожность, как состояние), так и личностной
                        тревожности (как устойчивая характеристика человека).
                        <br/>
                        <br/>
                        Шкала тревоги Спилбергера-Ханина (State-Trait Anxiety Inventory, STAI) является информативным способом
                        самооценки как уровня тревожности в данный момент (реактивная тревожность, как состояние), так и личностной
                        тревожности (как устойчивая характеристика человека).
                        <br/>
                        <br/>
                        Шкала тревоги Спилбергера-Ханина (State-Trait Anxiety Inventory, STAI) является информативным способом
                        самооценки как уровня тревожности в данный момент (реактивная тревожность, как состояние), так и личностной
                        тревожности (как устойчивая характеристика человека).
                        <br/>
                        <br/>
                        Шкала тревоги Спилбергера-Ханина (State-Trait Anxiety Inventory, STAI) является информативным способом
                        самооценки как уровня тревожности в данный момент (реактивная тревожность, как состояние), так и личностной
                        тревожности (как устойчивая характеристика человека).
                    </div>
                    <div class="d-flex justify-content-between">
                        <b-button variant="secondary" class="text-primary">75 вопросов</b-button>
                        <b-button variant="primary" @click="next('finale')">Пройти тест</b-button>
                    </div>
                </div>
            </div>
        </div>
    </template>
    <template v-else>
        <div class="pb-5">
            <div class="d-flex justify-content-between align-items-center">
                <history-page class="my-4"/>
                <b-button variant="primary" class="px-4" @click="next('finale')">Пройти тест</b-button>
            </div>
            <div class="testCard testCard-point text-default7 text-color-Tundora mb-4">
                Авторы: Арнольд Басс, Энн Дарки (1957)<br/>
                Адаптация: А. К. Осницкий (1998); А. А. Хван и др. (2005)<br/>
                смотрите замечания по методике<br/>
            </div>
            <div class="testCard testCard-point text-default7 text-color-Tundora mb-4">
                Шкала тревоги Спилбергера-Ханина (State-Trait Anxiety Inventory, STAI) является информативным способом
                самооценки как уровня тревожности в данный момент (реактивная тревожность, как состояние), так и личностной
                тревожности (как устойчивая характеристика человека).
                <br/>
                <br/>
                Шкала тревоги Спилбергера-Ханина (State-Trait Anxiety Inventory, STAI) является информативным способом
                самооценки как уровня тревожности в данный момент (реактивная тревожность, как состояние), так и личностной
                тревожности (как устойчивая характеристика человека).
            </div>
            <div class="d-flex flex-column align-items-end w-25">
                <table class="attempts mb-4 w-100">
                    <thead>
                    <tr>
                        <td>
                            Попытка
                        </td>
                        <td>
                            Дата
                        </td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(attempt,index) in attempts" :key="attempt+Date.now()">
                        <td>
                            {{ index + 1 }} Попытка
                        </td>
                        <td>
                            {{ attempt }}
                        </td>
                    </tr>
                    </tbody>
                </table>
                <b-button variant="primary">Все результаты</b-button>
            </div>
        </div>
    </template>
</template>

<script>
import HistoryPage from "@/components/history-page.vue";

export default {
    name: "TestDescription",
    components: {HistoryPage},
    data() {
        return {
            attempts: ['24.07.2023', '24.07.2023', '24.07.2023', '24.07.2023', '24.07.2023'],
            longDescription: true
        }
    },
    methods:{
        next(params){
            [params]
            this.$router.push({name: 'finale'});
        }
    }
}
</script>