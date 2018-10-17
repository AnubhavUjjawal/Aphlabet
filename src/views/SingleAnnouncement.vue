<template>
  <div class="SingleAnnouncement">
    <Navbar/>
    <div class="row">
        <div class="col-md-2">
          <Sidebar :signedIn="signedIn" :info="info"/>
        </div>
      <div class="col-md-10">
        <div class="col-md-12 col-xs-12">
            <button data-toggle="modal" :data-target="'#' + addModalId" class="btn btn-primary mb-5 mt-2 float-right">
                Comment
            </button>
            <h4 class="m-2">View Announcement</h4>
        </div><br><br><br>
        <div class="col-md-12">
            <AddCommentModal :addModalId="addModalId" />
            <AnnouncementCard
              class="col-md-12 my-2 col-sm-12"
              v-bind:announcement="getAnnouncement.announcement"/>
        </div>
        <center>
            <span v-if="loadingComments" class="ld ld-ring ld-spin text-primary mt-10" style="font-size:64px;"></span>
        </center>
        <br>
        <div v-if="loadingComments==false">
          <h4 class="m-2">Comments</h4><br>
          <CommentCard
                class="col-md-12 my-2 col-sm-12"
                v-for="comment in comments"
                v-bind:key="comment.id"
                v-bind:comment="comment"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AddCommentModal from '@/components/AddCommentModal.vue';
import AnnouncementCard from '@/components/AnnouncementCard.vue';
import CommentCard from '@/components/CommentCard.vue';
import Sidebar from '@/components/Sidebar.vue';
import Navbar from '@/components/Navbar.vue'
import {getAnnouncements, getAllCommentsInAnnouncement} from "../api";
import { mapGetters } from "vuex";

export default {
  name: 'SingleAnnouncement',
  components: {
    Navbar,
    Sidebar,
    AddCommentModal,
    AnnouncementCard,
    CommentCard
  },
  props: {
    signedIn: Object,
    info: Object
  },
  computed: {
    addModalId(){
        return "addAnnouncementComment" 
    },
    ...mapGetters(['getToken', 'getCourse', 'getUser', 'getAnnouncement']),
  },
  data: function(){
    return {
      comments: [],
      loadingComments: false
    }
  },
  async mounted(){
    this.loadingComments = true;
    let res = await getAllCommentsInAnnouncement(this.getToken.token, this.getAnnouncement.announcement.id);
    this.loadingComments = false;
    if(res.status == 200){
        // console.log(res);
        this.comments = res.data.comments;
      }
    else{
      console.log(res);
    }
  }
}
</script>

