<template>
    <div>
        <div class="col-md-12 col-xs-12"><button @click="toggleEditor" class="btn btn-primary mb-5 mt-2 float-right">Toggle Editor</button></div><br>
        <div v-bind:hidden="showEditor===true?null:true" class="Editor mx-auto col-md-10 col-xs-12 mt-5"/>
    </div>
</template>
<script>
// import logo from '../assets/logo.png'
export default {
  name: 'Editor',
  props: {
  },
  data: function(){
      return {
          showEditor: false
      };
  },
  methods: {
      toggleEditor: function(){
          if(this.$data.showEditor == true)
            this.$data.showEditor = false;
          else  this.$data.showEditor = true;
          console.log(this.$data.showEditor);
      }
  },
  mounted: function(){
    $('.Editor').froalaEditor()
  }
}
</script>