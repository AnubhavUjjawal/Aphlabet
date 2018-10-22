
<template>
  <div>
    <div class="infoCard">
      <div class="card">
        <div class="card-body">
          <!-- <h5 class="card-title">{{info.conten}}</h5> -->
          <p class="card-text">
            {{announcement.content}}
          </p>
          <footer class="blockquote-footer">
            Announced by <cite title="Source Title">{{announcement.announcer.username}}</cite>
            &emsp;  
            <a style="cursor:pointer" @click="viewComments"><i class="fa fa-comments" aria-hidden="true"></i> {{announcement.commentCount}} comments.</a>
            <a style="cursor:pointer; float:right" v-if="getUser.user.is_faculty" @click="showAnnDeleteModal">
              <i class="fa fa-trash" aria-hidden="true"></i>
            </a>
            <span style="float:right">{{getDateString}} &emsp;</span><br/>
          </footer>
        </div>
      </div>
    </div>
    <div class="modal fade" tabindex="-1" role="dialog" :id="announcement.id">
      <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Delete</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>Are you sure you want to delete this announcement?</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
              <button type="button" class="btn btn-danger" @click="deleteAnn">
                Delete <span v-if="loadingDelete" class="ld ld-ring ld-spin"></span>
              </button>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import router from '../router';
import { mapGetters } from "vuex";
// renders a card using the prop Object info which contains header, title, text
// import logo from '../assets/logo.png'
export default {
  name: 'AnnouncementCard',
  props: {
    announcement: Object,
  },
  data: function(){
    return {
      loadingDelete: false
    }
  },
  computed:{
    getAnnID(){
      return '#' + this.announcement.id;
    },
    getDateString(){
      return moment(this.announcement.created_on).format("Do MMMM YYYY,  hh:mm a");
    },
    ...mapGetters(['getToken', 'getCourse', 'getUser', 'getPoll']),
  },
  methods:{
    viewComments(){
      let announcement = this.announcement;
      // console.log("view comments here");
      this.$store.commit({
          type: 'setAnnouncement',
          announcement
      })
      router.push('viewAnnouncement');
    },
    showAnnDeleteModal(){
      $(this.getAnnID).modal('show');
    },
    deleteAnn(){

    }
  }
}
</script>