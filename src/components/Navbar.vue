<template>
  <div v-if="getSignedIn">
    <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-primary">
      <a class="navbar-brand" href="#">Aphlabet</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="form-inline my-2 my-lg-0 col-md-12 col-sm-12 col-lg-8">
          <input class="form-control mr-sm-2 col-9" type="search" placeholder="Search" aria-label="Search">
          <button class="btn my-3 my-sm-0 btn-outline-light" type="submit">Search</button>
        </form>
        <ul class="navbar-nav mr-auto col-lg-4 col-sm-12 col-md-12">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Profile
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#"><i class="fas fa-user-circle"></i>  My Profile</a>
              <a class="dropdown-item" href="#" @click="signOut"><i class="fa fa-sign-out"></i>  Signout</a>
              <a class="dropdown-item" data-toggle="modal" data-target="#joinClassModal" href="#">
                <i class="fa fa-plus"></i> Join class
              </a>
            </div>
          </li>
          <li v-if="getCourse != null" class="nav-item dropdown2">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Links
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
              <router-link :to="{'name': 'lectures'}">
                <a class="dropdown-item" href="#">Lectures</a>
              </router-link>
              <a class="dropdown-item" href="#">Resources</a>
              <a class="dropdown-item" href="#">Announcements</a>
              <a class="dropdown-item" href="#">Polls</a>
              <a class="dropdown-item" href="#">Storage</a>
              <a class="dropdown-item" href="#">Submissions</a>            
            </div>
          </li>
          <li v-if="getUser.user.is_faculty" class="nav-item dropdown">
            <button class="btn my-3 my-sm-0 btn-outline-light" type="submit" data-toggle="modal" data-target="#addClassModal">Add Classroom</button>
          </li>
        </ul>
      </div>
    </nav>
    <div v-if="getUser.user.is_faculty" class="modal fade" id="addClassModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Classroom.</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Enter classroom name below.</p>
            <input class="form-control" v-model="className" placeholder="Enter Classroom name" aria-label="Add Class">
            <span v-if="errClassName" class="text-danger text-center">Class Name should be min 4 characters.</span>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="validateAddClass">
              Add <span v-if="loadingAddClassroom" class="ld ld-ring ld-spin"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="joinClassModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Join Class.</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Enter class code below.</p>
            <input class="form-control" v-model="classCode" placeholder="Enter Code" aria-label="Join Class">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">Join</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import router from '../router';
import { addClassroom } from '../api';

export default {
  name: 'Navbar',
  computed: mapGetters(['getSignedIn', 'getCourse', 'getUser', 'getToken']),
  mounted: function(){
  },
  data: function(){
    return {
      classCode: '',
      className: '',
      errClassName: false,
      loadingAddClassroom: false
    }
  },
  methods: {
    signOut(){
      this.$store.commit('removeUser');
      router.replace({"name": "login"});
    },
    async addClass(){
      this.loadingAddClassroom = true;
      let res = await addClassroom(this.getToken.token, this.className);
      if(res.status == 200){
        $('#addClassModal').modal('hide');
        // reload page here
        this.$router.go(this.$router.currentRoute);
      }
      else{
        console.log(res);
      }
      this.loadingAddClassroom = false;
    },
    validateAddClass(){
      if(this.className.length < 4) this.errClassName = true;
      else{
        this.errClassName = false;
        this.addClass();
      }
    },
  }
}
</script>
