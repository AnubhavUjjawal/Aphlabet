<template>
  <div class="AssignmentTable table-responsive">
    <table class="table table-hover">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col" colspan="3">Title</th>
            <th scope="col" colspan="1">Deadline</th>
            <th scope="col" colspan="1">Attachment</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(assignment, index ) in assignments" :key="assignment.id"> 
              <th scope="row">{{doMath(index)}}</th>
              <td colspan="3"><small>{{assignment.title}}</small></td>
              <td colspan="1"><small>{{getDateString(assignment.deadline)}}</small></td>
              <td colspan="1">
                <a target="_blank" :href="getURL(assignment.attachment)" class="btn btn-primary" role="button">Download</a>
              </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>
<script>
// import logo from '../assets/logo.png'
import { rootURL } from "../api";
export default {
  name: 'assignmentTable',
  props: {
    assignments: Array
  },
  computed:{
    
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
    }
  }
}
</script>