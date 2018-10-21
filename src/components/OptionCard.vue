
<template>
  <div class="infoCard" style="cursor:pointer">
    <div class="card ml-5 mr-5 mb-2">
      <div class="card-body">
        <p class="card-text">
            <label>
                <div v-if="disabled" >
                    <input type="radio" name="option" :value="option.id" disabled="disabled" :checked="checked"> &emsp;{{option.option_text}}
                </div>
                <div v-if="disabled!=true" >
                    <input type="radio" name="option" :value="option.id"> &emsp;{{option.option_text}}
                </div>
            </label>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import router from '../router';
import { mapGetters } from "vuex";
// renders a card using the prop Object info which contains header, title, text
// import logo from '../assets/logo.png'
export default {
  name: 'OptionCard',
  props: {
    option: Object,
    is_responded: Object
  },
  computed:{
    getDateString(){
      return moment(this.poll.created_at).format("Do MMMM YYYY,  hh:mm a");
    },
    disabled(){
        if(this.is_responded == 0)
            return false
        return true;
    },
    checked(){
        if(this.is_responded.poll_option.id == this.option.id)
            return "checked"
        return null;
    }
  },
  methods:{
  }
}
</script>