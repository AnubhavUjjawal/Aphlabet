<template>
  <div class="AssignmentTable table-responsive">
    <table class="table table-hover">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col" colspan="3">Username</th>
            <th scope="col" colspan="1">Email</th>
            <th scope="col" colspan="1">Score Given</th>
            <th scope="col" colspan="1">Download</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(submission, index ) in submissions" :key="submission.id"> 
              <th scope="row">{{doMath(index)}}</th>
              <td colspan="3"><small>{{submission.submitter.username}}</small></td>
              <td colspan="1"><small>{{submission.submitter.email}}</small></td>
              <td colspan="1"><small>{{submission.score}}</small></td>
              <td colspan="1" v-if="getUser.user.is_faculty">
                <a target="_blank" :href="getURL(submission.attachment)" class="btn btn-primary mr-2" role="button">Download</a>
                <button class="btn btn-primary" @click="changeSubmissionData(submission)" data-toggle="modal" :data-target="'#' + submitAssignment">Give/Change Marks</button>
              </td>
            </tr>
        </tbody>
    </table>
    <SubmitAssignmentGradeModal :addModalId="submitAssignment" :init="init" :submission="submission"/>
  </div>
</template>
<script>
// import logo from '../assets/logo.png'
import { rootURL } from "../api";
import { mapGetters } from "vuex";
import SubmitAssignmentGradeModal from "@/components/SubmitAssignmentGradeModal.vue";
import BackButton from '@/components/BackButton.vue'
export default {
  name: 'AssignmentSubmissionsTable',
  components: {
    SubmitAssignmentGradeModal,
    BackButton
  },
  data(){
    return{
      submission: { submitter: { username: '' }, max_marks: 0}
    }
  },
  props: {
    submissions: Array,
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
    changeSubmissionData(submission){
        this.submission = submission;
    },
    getDateString(date){
      return moment(date).format("Do MMMM YYYY,  hh:mm a");
    },
    getURL(url){
      return rootURL + url;
    },
    changeAssignment(submission){
      this.submission = submission;
    },
    navToSubmissions(submission){
        this.$store.commit({
            type: 'setAssignment',
            submission
        });
        this.$router.push('AssignmentSubmissions');
    },
    isDisabled(submission){
      // console.log(moment(submission.deadline).toDate() < new Date());
      if(moment(submission.deadline).toDate() < new Date())
        return true;
      return false;
    }
  },
  mounted(){
    this.init();
  }
}
</script>