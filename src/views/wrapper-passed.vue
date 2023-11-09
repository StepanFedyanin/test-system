<template>
  <TopBar class="mb-4"/>
  <HistoryPage class="mb-4"/>
  <router-view/>
</template>

<script>
import HistoryPage from "@/components/history-page.vue";
import TopBar from "@/components/top-bar.vue";

export default {
  name:"wrapper-passed",
  components: {TopBar, HistoryPage}
}
</script>