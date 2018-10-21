<template>
  <div class="SingleModal">
    <Navbar/>
    <div class="row">
        <div class="col-md-2">
          <Sidebar :signedIn="signedIn" :info="info"/>
        </div>
      <div class="col-md-10">
        <h4 class="m-2">View Poll</h4><br>
        <div class="col-md-12">
            <PollCard
              class="col-md-12 my-2 col-sm-12"
              v-bind:poll="getPoll.poll"/>
        </div>
        <!-- <center>
            <span v-if="loadingComments" class="ld ld-ring ld-spin text-primary mt-10" style="font-size:64px;"></span>
        </center>
        <br>
        <div v-if="loadingComments==false">
          <h4 class="m-2">Comments</h4><br>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import AddCommentModal from '@/components/AddCommentModal.vue';
import PollCard from '@/components/PollCard.vue';
import CommentCard from '@/components/CommentCard.vue';
import Sidebar from '@/components/Sidebar.vue';
import Navbar from '@/components/Navbar.vue'
import { mapGetters } from "vuex";

export default {
  name: 'SinglePoll',
  components: {
    Navbar,
    Sidebar,
    AddCommentModal,
    PollCard,
    CommentCard
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
      loadingComments: false
    }
  },
  methods:{
    async init(){
    //   this.loadingComments = true;
    //   let res = await getAllCommentsInAnnouncement(this.getToken.token, this.getAnnouncement.announcement.id);
    //   this.loadingComments = false;
    //   if(res.status == 200){
    //       // console.log(res);
    //       this.comments = res.data.comments;
    //     }
    //   else{
    //     console.log(res);
    //   }
    }
  },
  async mounted(){
    this.init();
  }
}
</script>

