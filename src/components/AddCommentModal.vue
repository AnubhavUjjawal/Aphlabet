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
                    <span v-if="errComment" class="text-danger text-center">Please enter the Comment.</span>
                </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" @click="vaildateAddComm">
                    Add Comment <span v-if="loadingAddComment" class="ld ld-ring ld-spin"></span>
                </button>
            </div>
            </div>
        </div>
    </div>    
</template>
<script>
import { mapGetters } from "vuex";
import {addCommentToAnnouncement} from "../api";
export default {
    name: 'AddCommentModal',
    computed: mapGetters(['getToken', 'getCourse', 'getAnnouncement']),
    data: function(){
        return {
            title: "Add Comment",
            content: "",
            errComment: false,
            loadingAddComment: false
        }
    },
    props: {
        addModalId: String,
        init: Function
    },
    methods: {
        async addComm(){
            // console.log(this.getCourse.info);
            this.loadingAddComment = true;
            let res = await addCommentToAnnouncement(this.getToken.token, this.getAnnouncement.announcement.id, this.content);
            if(res.status == 200){
                $(`#${this.addModalId}`).modal('hide');
                // reload page here
                // this.$router.push(this.$router.currentRoute);
                this.init();
            }
            else{
                console.log(res.response.data);
                this.errJoinClassRes = true;
            }
            this.loadingAddComment = false;
        },
        vaildateAddComm(){
            if(this.content.length == 0 ){
                this.errComment = true;
                return;
            }
            this.errComment = false;
            this.addComm();
        },
    }
}
</script>

