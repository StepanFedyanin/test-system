<template>
    <div>
        <ol
            v-if="$breadcrumbs.value"
            class="breadcrumb"
        >
            <li
                v-for="(item, index) in $breadcrumbs.value"
                :key="`breadcrumbs-${index}`"
                class="breadcrumb-item small"

            >
                <router-link
                    v-if="!item.current"
                    :to="item.link"
                >
                    {{ item.label }}
                </router-link>
                <span
                    v-else
                >
                {{ item.label }}
            </span>
            </li>
        </ol>
    </div>
</template>

<script>
export default {
    name: "history-page",
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
    },
    created() {
        this.$nextTick(() => {
            console.log(this.$breadcrumbs.value)
            if (this.$breadcrumbs.value[this.$breadcrumbs.value.length - 1].link === 'test') {
                this.$breadcrumbs.value[this.$breadcrumbs.value.length - 1].label = this.$store.state.test.name
            }
        })
    },
    methods: {
        next(params) {
            this.$router.push({name: params || 'tests'});
        }
    }
}
</script>
