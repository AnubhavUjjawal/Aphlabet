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
                <div class="form-group">
                    <label for="moderator" class="col-form-label">Moderator Username:</label>
                    <input class="form-control"  maxlength="100" v-model="content" />
                    <span v-if="errLecture" class="text-danger">Please give a valid username.</span>
                </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" @click="validateAddLec">
                    Add Moderator <span v-if="loadingAddLecture" class="ld ld-ring ld-spin"></span>
                </button>
            </div>
            </div>
        </div>
    </div>    
</template>
<script>
import { mapGetters } from "vuex";
import {addModerator} from "../api";
export default {
    name: 'AddModeratorModal',
    computed: mapGetters(['getToken', 'getCourse']),
    data: function(){
        return {
            title: "Add Moderator",
            content: "",
            errLecture: false,
            loadingAddLecture: false,
        }
    },
    props: {
        addModalId: String,
        init: Function
    },
    methods: {
        async addLec(){
            // console.log(this.getCourse.info.id);
            this.loadingAddLecture = true;
            let res = await addModerator(this.getToken.token, this.getCourse.info.id, [this.content]);
            this.loadingAddLecture = false;
            if(res.status == 200){
                $(`#${this.addModalId}`).modal('hide');
                // reload page here
                this.init();
            }
            else{
                console.log(res.response.data);
                this.errLecture = true;
            }
            // console.log(this.file);
        },
        changeFile(){
            this.file = event.target.files[0]
        },
        validateAddLec(){
            if(this.content.length == 0 ){
                this.errLecture = true;
                return;
            }
            this.errLecture = false;
            this.addLec();
        },
    },
    mounted(){
        // console.log(this.addModalId);
    }
}
</script>

