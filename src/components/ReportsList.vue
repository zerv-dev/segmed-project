<template>
    <div class="row">
        <div class="col">
                <span class=" float-left p-1 ml">ID</span>
                <span class=" float-left p-1 ml-2">Report</span>
                <span class="p-1 ml-5 float-left">Text</span>            
        </div>

        <div v-if="getReportsBySearchQuery" class="col justify-content-center  ">
            <transition-group
                tag="div"
                name="component-fade"
                mode="out-in"
                class="col-12 list-group"
            >
                <router-link
                    :to="{path:`/report/${report.id}`}"
                    v-for="report in getReportsBySearchQuery"
                    :key="report.id"
					
                    class="list-group-item list-group-item-action reports-list-item"
					
                >
                    <span>{{ report.id + "." }}</span>
                    <strong class="ml-2 mr-5">{{
                        "Report " + report.id
                    }}</strong>
                    <span
                        v-for="(tag, index) in report.activeTags"
                        :key="index"
                        class="badge "
                        :class="tag === 'goodreport'? 'badge-success' : 'badge-danger'"
                    >#{{ tag }}</span>
                    {{ "  " + report.text }}
                </router-link>
            </transition-group>
        </div>
    </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";

export default {
    name: "ReportsList",

    data: function() {
        return {
            dataReports: [
                {
                    id: 1,
                    text:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                },
                {
                    id: 2,
                    text:
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
                },
                {
                    id: 3,
                    text:
                        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
                },
            ],
        };
    },
    computed: {
        ...mapGetters(["getReportsBySearchQuery"]),
    },
};
</script>
