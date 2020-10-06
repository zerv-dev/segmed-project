<template>
    <div class="container">
        <div class="row mb-5">
            <router-link v-if="getPrevReport" class="btn btn-primary mr-auto" :disabled="getPrevReport" :to="{path:`/report/${getPrevReport.id}`}" >Prev</router-link >
            <router-link v-if="getNextReport" class="btn btn-primary ml-auto" :disabled="getNextReport" :to="`/report/${getNextReport.id}`" >Next</router-link >

        </div>
        <Report />
    </div>
</template>
<script>
import {  mapGetters } from "vuex";
import Report from '@/components/Report.vue'
export default {
    name:'ReportPage',
    components:{
        Report
    },
    data:function () {
        return{
            off:''
        }
    },
    mounted(){
        console.log(this.$route.params)
    },
    computed: {
        ...mapGetters(['getReportById','getReportsBySearchQuery']),
        reportId(){
            return this.$route.params.id
        },
        getNextReport(){
            let currrentReportIndex = this.getReportsBySearchQuery.findIndex((report)=>{
                return report.id == this.reportId

            })
            return this.getReportsBySearchQuery[currrentReportIndex+1] || null 
        
        },
        getPrevReport(){
            let currrentReportIndex = this.getReportsBySearchQuery.findIndex((report)=>{
                return report.id == this.reportId

            })
            return this.getReportsBySearchQuery[currrentReportIndex-1] || null 
        }
    },
}
</script>
