<template>
  <div class="AssignmentTable table-responsive">
    <table class="table table-hover">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col" colspan="3">Title</th>
            <th scope="col" colspan="1">Deadline</th>
            <th scope="col" colspan="1">Max Score</th>
            <th scope="col" colspan="1">Attachment</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(assignment, index ) in assignments" :key="assignment.id"> 
              <th scope="row">{{doMath(index)}}</th>
              <td colspan="3"><small>{{assignment.title}}</small></td>
              <td colspan="1"><small>{{getDateString(assignment.deadline)}}</small></td>
              <td colspan="1"><small>{{assignment.max_score}}</small></td>
              <td colspan="1">
                <a style="color:white;" v-if="getUser.user.is_faculty"  @click="navToSubmissions(assignment)" class="btn btn-primary" role="button">Check Submissions</a>                
                <a v-else target="_blank" :href="getURL(assignment.attachment)" class="btn btn-primary mr-2" role="button">Download</a>
                <a style="color:white;" v-if="getUser.user.is_faculty != true" @click="changeAssignment(assignment)" data-toggle="modal" :data-target="'#' + submitAssignment" :class="{ 'btn':true, 'btn-primary':true, 'disabled':isDisabled(assignment)}" role="button">Submit</a>                
              </td>
            </tr>
        </tbody>
    </table>
    <SubmitAssignmentModal :addModalId="submitAssignment" :init="init" :assignment="assignment"/>
  </div>
</template>
<script>
// import logo from '../assets/logo.png'
import { rootURL } from "../api";
import { mapGetters } from "vuex";
import SubmitAssignmentModal from "@/components/SubmitAssignment.vue";
export default {
  name: 'assignmentTable',
  components: {
    SubmitAssignmentModal
  },
  data(){
    return{
      assignment: {}
    }
  },
  props: {
    assignments: Array,
    init: Function
  },
  computed:{
    ...mapGetters(['getUser']),
    submitAssignment(){
      return "submitAssignment";
    }
  },
  methods: {
    doMath: function (index) {
      return index+1
    },
    getDateString(date){
      return moment(date).format("Do MMMM YYYY,  hh:mm a");
    },
    getURL(url){
      return rootURL + url;
    },
    changeAssignment(assignment){
      this.assignment = assignment;
    },
    navToSubmissions(assignment){
        this.$store.commit({
            type: 'setAssignment',
            assignment
        });
        this.$router.push('AssignmentSubmissions');
    },
    isDisabled(assignment){
      // console.log(moment(assignment.deadline).toDate() < new Date());
      if(moment(assignment.deadline).toDate() < new Date())
        return true;
      return false;
    }
  },
  mounted(){
    this.init();
  }
}
</script>