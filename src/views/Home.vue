<template>
  <div class="home container">
    <H1 class="mb-5 mt-3">All the reports</H1>

    <ReportsList  />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ReportsList from '@/components/ReportsList.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld,
    ReportsList,

  },
  mounted() {
    this.$store.commit('SET_SEARCH_QUERY','')
  },
}
</script>
