<template>
  <div class="courseHome">
    <div class="row">
      <div class="col-md-2"><Sidebar :signedIn="signedIn" :info="info"/></div>
      <div class="col-md-10">
        <div class="col-md-12 col-xs-12">
            <button data-toggle="modal" :data-target="addModalId" class="btn btn-primary mb-5 mt-2 float-right">
                Add Announcement
            </button>
        </div><br>
        <div class="col-md-12">
            <AddModal :addModal="addModal" />
        </div>
        <br><br><br>
      </div>
    </div>
  </div>
</template>
<script>
import AddModal from '@/components/AddModal.vue';
import Sidebar from '@/components/Sidebar.vue';
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Announcements',
  components: {
    Navbar,
    Sidebar,
    AddModal
  },
  props: {
    signedIn: Object,
    info: Object
  },
  computed: {
      addModalId(){
          return "#" + this.addModal.id;
      }
  },
  data: function(){
    return {
        addModal: {
            fields: {
                "Title": {
                    tag: "input",
                    type: "text",
                    maxlength: 100,
                    placeholder: "Enter title here."
                },
                "body": {
                    tag: "textarea",
                    rows: "10",
                    placeholder: "Enter Announcement body here."
                }
            },
            id: "AddAnnouncement",
            title: "Add Announcement",
            formMethod: "POST",
            formAction: "/"
        }
    }
  },
  mounted: function(){
    //   console.log(this.signedIn, this.$route.params, "annn");
  }
}
</script>

