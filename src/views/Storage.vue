<template>
  <div class="Storage">
    <Navbar/>
    <div class="row">
      <div class="col-md-2">
        <Sidebar/>
      </div>
      <div class="col-md-10">
        <div class="col-md-12 col-xs-12">
            <button v-if="true" data-toggle="modal" :data-target="'#' + addModalId" class="btn btn-primary mb-5 mt-2 float-right">
                Upload Documents
            </button>
            <h2 class="m-2">Stored Documents</h2>
            <h5 class="m-2">Used: {{getUploadLimit()}}</h5>
            <AddStorageDocumentModal :addModalId="addModalId" :init="init" :used="storedDocs.size" :limit="storedDocs.limit"/>
            <StorageTable :documents="storedDocs.documents" :init="init"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import StorageTable from '@/components/StorageTable.vue'
import AddStorageDocumentModal from '@/components/AddStorageDocumentModal.vue'
import { mapGetters } from 'vuex';
import { getStorageDocs }  from '../api';

export default {
  name: 'Assignments',
  components: {
    Navbar,
    Sidebar,
    StorageTable,
    AddStorageDocumentModal
  },
  data: function (){
    return {
        storedDocs: {limit: null},
        loadingStorage: false,
        addModalId: "addStorage"
    }
  },
  computed:{
    ...mapGetters(['getUser', 'getToken', 'getCourse']),
  },
  props: {
      signedIn: Object,
      course: Object
  },
  methods:{
    getUploadLimit(){
        if(this.storedDocs.limit == null)
        {
            // console.log("stored", this.storedDocs);
            return "Loading";
        }
        return `${parseFloat(this.storedDocs.size/(1024*1024)).toFixed(2)} MB / ${parseFloat(this.storedDocs.limit/(1024*1024)).toFixed(2)} MB`;
    },
    async init(){
      this.loadingStorage = true;
      const res = await getStorageDocs(this.getToken.token);
      this.loadingStorage = false;
      if(res.status= 200){
        this.storedDocs = res.data;
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
