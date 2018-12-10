<template>
  <div class="CourseCard">
    <div class="card h-100">
      <img class="card-img-top" alt="Card image cap" :src="getAbsURL" height="300" width="400">
      <div class="card-body">
        <h5 class="card-title">{{info.name}}</h5>
        <p class="card-text text-truncate">
          {{info.description}}
        </p>
          <a href="#" class="btn btn-primary float-right" @click="unarchiveClass()">
            Unarchive this class
            <span v-if="loadingDelete" class="ld ld-ring ld-spin"></span>
          </a>
        <footer class="blockquote-footer">
          Taught by <cite title="Source Title">{{info.creator.username}}</cite> <br>
          Created on: {{getDateString}} <br/>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
// import logo from '../assets/logo.png'
import { rootURL, softDeleteClassroom } from '../api';
import { mapGetters } from 'vuex';
import router from "../router";
export default {
  name: 'ArchiveCourseCard',
  data(){
    return {
      loadingDelete: false
    }
  },
  computed:{
    ...mapGetters(['getToken']),
    getAbsURL(){
      if(rootURL[rootURL.length-1] == "/")
        return `${rootURL.slice(0, length)}${this.info.image}`;
      return `${rootURL}${this.info.image}`;
    },
    getDateString(){
      return moment(this.info.created_at).format("Do MMMM YYYY");
    }
  },
  methods: {
    setCourse(info){
      this.$store.commit(
        {
          type: 'setCourse',
          info
        });
    },
    async unarchiveClass(){
        this.loadingDelete = true;
        const res = await softDeleteClassroom(this.getToken.token, this.info.id);
        this.loadingDelete = false;
        if(res.status == 200){
            // $("#DeleteDoc").modal('hide');
            // this.init();
            router.go({name: 'home'}); 
        }
        else{
            console.log(res);
        }
    },
  },
  props: {
    info: Object
  }
}
</script>