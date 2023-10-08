<template>
    <div>
        <TopBar/>
        <router-view/>
    </div>
</template>

<script>
import TopBar from "@/components/top-bar.vue";

export default {
    name: "TestPage",
    components: {TopBar}
}
</script>
