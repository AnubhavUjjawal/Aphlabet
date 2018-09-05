<template>
  <div class="courseHome">
    <Navbar page="Home" :signedIn="signedIn"/>
    <Sidebar/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'CourseHome',
  components: {
    Navbar,
    Sidebar
  },
  data: function (){
    return {}
  },
  props: {
      signedIn: Object
  }
}
</script>
