<template>
  <div class="home">
     <input v-model="searchQuery" placeholder="edit me">
    <p>{{searchQuery}}</p>
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
  data:function () {
    return {
      searchQuery:''
    
    }
  }
}
</script>
