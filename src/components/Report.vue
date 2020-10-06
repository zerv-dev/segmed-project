<template>
        <div class="row">
            <div class="col">{{getReportById(this.$route.params.id).text}}</div>
        </div>
</template>
<script>
import {  mapGetters } from "vuex";
export default {
    name:'Report',
    data:function () {
        return{
            reportId:this.$route.params
        }
    },
    mounted(){
        console.log(this.$route.params)
    },
    computed: {
        ...mapGetters(['getReportById'])
    },
}
</script>
