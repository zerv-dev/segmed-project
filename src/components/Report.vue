<template>
  <div class="row">
    <div class="col">{{ getReportById(this.$route.params.id).text }}</div>
    <div class="col">
      <p>Click on the tag that you want to change </p>
      <div class="row">
        <div class="col">
          <p> Active tags</p>
          <ul>

              <li 
              v-for ="(tag,index) in activeTags" :key="index"  
              class="badge d-block" :class="(tag === 'goodreport') ? 'badge-success' : 'badge-danger'" 
              @click="removeTag(tag)"
              >#{{tag}}</li>
          </ul>
        </div>
      <!-- </div>
      <div class="row"> -->
          <div class="col">
            <p> Tnactive tags</p>
            <ul>
              <li v-for ="(tag,index) in inactiveTags" :key="index"  class="badge d-block" @click="addTag(tag)" :class="(tag === 'goodreport') ? 'badge-success' : 'badge-danger'" >#{{tag}}</li>
            </ul>
          </div>

      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Report",
  data: function() {
    return {
      
      tags:[
          'goodreport',
          'conditionpresent'
      ],
    };
  },
  mounted() {
    console.log(this.$route.params);
  },
  computed: {
    ...mapGetters(["getReportById"]),
    reportId(){
        return this.$route.params.id
    },
    activeTags(){
        return this.getReportById(this.reportId).activeTags
    },
    inactiveTags(){
        if(!this.activeTags){
            return this.tags
        }else{
            return this.tags.filter((tag)=>{
            return !this.activeTags.includes(tag)
        })
        }
        
    },
  },
  methods: {
      addTag(tag){
          let payload = {
              reportId:this.reportId,
              tag:tag
          }
        this.$store.commit('ADD_TAG',payload)

      },
      removeTag(tag){
        let payload = {
              reportId:this.reportId,
              tag:tag
          }
        this.$store.commit('REMOVE_TAG',payload)
      }
  },
};
</script>
