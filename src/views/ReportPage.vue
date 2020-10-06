<template>
    <div class="container">
        <div class="row mt-5 mb-5">
            <router-link v-if="getPrevReport" class="btn btn-primary mr-auto" :disabled="getPrevReport" :to="`/report/${getPrevReport.id}`" >Prev</router-link >
            <router-link class="btn btn-primary m-auto"  :to="`${searchQuery ? `/search/${searchQuery}` : '/'}`" >Back to results</router-link >            
            <router-link v-if="getNextReport" class="btn btn-primary ml-auto" :disabled="getNextReport" :to="`/report/${getNextReport.id}`" >Next</router-link >
        </div>
        <Report />
    </div>
</template>
<script>
import {  mapGetters, mapState } from "vuex";
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
    computed: {
        ...mapState(['searchQuery']),
        ...mapGetters(['getReportById','getReportsBySearchQuery',]),
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
