<template>
    <div class="d-flex flex-column flex-grow-1 gap-3 justify-content-center">
        <test-card :isPassed="true"/>
    </div>
</template>

<script>
import TestCard from "@/components/test-card.vue";

export default {
    name: "passed-tests",
    components: {TestCard},
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
