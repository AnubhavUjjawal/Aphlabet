<template>
  <div class="ClassInfo">
    <Navbar/>
    <div class="row">
        <div class="col-md-2">
          <Sidebar :info="info"/>
        </div>
      <div class="col-md-10">
        <div class="col-md-12 col-xs-12">
            <h5 class="m-2 float-right">Faculty: {{getCourse.info.username}}</h5>
            <h4 class="m-2">Class: {{getCourse.info.name}}</h4>
        </div>
        <center v-if="loadingClassInfo">
            <br><br><br><br>
            <span  class="ld ld-ring ld-spin text-primary mt-10" style="font-size:64px;"></span>
        </center>
        <div v-if="loadingClassInfo == false">
            <br>
            <h4 class="text-secondary m-2">Moderators</h4>
            <div class="col-md-12">
                <StudentTable v-bind:students="moderators"/>
            </div><br>
            <h4 class="text-secondary m-2">Students</h4>
            <div class="col-md-12">
                <StudentTable v-bind:students="students"/>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from '@/components/Sidebar.vue';
import Navbar from '@/components/Navbar.vue'
import StudentTable from '@/components/StudentTable.vue'
import {getAllStudentsinClass, getAllModeratorsinClass} from "../api";
import { mapGetters } from "vuex";

export default {
  name: 'ClassInfo',
  components: {
    Navbar,
    Sidebar,
    StudentTable
  },
  props: {
    info: Object
  },
  computed: {
    addModalId(){
        return "addAnnouncement" 
    },
    ...mapGetters(['getToken', 'getCourse', 'getUser']),
  },
  data: function(){
    return {
      students: [],
      moderators: [],
      loadingClassInfo: false
    }
  },
  async mounted(){
    this.loadingClassInfo = true;
    let res = await getAllStudentsinClass(this.getToken.token, this.getCourse.info.id);
    let resMod = await getAllModeratorsinClass(this.getToken.token, this.getCourse.info.id);
    this.loadingClassInfo = false;
    if(res.status == 200){
        this.students = res.data;
      }
    else{
      console.log(res);
    }
    if(resMod.status == 200){
        this.moderators = resMod.data;
      }
    else{
      console.log(resMod);
    }
  }
}
</script>

