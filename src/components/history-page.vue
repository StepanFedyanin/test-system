<template>
    <div>
        <p class="text-success mb-1">{{ history.from }} - {{ history.to }}</p>
        <h2 class="text-primary h2 fw-bold">{{ history.to }}</h2>
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
            this.history = {from: from.meta?.title, to: to.meta?.title};
            console.log(this.history, 'history page')
        });
    },
}
</script>
