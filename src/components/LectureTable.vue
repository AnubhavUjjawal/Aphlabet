<template>
  <div class="LectureTable table-responsive">
    <table class="table table-hover">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col" colspan="3">Description</th>
            <th scope="col" colspan="1">Uploaded On</th>
            <th scope="col" colspan="1">Attachment</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(lecture, index ) in lectures" :key="lecture.id"> 
              <th scope="row">{{doMath(index)}}</th>
              <td colspan="3"><small>{{lecture.description}}</small></td>
              <td colspan="1"><small>{{getDateString(lecture.uploaded_on)}}</small></td>
              <td colspan="1">
                <a target="_blank" :href="getURL(lecture.attachment)" class="btn btn-primary" role="button">Download</a>
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
  name: 'LectureTable',
  props: {
    lectures: Array
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