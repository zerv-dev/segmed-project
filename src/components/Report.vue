<template>
  <div class="row">
    <h1 class="col-12 mb-3">Report {{reportId}}</h1>
    <div class="col">{{ getReportById(this.$route.params.id).text }}</div>
    <div class="col">
      <p>Click on the tag that you want to change </p>
      <div class="row">
        <div class="col">
          <strong> Active tags</strong>
          <ul>
              <li 
              v-for ="(tag,index) in activeTags" :key="index"  
              class="badge d-block my-2" :class="(tag === 'goodreport') ? 'badge-success' : 'badge-danger'" 
              @click="removeTag(tag)"
              >#{{tag}}</li>
          </ul>
        </div>
          <div class="col">
            <strong> Inactive tags</strong>
            <ul>
              <li v-for ="(tag,index) in inactiveTags" :key="index"  class="badge d-block my-2" @click="addTag(tag)" :class="(tag === 'goodreport') ? 'badge-success' : 'badge-danger'" >#{{tag}}</li>
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
