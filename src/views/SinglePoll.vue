<template>
  <div class="SingleModal">
    <Navbar/>
    <div class="row">
        <div class="col-md-2">
          <Sidebar :signedIn="signedIn" :info="info"/>
        </div>
      <div class="col-md-10">
        <h2 class="m-2 ml-4">View Poll</h2>
        <div class="col-md-12">
            <PollCard
              class="col-md-12 my-2 col-sm-12"
              v-bind:poll="getPoll.poll"/>
        </div>
        <div v-if="getPoll.poll.is_responded!=0">
          <br>
          <h4 class="m-2 ml-5">You have already responded.</h4>
          <OptionCard v-for="option in getPoll.poll.poll_options"
            :key="option.key"
            :option="option"
            :is_responded="getPoll.poll.is_responded"/>
        </div>
        <div v-if="getPoll.poll.is_responded==0">
          <br>
          <h4 class="m-2 ml-5">Give a response.</h4>
          <OptionCard v-for="option in getPoll.poll.poll_options"
            :key="option.key"
            :option="option"
            :is_responded="getPoll.poll.is_responded"/>
          <button class="btn btn-primary m-2 ml-5" @click="submitPoll">
            Submit
            <span v-if="submittingRes" class="ld ld-ring ld-spin"></span>
          </button>
        </div>
      </div>
    </div>
    <div class="modal" tabindex="-1" role="dialog" id="errorID">
      <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Error</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>Please select an option before submitting.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import AddCommentModal from '@/components/AddCommentModal.vue';
import PollCard from '@/components/PollCard.vue';
import OptionCard from '@/components/OptionCard.vue';
import CommentCard from '@/components/CommentCard.vue';
import Sidebar from '@/components/Sidebar.vue';
import Navbar from '@/components/Navbar.vue'
import { mapGetters } from "vuex";
import { submitPollResponse } from '../api';

export default {
  name: 'SinglePoll',
  components: {
    Navbar,
    Sidebar,
    AddCommentModal,
    PollCard,
    CommentCard,
    OptionCard
  },
  props: {
    signedIn: Object,
    info: Object
  },
  computed: {
    ...mapGetters(['getToken', 'getCourse', 'getUser', 'getPoll']),
  },
  data: function(){
    return {
      comments: [],
      submittingRes: false,
    }
  },
  methods:{
    async init(){
    //   this.submittingRes = true;
    //   let res = await getAllCommentsInAnnouncement(this.getToken.token, this.getAnnouncement.announcement.id);
    //   this.submittingRes = false;
    //   if(res.status == 200){
    //       // console.log(res);
    //       this.comments = res.data.comments;
    //     }
    //   else{
    //     console.log(res);
    //   }
    },
    async submitPoll(){
      let option = $('input[name=option]:checked').val();
      if(option == undefined){
        $("#errorID").modal('show');
        return;
      }
      option = parseInt(option);
      this.submittingRes = true;
      let res = await submitPollResponse(this.getToken.token, this.getPoll.poll.id, option);
      this.submittingRes = false;
      if(res.status == 200){
          // console.log(res, "res");
          this.$router.push('Polls');
        }
      else{
        console.log(res);
      }
      
    }
  },
  async mounted(){
    this.init();
    // console.log(this.getPoll.poll.poll_options);
    // console.log(this.getPoll.poll.is_responded);
  }
}
</script>

