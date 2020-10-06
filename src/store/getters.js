export default{
    getReportsBySearchQuery:(state)=>{
        return state.reports.filter((report)=>{
            return state.searchQuery.toLowerCase().split(' ').every((term) => report.text.toLowerCase().includes(term))
        })
    },
    getReportById:(state)=>(id)=>{
        return state.reports.find((report) => report.id == id)
    },
    
}