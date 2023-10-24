<template>
    <div>
        <p class="text-success mb-1">Личный кабинет - Все тесты</p>
        <h2 class="text-primary h2 fw-bold">{{history.to}}</h2>
    </div>
</template>

<script>
export default {
    name: "HistoryPage",
    data() {
        return {
            history: {},
        };
    },
    created() {
        this.$router.beforeEach((to, from) => {
            console.log(from.meta?.title);
            this.history = {from: from.meta?.title, to: to.meta?.title};
        });
    },
}
</script>
