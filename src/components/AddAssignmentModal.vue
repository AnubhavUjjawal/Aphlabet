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
                    <label for="message-text" class="col-form-label">Title:</label>
                    <input class="form-control" id="message-text" maxlength="100" v-model="content" />
                    <span v-if="errTitle" class="text-danger">Please add a title.</span>
                </div>
                <div class="form-group">
                    <!-- <label for="lectureFile"></label> -->
                        <input type="file" class="form-control-file" @change="changeFile($event)">
                        <span v-if="errLecture" class="text-danger">Please add a file.</span>
                </div>
                <div class="form-group">
                    <label for="message-text" class="col-form-label">Deadline:</label>
                    <input class="form-control" type="datetime-local" v-model="deadline" />
                    <span v-if="errDeadline" class="text-danger">Please add a deadline.</span>
                </div>
                <div class="form-group">
                    <label for="message-text" class="col-form-label">Max Score:</label>
                    <input class="form-control" type="number" max="1000" min="0" v-model="max_score" />
                    <span v-if="errMax" class="text-danger">Please add a valid Max Score.</span>
                </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" @click="validateAddLec">
                    Add Assignment <span v-if="loadingAddLecture" class="ld ld-ring ld-spin"></span>
                </button>
            </div>
            </div>
        </div>
    </div>    
</template>
<script>
import { mapGetters } from "vuex";
import {addAssignment} from "../api";
export default {
    name: 'AddAssignmentModal',
    computed: mapGetters(['getToken', 'getCourse']),
    data: function(){
        return {
            title: "Add Assignment",
            content: "",
            errLecture: false,
            errDeadline: false,
            errTitle: false,
            loadingAddLecture: false,
            errMax: false,
            file: null,
            deadline: "",
            max_score: 0,
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
            let res = await addAssignment(this.getToken.token, this.getCourse.info.id, this.content, this.file, this.deadline, this.max_score);
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
            console.log(this.deadline);
            if(this.file == null){
                this.errLecture = true;
            }
            else{
                this.errLecture = false;
            }
            if(this.max_score < 0 || this.max_score > 1000){
                this.errMax = true;
            }
            else{
                this.errMax = false;
            }
            if(this.content.length == 0){
                this.errTitle = true;
            }
            else{
                this.errTitle = false;
            }
            // console.log(this.deadline);
            if(this.deadline.length == 0){
                this.errDeadline = true;
            }
            else{
                this.errDeadline = false;
            }
            if(!this.errLecture && !this.errDeadline && !this.errTitle && !this.errMax){
                this.addLec();
            }
            // this.errLecture = false;
        },
    }
}
</script>

