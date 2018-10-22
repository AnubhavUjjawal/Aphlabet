<template>
  <div class="ClassInfo">
    <Navbar/>
    <div class="row">
        <div class="col-md-2">
          <Sidebar :info="info"/>
        </div>
      <div class="col-md-10">
        <div class="col-md-12 col-xs-12">
            <h5 class="m-2 float-right">Faculty: {{getCourse.info.creator.username}}</h5>
            <h4 class="m-2">Class: {{getCourse.info.name}}</h4>
        </div>
        <center v-if="loadingClassInfo">
            <br><br><br><br>
            <span  class="ld ld-ring ld-spin text-primary mt-10" style="font-size:64px;"></span>
        </center>
        <div v-if="loadingClassInfo == false">
            <br>
            <button v-if="getUser.user.is_faculty" data-toggle="modal" :data-target="'#' + addModalId" class="btn btn-primary mb-5 mt-2 mr-2 float-right">
                Add Moderator
            </button>
            <AddModeratorModal :init="init" :addModalId="addModalId" />
            <h4 class="text-secondary m-2">Moderators</h4>
            <div class="col-md-12">
                <StudentTable :students="moderators" :init="init" :canRemoveStudent="getUser.user.is_faculty"/>
            </div><br>
            <h4 class="text-secondary m-2">Students</h4>
            <div class="col-md-12">
                <StudentTable :students="students" :init="init" :canRemoveStudent="false"/>
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
import AddModeratorModal from '@/components/AddModeratorModal.vue'
import {getAllStudentsinClass, getAllModeratorsinClass} from "../api";
import { mapGetters } from "vuex";

export default {
  name: 'ClassInfo',
  components: {
    Navbar,
    Sidebar,
    StudentTable,
    AddModeratorModal
  },
  props: {
    info: Object
  },
  computed: {
    addModalId(){
        return "addModerator" 
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
  methods:{
    async init(){
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
  },
  async mounted(){
    this.init();
  }
}
</script>

