<template>
  <div class="home">
    <Navbar/>
    <div class="card-group">
      <CourseCard
        class="col-md-4 my-2 col-sm-12"
        v-for="cls in classes"
        v-bind:key="cls.id"
        v-bind:info="cls"
        v-bind:signedIn="signedIn"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import CourseCard from '@/components/CourseCard.vue'
import { mapGetters } from 'vuex';
import { getUserClassroom } from '../api';

export default {
  name: 'home',
  components: {
    Navbar,
    CourseCard
  },
  data: function (){
    return {
      signedIn: {
       signedIn: true
      },
      classes: []
    }
  },
  async mounted(){
    let allClassRes = await getUserClassroom(this.getToken.token);
    if(allClassRes.status == 200){
      this.classes = allClassRes.data;
    }
    else{
      console.log(res);
    }
  },
  computed: {
    ...mapGetters(['getToken'])
  },

}
</script>
