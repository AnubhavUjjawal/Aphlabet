<template>
  <div class="NotificationTable table-responsive table-wrapper-scroll-y">
    <table class="table table-hover">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col" colspan="3">Notification</th>
            <th scope="col" colspan="1">Type</th>
            <th scope="col" colspan="1">Uploaded On</th>
            <th scope="col" colspan="1">Read/Unread</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(notification, index ) in notifications" :key="notification.id"> 
              <th scope="row">{{doMath(index)}}</th>
              <td colspan="3"><small>{{notification.text}}</small></td>
              <td colspan="1"><small>{{notification.notification_type}}</small></td>
              <td colspan="1"><small>{{getDateString(notification.created_at)}}</small></td>
              <td colspan="1">
                  <button class="btn btn-primary" v-if="!notification.read" @click="readNotificationReq(notification)">
                        Mark as Read 
                        <i class="fas fa-check" aria-hidden="true"></i>
                  </button>
                  <span v-else>
                      Notification Read
                  </span>
              </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>
<style scoped>
    .table-wrapper-scroll-y {
      display: block;
      max-height: 800px;
      overflow-y: auto;
      -ms-overflow-style: -ms-autohiding-scrollbar;
    }
</style>
<script>
// import logo from '../assets/logo.png'
import { rootURL, readNotification } from "../api";
import { mapGetters } from 'vuex';
export default {
  name: 'NotificationTable',
  props: {
    notifications: Array
  },
  computed:{
    ...mapGetters(['getUser', 'getToken', 'getCourse'])
  },
  methods: {
    doMath: function (index) {
      return index+1
    },
    getDateString(date){
      return moment(date).format("Do MMMM YYYY,  hh:mm a");
    },
    getURL(url){
      return rootURL + url;
    },
    async readNotificationReq(notification){
      const res = await readNotification(this.getToken.token, notification.id);
      if(res.status= 200){
        console.log(res.data);
        notification.read = true;
        console.log(notification);
      }
      else{
        console.log(res);
      }
    }
  }
}
</script>