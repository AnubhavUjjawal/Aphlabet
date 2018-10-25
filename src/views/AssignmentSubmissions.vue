<template>
  <div class="Lectures">
    <Navbar/>
    <div class="row">
      <div class="col-md-2">
        <Sidebar/>
      </div>
      <div class="col-md-10">
        <div class="col-md-12 col-xs-12">
            <!-- <button v-if="getUser.user.is_faculty" data-toggle="modal" :data-target="'#' + addModalId" class="btn btn-primary mb-5 mt-2 float-right">
                Add Assignment
            </button> -->
            <h2 class="m-2">Assignment Submissions: </h2>
            <h3 class="m-3 pull-right">Max Score: {{getAssignment.assignment.max_score}}</h3>
            <!-- <AddAssignmentModal :addModalId="addModalId" v-bind:init="init"/> -->
            <AssignmentSubmissionsTable :submissions="submissions" :init="init"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import AssignmentSubmissionsTable from '@/components/AssignmentSubmissionTable.vue'
import AddAssignmentModal from '@/components/AddAssignmentModal.vue'
import { mapGetters } from 'vuex';
import { getAssignmentSubmissions }  from '../api';

export default {
  name: 'AssignmentSubmissions',
  components: {
    Navbar,
    Sidebar,
    AssignmentSubmissionsTable,
    AddAssignmentModal
  },
  data: function (){
    return {
        submissions: [],
        loadingAssignments: false,
        addModalId: "addAssignment"
    }
  },
  computed:{
    ...mapGetters(['getUser', 'getToken', 'getAssignment'])
  },
  props: {
  },
  methods:{
    async init(){
      this.loadingAssignments = true;
      const res = await getAssignmentSubmissions(this.getToken.token, this.getAssignment.assignment.id);
      this.loadingAssignments = false;
      if(res.status= 200){
        console.log(res.data);
        this.submissions = res.data;
      }
      else{
        console.log(res);
      }
    }
  },
  mounted(){
    this.init();
  }
}
</script>
