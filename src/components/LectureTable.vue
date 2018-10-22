<template>
  <div class="LectureTable table-responsive">
    <table class="table table-hover">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Description</th>
            <th scope="col">Uploaded On</th>
            <th scope="col">Attachement</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(lecture, index ) in lectures" :key="lecture.id"> 
              <th scope="row">{{doMath(index)}}</th>
              <td><small>{{lecture.description}}</small></td>
              <td>{{getDateString(lecture.uploaded_on)}}</td>
              <td>
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