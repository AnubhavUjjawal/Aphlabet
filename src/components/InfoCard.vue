
<template>
  <div class="CourseCard">
    <div class="card">
    <div class="card-header">
        {{info.header}}
    </div>
    <div class="card-body">
        <h5 class="card-title">{{info.title}}</h5>
        <p class="card-text">{{info.text}}</p>
        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
    </div>
    </div>
  </div>
</template>
<script>
// renders a card using the prop Object info which contains header, title, text
// import logo from '../assets/logo.png'
export default {
  name: 'InfoCard',
  props: {
    info: Object,
  }
}
</script>