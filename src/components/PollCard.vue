
<template>
  <div class="infoCard" style="cursor:pointer" @click="goToPoll">
    <div class="card">
      <div class="card-body">
        <!-- <h5 class="card-title">{{info.conten}}</h5> -->
        <p class="card-text">
          {{poll.poll_text}}
        </p>
        <footer class="blockquote-footer">
          Asked by <cite title="Source Title">{{poll.creater.username}}</cite>
          &emsp;  
          <!-- <a style="cursor:pointer" @click="viewComments"><i class="fa fa-comments" aria-hidden="true"></i> {{poll.commentCount}} comments.</a> -->
          <span style="float:right">{{getDateString}} </span><br/>
        </footer>
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
  name: 'PollCard',
  props: {
    poll: Object,
  },
  computed:{
    getDateString(){
      return moment(this.poll.created_at).format("Do MMMM YYYY,  hh:mm a");
    }
  },
  methods:{
    goToPoll(){
      let poll = this.poll;
      // console.log("view comments here");
      this.$store.commit({
          type: 'setPoll',
          poll
      })
      router.push('viewpoll');
    },
    ...mapGetters(['getPoll']),
  }
}
</script>