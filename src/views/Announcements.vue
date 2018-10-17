<template>
  <div class="Announcements">
    <Navbar/>
    <div class="row">
        <div class="col-md-2">
          <Sidebar :signedIn="signedIn" :info="info"/>
        </div>
      <div class="col-md-10">
        <div class="col-md-12 col-xs-12">
            <button v-if="getUser.user.is_faculty" data-toggle="modal" :data-target="'#' + addModalId" class="btn btn-primary mb-5 mt-2 float-right">
                Add Announcement
            </button>
            <h4 class="m-2">Announcements</h4>
        </div><br><br><br>
        <center>
            <span v-if="loadingAnnouncements" class="ld ld-ring ld-spin text-primary mt-10" style="font-size:64px;"></span>
        </center>
        <div class="col-md-12">
            <AddAnnouncementModal :addModalId="addModalId" />
            <AnnouncementCard
              class="col-md-12 my-2 col-sm-12"
              v-for="announcement in announcements"
              v-bind:key="announcement.id"
              v-bind:announcement="announcement"/>
        </div>
        <br><br><br>
      </div>
    </div>
  </div>
</template>
<script>
import AddAnnouncementModal from '@/components/AddAnnouncementModal.vue';
import AnnouncementCard from '@/components/AnnouncementCard.vue';
import Sidebar from '@/components/Sidebar.vue';
import Navbar from '@/components/Navbar.vue'
import {getAnnouncements} from "../api";
import { mapGetters } from "vuex";

export default {
  name: 'Announcements',
  components: {
    Navbar,
    Sidebar,
    AddAnnouncementModal,
    AnnouncementCard
  },
  props: {
    signedIn: Object,
    info: Object
  },
  computed: {
    addModalId(){
        return "addAnnouncement" 
    },
    ...mapGetters(['getToken', 'getCourse', 'getUser']),
  },
  data: function(){
    return {
      announcements: [],
      loadingAnnouncements: false
    }
  },
  async mounted(){
    this.loadingAnnouncements = true;
    let res = await getAnnouncements(this.getToken.token, this.getCourse.info.id);
    this.loadingAnnouncements = false;
    if(res.status == 200){
        this.announcements = res.data
      }
    else{
      console.log(res);
    }
  }
}
</script>

