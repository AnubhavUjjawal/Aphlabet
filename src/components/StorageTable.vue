<template>
  <div class="StorageTable table-responsive">
    <div class="modal fade" tabindex="-1" role="dialog" id="DeleteDoc">
        <!-- <input hidden v-model="id"> -->
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title">Delete</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body">
                <p>Are you sure you want to remove this document?</p>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">
                    Close
                </button>
                <button type="button" class="btn btn-danger" @click="deleteDoc">
                    Delete <span v-if="loadingDelete" class="ld ld-ring ld-spin"></span>
                </button>
                </div>
            </div>
        </div>
    </div>
    <table class="table table-hover">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col" colspan="3">File Name</th>
            <th scope="col" colspan="1">Uploaded On</th>
            <th scope="col" colspan="1">Attachment</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(document, index ) in documents" :key="document.id"> 
              <th scope="row">{{doMath(index)}}</th>
              <td colspan="3"><small>{{document.fileName}}</small></td>
              <td colspan="1"><small>{{getDateString(document.uploaded_on)}}</small></td>
              <td colspan="1">
                <a target="_blank" :href="getURL(document.document)" class="btn btn-primary mr-2" role="button">Download</a>
                <button class="btn btn-danger" @click="changeID(document.id)">Delete</button>
              </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>
<script>
// import logo from '../assets/logo.png'
import { rootURL, deleteStorageDocument } from "../api";
import { mapGetters } from 'vuex';
export default {
  name: 'StorageTable',
  data(){
    return {
        loadingDelete: false,
        id: -1
    }
  },
  props: {
    documents: Array,
    init: Function
  },
  computed: mapGetters(['getToken', 'getCourse']),
  methods: {
    doMath: function (index) {
      return index+1
    },
    getDateString(date){
      return moment(date).format("Do MMMM YYYY,  hh:mm a");
    },
    getURL(url){
      return rootURL + url;
    },
    changeID(id){
        this.id = id;
        $("#DeleteDoc").modal('show');
    },
    async deleteDoc(){
        this.loadingDelete = true;
        const res = await deleteStorageDocument(this.getToken.token, this.id);
        this.loadingDelete = false;
        if(res.status == 200){
            $("#DeleteDoc").modal('hide');
            this.init();
        }
        else{
            console.log(res);
        }
    }
  }
}
</script>