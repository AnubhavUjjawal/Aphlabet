<template>
  <div class="courseHome">
    <Navbar page="Home" :signedIn="signedIn"/>
    <div class="row">
      <div class="col-md-2"><Sidebar/></div>
      <div class="col-md-10"><Editor/></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import Editor from '@/components/Editor.vue'

export default {
  name: 'CourseHome',
  components: {
    Navbar,
    Sidebar,
    Editor
  },
  data: function (){
    return {}
  },
  props: {
      signedIn: Object
  }
}
</script>
