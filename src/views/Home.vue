<template>
  <div class="home">
    <Navbar/>
    <div class="alert alert-primary" role="alert" v-if="alert_var==1">
    </div>
    <h5 v-if="classes.faculty.length > 0 " class="text-secondary m-3">Classes where you teach</h5>
    <div v-if="classes.faculty.length > 0 " class="card-group">
      <CourseCard
        class="col-md-4 my-2 col-sm-12"
        v-for="cls in classes.faculty"
        v-bind:key="cls.id"
        v-bind:info="cls"
        v-if="cls.is_active"/>
      <ArchiveCourseCard
        class="col-md-4 my-2 col-sm-12"
        v-for="cls in classes.faculty"
        v-bind:key="cls.id"
        v-bind:info="cls"
        v-if="!cls.is_active"/>
    </div>
    <div v-if="classes.faculty.length == 0" style="padding-top:80px; padding-bottom:80px;">
      <center><h4>No Classes in which you are a faculty</h4></center>
    </div>
    <!-- <h5 v-if="classes.faculty.length > 0 " class="text-secondary m-3">Archived Classes</h5> -->
    <h5 v-if="classes.student.length > 0 " class="text-secondary m-3">Classes where you are a Student.</h5>
    <div v-if="classes.student.length > 0 " class="card-group">
      <CourseCard
        class="col-md-4 my-2 col-sm-12"
        v-for="cls in classes.student"
        v-bind:key="cls.id"
        v-bind:info="cls"/>
    </div>
    <div v-if="classes.student.length == 0" style="padding-top:80px; padding-bottom:80px;">
      <center><h4>No Classes in which you are a student</h4></center>
    </div>

    <h5 v-if="classes.moderator.length > 0 " class="text-secondary m-3">Classes where you are a moderator.</h5>
    <div v-if="classes.moderator.length > 0 " class="card-group">
      <CourseCard
        class="col-md-4 my-2 col-sm-12"
        v-for="cls in classes.moderator"
        v-bind:key="cls.id"
        v-bind:info="cls"/>
    </div>
    <div v-if="classes.moderator.length == 0" style="padding-top:80px; padding-bottom:80px;">
      <center><h4>No Classes in which you are a moderator</h4></center>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import CourseCard from '@/components/CourseCard.vue'
import ArchiveCourseCard from '@/components/ArchiveCourseCard.vue'
import { mapGetters } from 'vuex';
import { getUserClassroom } from '../api';

export default {
  name: 'home',
  components: {
    Navbar,
    CourseCard,
    ArchiveCourseCard
  },
  data: function (){
    return {
      signedIn: {
       signedIn: true
      },
      classes: {
        faculty:[],
        moderator:[],
        student:[]
      },
    }
  },
  async mounted(){
    let allClassRes = await getUserClassroom(this.getToken.token);
    if(allClassRes.status == 200){
      this.classes = allClassRes.data;
      console.log(this.classes);
    }
    else{
      console.log(res);
    }
  },
  computed: {
    ...mapGetters(['getToken'])
  },

}
</script>
