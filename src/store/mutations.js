export default{
    SET_SEARCH_QUERY:(state,payload)=>{
        state.searchQuery = payload
    },
    ADD_TAG:(state,payload)=>{
        let {reportId,tag} = payload
        let report = state.reports.find((report)=>{
            return report.id == reportId
        })
        report.activeTags.push(tag)
    },
    REMOVE_TAG:(state,payload)=>{
        let {reportId,tag} = payload
        let report = state.reports.find((report)=>{
            return report.id == reportId
        })
        console.log(report)
        let index = report.activeTags.indexOf(tag)
        report.activeTags.splice(index,1)
    }
}