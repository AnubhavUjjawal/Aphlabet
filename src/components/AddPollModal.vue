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
                    <label for="message-text" class="col-form-label">Subject:</label>
                    <textarea class="form-control" id="message-text" rows="5" v-model="content"></textarea>
                    <span v-if="errPoll" class="text-danger text-center">Please enter the Poll subject.</span>
                </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" @click="validateAddPoll">
                    Add Poll <span v-if="loadingPoll" class="ld ld-ring ld-spin"></span>
                </button>
            </div>
            </div>
        </div>
    </div>    
</template>
<script>
import { mapGetters } from "vuex";
import {addPoll} from "../api";
export default {
    name: 'AddPollsModal',
    computed: mapGetters(['getToken', 'getCourse']),
    data: function(){
        return {
            title: "Add Poll",
            content: "",
            errPoll: false,
            loadingPoll: false
        }
    },
    props: {
        addModalId: String
    },
    methods: {
        async addPol(){
            // console.log(this.getCourse.info);
            this.loadingPoll = true;
            let res = await addPoll(this.getToken.token, this.getCourse.info.id, {poll_text:this.content});
            if(res.status == 200){
                $(`#${this.addModalId}`).modal('hide');
                // reload page here
                console.log(res.data);

                // this.$router.go(this.$router.currentRoute);
            }
            else{
                console.log(res.response.data);
                this.errPoll = true;
            }
            this.loadingPoll = false;
        },
        validateAddPoll(){
            if(this.content.length == 0 ){
                this.errPoll = true;
                return;
            }
            this.errPoll = false;
            this.addPol();
        },
    }
}
</script>

