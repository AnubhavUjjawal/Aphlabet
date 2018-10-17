
<template>
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
          <span style="float:right">{{getDateString}} </span><br/>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
import router from '../router';
// renders a card using the prop Object info which contains header, title, text
// import logo from '../assets/logo.png'
export default {
  name: 'AnnouncementCard',
  props: {
    announcement: Object,
  },
  computed:{
    getDateString(){
      return moment(this.announcement.created_on).format("Do MMMM YYYY,  hh:mm a");
    }
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
    }
  }
}
</script>