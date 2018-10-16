<template>
  <div class="CourseCard">
    <div class="card h-100">
      <img class="card-img-top" alt="Card image cap" :src="getAbsURL" height="300" width="400">
      <div class="card-body">
        <h5 class="card-title">{{info.name}}</h5>
        <p class="card-text text-truncate">
          {{info.description}}
        </p>
        <router-link :to="{'name': 'courseHome'}"  @click.native="setCourse(info)">
          <a href="#" class="btn btn-primary float-right">Go to class</a>
        </router-link> 
        <footer class="blockquote-footer">
          Taught by <cite title="Source Title">{{info.username}}</cite> <br>
          Created on: {{getDateString}} <br/>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
// import logo from '../assets/logo.png'
import { rootURL } from '../api';
export default {
  name: 'CourseCard',
  computed:{
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
    }
  },
  props: {
    info: Object
  }
}
</script>