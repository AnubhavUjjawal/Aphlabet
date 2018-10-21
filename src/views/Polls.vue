<template>
  <div class="Polls">
    <Navbar/>
    <div class="row">
        <div class="col-md-2">
          <Sidebar :signedIn="signedIn" :info="info"/>
        </div>
      <div class="col-md-10">
        <div class="col-md-12 col-xs-12">
            <button v-if="getUser.user.is_faculty" data-toggle="modal" :data-target="'#' + addModalId" class="btn btn-primary mb-5 mt-2 float-right">
                Add Polls
            </button>
            <h2 class="m-2 ">Polls</h2>
        </div><br><br>
        <center>
            <span v-if="loadingPolls" class="ld ld-ring ld-spin text-primary mt-10" style="font-size:64px;"></span>
        </center>
        <div class="col-md-12">
            <AddPollModal :addModalId="addModalId" :init="init"/>
            <PollCard
              class="col-md-12 my-2 col-sm-12"
              v-for="poll in polls"
              v-bind:key="poll.id"
              v-bind:poll="poll"
              :init="init"
              :showDelete="true"/>
        </div>
        <br><br><br>
      </div>
    </div>
  </div>
</template>
<script>
import AddPollModal from '@/components/AddPollModal.vue';
import PollCard from '@/components/PollCard.vue';
import Sidebar from '@/components/Sidebar.vue';
import Navbar from '@/components/Navbar.vue'
import { getPolls } from "../api";
import { mapGetters } from "vuex";

export default {
  name: 'Polls',
  components: {
    Navbar,
    Sidebar,
    AddPollModal,
    PollCard
  },
  props: {
    signedIn: Object,
    info: Object
  },
  computed: {
    addModalId(){
        return "addPolls" 
    },
    ...mapGetters(['getToken', 'getCourse', 'getUser']),
  },
  data: function(){
    return {
      polls: [],
      loadingPolls: false
    }
  },
  methods:{
    async init(){
      this.loadingPolls = true;
      let res = await getPolls(this.getToken.token, this.getCourse.info.id);
      this.loadingPolls = false;
      if(res.status == 200){
          this.polls = res.data
          // console.log(res.data);
        }
      else{
        console.log(res);
      }
    }
  },
  async mounted(){
    this.init();
  }
}
</script>

