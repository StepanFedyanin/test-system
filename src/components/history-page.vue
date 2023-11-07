<template>
    <div>
        <ul class="d-flex gap-2 text-success mb-1">
            <li v-for="(breadcrumb,index) in breadcrumbs" :key="breadcrumb.title+index" @click="next(breadcrumb.name)">{{ breadcrumb.title }}</li>
        </ul>
        <h2 class="text-primary h2 fw-bold">{{ breadcrumbsActive }}</h2>
    </div>
</template>

<script>
export default {
    name: "HistoryPage",
    props: {
        breadcrumbs: {
            type: Array,
            default() {
                return []
            }
        },
        breadcrumbsActive: {
            type: String,
            default() {
                return ''
            }
        }
    },
    data() {
        return {
            history: {},
        };
    },
    created() {
        console.log(window.history.state)
    },
    methods: {
        next(params) {
            this.$router.push({name: params || 'tests'});
        }
    }
}
</script>
