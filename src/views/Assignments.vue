<template>
  <div class="Lectures">
    <Navbar/>
    <div class="row">
      <div class="col-md-2">
        <Sidebar/>
      </div>
      <div class="col-md-10">
        <div class="col-md-12 col-xs-12">
            <button v-if="getUser.user.is_faculty" data-toggle="modal" :data-target="'#' + addModalId" class="btn btn-primary mb-5 mt-2 float-right">
                Add Assignment
            </button>
            <h2 class="m-2">Assignments</h2>
            <AddAssignmentModal :addModalId="addModalId" v-bind:init="init"/>
            <AssignmentTable :assignments="assignments" :init="init"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import AssignmentTable from '@/components/AssignmentTable.vue'
import AddAssignmentModal from '@/components/AddAssignmentModal.vue'
import { mapGetters } from 'vuex';
import { getAssignments }  from '../api';

export default {
  name: 'Assignments',
  components: {
    Navbar,
    Sidebar,
    AssignmentTable,
    AddAssignmentModal
  },
  data: function (){
    return {
        assignments: [],
        loadingAssignments: false,
        addModalId: "addAssignment"
    }
  },
  computed:{
    ...mapGetters(['getUser', 'getToken', 'getCourse'])
  },
  props: {
      signedIn: Object,
      course: Object
  },
  methods:{
    async init(){
      this.loadingAssignments = true;
      const res = await getAssignments(this.getToken.token, this.getCourse.info.id);
      this.loadingAssignments = false;
      if(res.status= 200){
        this.assignments = res.data;
        console.log(res.data);
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
