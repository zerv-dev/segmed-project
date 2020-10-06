<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link to="/" class="navbar-brand" href="#">Navbar</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-5">
      <li class="nav-item active">
        <router-link to="/" class="nav-link" href="#">Home <span class="sr-only">(current)</span></router-link>
      </li>
      
      
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input style="width:500px" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-model="searchQuery" @submit.prevent="submitSearch">
      <!-- <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click.prevent="submitSearch">Search</button> -->

      <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click.prevent="submitSearch">Search</button>
    </form>
  </div>
</nav>
    </div>
</template>

<script>
import {  mapState } from "vuex";
export default {
    name:'NavBar',
    data() {
      return {
        searchQuery:''
      }
    },
    methods:{
        submitSearch(e){
          if(this.searchQuery===''){
            return
          }
            console.log(this.searchQuery.split(' ').join('+'))
            this.$store.commit('SET_SEARCH_QUERY',this.searchQuery)
            this.$router.push('/search/'+this.searchQuery)

        }
    },
    computed:{
      routeHasSearch(){
        return this.$route
      }
    },
    watch: {
    $route(to, from) {
      if(!to.path.includes('search') && from.path.includes('search')){
            this.searchQuery= ''
      } 
    }
  }
}
</script>