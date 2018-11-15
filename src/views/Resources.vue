<template>
  <div class="Lectures">
    <Navbar/>
    <div class="row">
      <div class="col-md-2">
        <Sidebar/>
      </div>
      <div class="col-md-10">
        <!-- <BackButton/> -->
        <div class="col-md-11 col-xs-11">
            <button data-toggle="modal" :data-target="'#' + addModalId" class="btn btn-primary mb-5 mt-2 float-right">
                Share Resource
            </button>
            <h2 class="m-2">Resources</h2>
            <AddResourceModal :addModalId="addModalId" v-bind:init="init"/>
            <ResourceTable :resources="lectures"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import ResourceTable from '@/components/ResourceTable.vue'
import AddResourceModal from '@/components/AddResourceModal.vue'
import BackButton from '@/components/BackButton.vue'
import { mapGetters } from 'vuex';
import { getResources }  from '../api';

export default {
  name: 'Resources',
  components: {
    Navbar,
    Sidebar,
    ResourceTable,
    AddResourceModal,
    BackButton
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
      const res = await getResources(this.getToken.token, this.getCourse.info.id);
      this.loadingLectures = false;
      if(res.status= 200){
        this.lectures = res.data;
        console.log(res.data);
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
