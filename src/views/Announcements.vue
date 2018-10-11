<template>
  <div class="courseHome">
    <Navbar/>
    <div class="row">
        <div class="col-md-2">
          <Sidebar :signedIn="signedIn" :info="info"/>
        </div>
      <div class="col-md-10">
        <div class="col-md-12 col-xs-12">
            <button data-toggle="modal" :data-target="'#' + addModalId" class="btn btn-primary mb-5 mt-2 float-right">
                Add Announcement
            </button>
        </div><br>
        <div class="col-md-12">
            <AddAnnouncementModal :addModalId="addModalId" />
        </div>
        <br><br><br>
      </div>
    </div>
  </div>
</template>
<script>
import AddAnnouncementModal from '@/components/AddAnnouncementModal.vue';
import Sidebar from '@/components/Sidebar.vue';
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Announcements',
  components: {
    Navbar,
    Sidebar,
    AddAnnouncementModal
  },
  props: {
    signedIn: Object,
    info: Object
  },
  computed: {
    addModalId(){
        return "addAnnouncement" 
    }
  },
  data: function(){
    return {
    }
  },
  mounted: function(){
    //   console.log(this.signedIn, this.$route.params, "annn");
  }
}
</script>

