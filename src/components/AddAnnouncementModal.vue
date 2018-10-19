<template>
    <div class="modal fade" :id="addModalId" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">{{title}}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form>
                <!-- <div class="form-group">
                    <label for="recipient-name" class="col-form-label">Title:</label>
                    <input type="text" class="form-control" id="recipient-name">
                </div> -->
                <div class="form-group">
                    <label for="message-text" class="col-form-label">Body:</label>
                    <textarea class="form-control" id="message-text" rows="5" v-model="content"></textarea>
                    <span v-if="errAnnouncement" class="text-danger text-center">Please enter the Announcement.</span>
                </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" @click="validateAddAnnounce">
                    Add Announcement <span v-if="loadingAddAnnouncement" class="ld ld-ring ld-spin"></span>
                </button>
            </div>
            </div>
        </div>
    </div>    
</template>
<script>
import { mapGetters } from "vuex";
import {addAnnouncement} from "../api";
export default {
    name: 'AddAnnouncementModal',
    computed: mapGetters(['getToken', 'getCourse']),
    data: function(){
        return {
            title: "Add Announcements",
            content: "",
            errAnnouncement: false,
            loadingAddAnnouncement: false
        }
    },
    props: {
        addModalId: String,
        init: Function
    },
    methods: {
        async addAnnounce(){
            // console.log(this.getCourse.info);
            this.loadingAddAnnouncement = true;
            let res = await addAnnouncement(this.getToken.token, this.getCourse.info.id, this.content);
            if(res.status == 200){
                $(`#${this.addModalId}`).modal('hide');
                // reload page here
                this.init();
            }
            else{
                console.log(res.response.data);
                this.errAnnouncement = true;
            }
            this.loadingAddAnnouncement = false;
        },
        validateAddAnnounce(){
            if(this.content.length == 0 ){
                this.errAnnouncement = true;
                return;
            }
            this.errAnnouncement = false;
            this.addAnnounce();
        },
    }
}
</script>

