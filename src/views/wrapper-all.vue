<template>
  <TopBar class="mb-4"/>
  <HistoryPage class="mb-4"/>
  <router-view/>
</template>

<script>
import TopBar from "@/components/top-bar.vue";
import HistoryPage from "@/components/history-page.vue";

export default {
  name: "wrapper-all",
  components: {HistoryPage, TopBar}
}
</script>