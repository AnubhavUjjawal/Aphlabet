
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
          <i class="fa fa-thumbs-o-up" aria-hidden="true"></i> {{getUpvotesCount}} &emsp;
          <i class="fa fa-thumbs-o-down" aria-hidden="true"></i> {{getDownvotesCount}} 
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
  name: 'CommentCard',
  props: {
    comment: Object,
  },
  computed:{
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
      console.log(this.comment);
  }
}
</script>