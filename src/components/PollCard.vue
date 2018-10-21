
<template>
  <div>
    <div class="infoCard">
      <div class="card">
        <div class="card-body">
          <!-- <h5 class="card-title">{{info.conten}}</h5> -->
          <p class="card-text" style="cursor:pointer" @click="goToPoll">
            {{poll.poll_text}}
          </p>
          <footer class="blockquote-footer">
            Asked by <cite title="Source Title">{{poll.creater.username}}</cite>
            <a style="cursor:pointer; float:right" v-if="getUser.user.is_faculty" @click="showPollDeleteModal">
              <i class="fa fa-trash" aria-hidden="true"></i>
            </a>
            <span style="float:right">{{getDateString}}&emsp;</span><br/>
          </footer>
        </div>
      </div>
    </div>
    <div class="modal fade" tabindex="-1" role="dialog" :id="poll.id">
      <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Delete</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>Are you sure you want to delete this poll?</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
              <button type="button" class="btn btn-danger" @click="deletePol">
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
import {deletePoll} from "../api";
// renders a card using the prop Object info which contains header, title, text
// import logo from '../assets/logo.png'
export default {
  name: 'PollCard',
  props: {
    poll: Object,
    init: Function
  },
  data: function(){
    return {
      loadingDelete: false
    }
  },
  computed:{
    getPollID(){
      return "#" + this.poll.id; 
    },
    getDateString(){
      return moment(this.poll.created_at).format("Do MMMM YYYY,  hh:mm a");
    },
    ...mapGetters(['getToken', 'getCourse', 'getUser', 'getPoll']),
  },
  methods:{
    async deletePol(){
      this.loadingDelete = true;
      const res = await deletePoll(this.getToken.token, this.poll.id);
      this.loadingDelete = false;
      if(res.status == 200){
        $(this.getPollID).modal('hide');
        this.init();
      }
      else{
        console.log(res);
      }
    },
    goToPoll(){
      let poll = this.poll;
      // console.log("view comments here");
      this.$store.commit({
          type: 'setPoll',
          poll
      })
      router.push('viewPoll');
    },
    showPollDeleteModal(){
      $(this.getPollID).modal('show');
    }
  }
}
</script>