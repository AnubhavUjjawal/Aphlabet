<template>
  <div class="StudentTable table-responsive table-wrapper-scroll-y">
    <table class="table table-hover">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>    
            </tr>
        </thead>
        <tbody>
            <tr v-for="(student, index) in students" v-bind:key="student.id">
                <th scope="row">{{doMath(index)}}</th>
                <td>{{student.username}}</td>
                <td>{{student.first_name}} {{student.last_name}}</td>
                <td>{{student.email}}</td>
                <td v-if="canRemoveStudent">
                  <button class="btn btn-primary" @click="changeToDelete(student)" data-toggle="modal" data-target="#removeModerator">Remove</button>
                </td> 
            </tr>
        </tbody>
    </table>
    <div class="modal fade" tabindex="-1" role="dialog" id="removeModerator">
      <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Remove Moderator</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>Are you sure you want to remove <strong> {{toDeleteStudent.username}} </strong> from moderators?</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
              <button type="button" class="btn btn-danger" @click="removeMod(toDeleteStudent.username)">
                Remove <span v-if="loadingDelete" class="ld ld-ring ld-spin"></span>
              </button>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
    .table-wrapper-scroll-y {
      display: block;
      max-height: 300px;
      overflow-y: auto;
      -ms-overflow-style: -ms-autohiding-scrollbar;
    }
</style>

<script>
// import logo from '../assets/logo.png'
import {deleteModerator} from "../api";
import { mapGetters } from "vuex";
export default {
  name: 'StudentTable',
  props: {
    // info: Object,
    // signedIn: Object,
    students: Array,
    canRemoveStudent: Boolean,
    init: Function
  },
  computed:{
    ...mapGetters(['getToken', 'getCourse'])
  },
  data: function(){
    return {
      toDeleteStudent: {
        username:""
      },
      loadingDelete: false
    }
  },
  methods: {
    doMath: function (index) {
      return index+1
    },
    changeToDelete(student){
      this.toDeleteStudent = student;
    },
    async removeMod(username){
      this.loadingDelete = true;
      let res = await deleteModerator(this.getToken.token, this.getCourse.info.id, [username]);
      this.loadingDelete = false;
      if(res.status == 200){
        this.init();
        $("#removeModerator").modal('hide');
      } 
      else{
        console.log(res.response.data);
      }
    }
  }
}
</script>