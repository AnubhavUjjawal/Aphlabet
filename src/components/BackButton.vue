
<template>
  <div>
    <button @click="goBack" class="btn btn-primary">
      <i class="fa fa-angle-left" aria-hidden="true"></i>
    </button>
  </div>
</template>

<script>
import router from '../router';
// renders a card using the prop Object info which contains header, title, text
// import logo from '../assets/logo.png'
export default {
  name: 'BackButton',
  methods: {
    goBack(){
      router.go(-1);
    }
  }
}
</script>