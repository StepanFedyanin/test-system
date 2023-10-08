<template>
    <div>
        <p class="text-default5 text-color-Boulder mb-1">Личный кабинет - Все тесты</p>
        <h1 class="text-default text-color-BlueMarguerite">Все тесты</h1>
    </div>
</template>

<script>
export default {
    name: "HistoryPage",
    data() {
        return {
            history: [],
        };
    },
    created() {
        this.$router.beforeEach((to, from) => {
            console.log(to, from);
            this.history.push({from: from.path, to: to.path});
        });
    },
}
</script>
