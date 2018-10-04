<template>
  <div class="Lectures">
    <Navbar page="Home" :signedIn="signedIn"/>
    <div class="row">
      <div class="col-md-2"><Sidebar/></div>
      <div class="col-md-10">
          <h3>Lectures</h3>
          <LectureTable/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import LectureTable from '@/components/LectureTable.vue'

export default {
  name: 'Lectures',
  components: {
    Navbar,
    Sidebar,
    LectureTable
  },
  data: function (){
    return {
        lectures: [

        ]
    }
  },
  props: {
      signedIn: Object,
      course: Object
  }
}
</script>
