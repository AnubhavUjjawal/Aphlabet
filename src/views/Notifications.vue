<template>
  <div class="Notifications">
    <Navbar/>
    <div class="row">
      <div class="col-md-2">
        <Sidebar/>
      </div>
      <div class="col-md-10">
        <div class="col-md-12 col-xs-12">
            <!-- <button class="btn btn-info mb-5 mt-2 float-right">
                Mark all as Read
            </button> -->
            <h2 class="m-2">Notifications</h2>
            <NotificationTable :notifications="notifications"/>
        </div>        
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import NotificationTable from '@/components/NotificationTable.vue'
import { mapGetters } from 'vuex';
import { getNotifications }  from '../api';

export default {
  name: 'Notifications',
  components: {
    Navbar,
    Sidebar,
    NotificationTable,
  },
  data: function (){
    return {
        notifications: [],
        loadingNotifications: false,
    }
  },
  computed:{
    ...mapGetters(['getUser', 'getToken', 'getCourse'])
  },
  props: {
      signedIn: Object,
      course: Object
  },
  methods:{
    async init(){
      this.loadingNotifications = true;
      const res = await getNotifications(this.getToken.token);
      this.loadingNotifications = false;
      if(res.status= 200){
        this.notifications = res.data;
        console.log(this.notifications);
      }
      else{
        console.log(res);
      }
    }
  },
  mounted(){
    this.init();
  }
}
</script>
