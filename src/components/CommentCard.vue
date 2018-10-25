
<template>
  <div class="infoCard">
    <div class="card">
      <div class="card-body">
        <!-- <h5 class="card-title">{{info.conten}}</h5> -->
        <p class="card-text">
          {{comment.comment_text}}
        </p>
        <footer class="blockquote-footer">
          Commented by <cite title="Source Title">{{comment.commenter.username}}</cite>
          &emsp; 
          <i @click="upVote"
          :class="{fa:true, 'fa-thumbs-o-up':comment.has_Upvoted==0, 'fa-thumbs-up':comment.has_Upvoted==1}"
          aria-hidden="true"
          data-toggle="tooltip"
          data-html="true" :title="getTooltipUpvoters()"></i> {{getUpvotesCount}} &emsp;
          <i @click="DownVote"
          :class="{fa:true, 'fa-thumbs-o-down':comment.has_Downvoted==0, 'fa-thumbs-down':comment.has_Downvoted==1}"
          aria-hidden="true"
          data-toggle="tooltip"
          data-html="true" :title="getTooltipDownvoters()"></i> {{getDownvotesCount}} 
          <span style="float:right">{{getDateString}} </span><br/>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
import router from '../router';
import { upvoteDownvoteComment, removeUpvoteDownvoteComment } from "../api";
import { mapGetters } from "vuex";
// renders a card using the prop Object info which contains header, title, text
// import logo from '../assets/logo.png'
export default {
  name: 'CommentCard',
  props: {
    comment: Object,
  },
  computed:{
  },
  methods:{
    getTooltipUpvoters(){
      const upvoters = this.comment.upvoters;
      let html = '';
      for(let i=0; i<upvoters.length; i++){
        html += upvoters[i].username;
        html += '\n'
      }
      return html;
    },
    getTooltipDownvoters(){
      const upvoters = this.comment.downvoters;
      let html = '';
      for(let i=0; i<upvoters.length; i++){
        html += upvoters[i].username;
        html += '\n'
      }
      return html;
    },
    removeUserFromList(list, user){
      let index = list.indexOf(user);
      // console.log(index);
      if(index !=- 1){
        list.splice(index, 1);
      }
    },
    checkIfUpvoted(){
      const user = this.getUser.user.username;
      const upvoters = this.comment.upvoters;
      for(let i=0; i<upvoters.length; i++){
        if(upvoters[i].username == user)
          return true;
      }
      return false;
    },
    checkIfDownVoted(){
      const user = this.getUser.user.username;
      const downvoters = this.comment.downvoters;
      for(let i=0; i<downvoters.length; i++){
        if(downvoters[i].username == user)
          return true;
      }
      return false;
    },
    async upVote(){
      // type 2 to add upVoter, type 1 to remove upVoter
      // console.log(this.checkIfUpvoted());
      if(this.checkIfUpvoted()==true) {
        let res = await removeUpvoteDownvoteComment(this.getToken.token, 1, this.comment.id, this.getUser.user.username);
        if(res.status == 200){
          this.comment.has_Upvoted = 0;
          this.removeUserFromList(this.comment.upvoters, this.getUser.user);
        }
        return;
      };
      if(this.checkIfDownVoted()==true) return;
      let res = await upvoteDownvoteComment(this.getToken.token, 2, this.comment.id, this.getUser.user.username);
      if(res.status == 200){
        this.comment.has_Upvoted = 1;
        this.comment.upvoters.push(this.getUser.user);
      }
    },
    async DownVote(){
      // type 3 to add Downvoter, type 2 to remove Downvoter
      // console.log(this.checkIfDownVoted());
      if(this.checkIfDownVoted()==true) {
        let res = await removeUpvoteDownvoteComment(this.getToken.token, 2, this.comment.id, this.getUser.user.username);
        if(res.status == 200){
          this.comment.has_Downvoted = 0;
          this.removeUserFromList(this.comment.downvoters, this.getUser.user);
        }
        return;
      };
      if(this.checkIfUpvoted()==true) return;
      let res = await upvoteDownvoteComment(this.getToken.token, 3, this.comment.id, this.getUser.user.username);
      if(res.status == 200){
        console.log(res.data);
        this.comment.has_Downvoted = 1;
        this.comment.downvoters.push(this.getUser.user);
      }
    }
  },
  computed:{
    ...mapGetters(['getToken', 'getCourse', 'getUser']),
    getDateString(){
      return moment(this.comment.created_on).format("Do MMMM YYYY,  hh:mm a");
    },
    getUpvotesCount(){
        return this.comment.upvoters.length;
    },
    getDownvotesCount(){
        return this.comment.downvoters.length;
    }
  },
  mounted(){
      // console.log(this.comment);
  }
}
</script>