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
                Add Lecture
            </button>
            <h2 class="m-2">Lectures</h2>
            <AddLectureModal :addModalId="addModalId" v-bind:init="init"/>
            <LectureTable :lectures="lectures"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import LectureTable from '@/components/LectureTable.vue'
import AddLectureModal from '@/components/AddLectureModal.vue'
import { mapGetters } from 'vuex';
import { getLectures }  from '../api';

export default {
  name: 'Lectures',
  components: {
    Navbar,
    Sidebar,
    LectureTable,
    AddLectureModal
  },
  data: function (){
    return {
        lectures: [],
        loadingLectures: false,
        addModalId: "addLecture"
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
      this.loadingLectures = true;
      const res = await getLectures(this.getToken.token, this.getCourse.info.id);
      this.loadingLectures = false;
      if(res.status= 200){
        this.lectures = res.data;
        // console.log(res.data);
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
