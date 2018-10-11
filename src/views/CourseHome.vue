<template>
  <div class="courseHome">
    <div class="row">
      <div class="col-md-2">
        <Sidebar :signedIn="signedIn" :info="course"/>
      </div>
      <div class="col-md-10">
        <div class="col-md-12">
          <Editor/>
        </div>
        <br><br><br>
        <div class="col-md-12">
          <InfoCard :info="info"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/Sidebar.vue'
import Editor from '@/components/Editor.vue'
import InfoCard from '@/components/InfoCard.vue'

export default {
  name: 'CourseHome',
  components: {
    Sidebar,
    Editor,
    InfoCard
  },
  data: function (){
    return {
      info: {
        header: "Test",
        title: "Class Test on Monday",
        text: "Dear all, there is a class text on Monday"
      }
    }
  },
  props: {
      signedIn: Object,
      course: Object
  },
  mounted: function(){
    // console.log(this.$route.params, "signedIn")
  }
}
</script>
