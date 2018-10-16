<template>
  <div class="ClassInfo">
    <Navbar/>
    <div class="row">
        <div class="col-md-2">
          <Sidebar :info="info"/>
        </div>
      <div class="col-md-10">
        <div class="col-md-12 col-xs-12">
            <h4 class="m-2">Classroom Information</h4>
        </div><br><br><br><br>
        <center>
            <span v-if="loadingClassInfo" class="ld ld-ring ld-spin text-primary mt-10" style="font-size:64px;"></span>
        </center>
        <div class="col-md-12">
            <StudentTable v-if="loadingClassInfo == false" v-bind:students="students"/>
        </div>
        <br><br><br>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from '@/components/Sidebar.vue';
import Navbar from '@/components/Navbar.vue'
import StudentTable from '@/components/StudentTable.vue'
import {getAllStudentsinClass} from "../api";
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
      loadingClassInfo: false
    }
  },
  async mounted(){
    this.loadingClassInfo = true;
    let res = await getAllStudentsinClass(this.getToken.token, this.getCourse.info.id);
    this.loadingClassInfo = false;
    if(res.status == 200){
        this.students = res.data
      }
    else{
      console.log(res);
    }
  }
}
</script>

