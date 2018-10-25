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
                    <label for="msg">
                        You can do as many submissions as you want, but only the last submission will be evaluated.
                    </label>
                </div>
                <div class="form-group">
                    <!-- <label for="lectureFile"></label> -->
                        <input type="file" class="form-control-file" @change="changeFile($event)">
                        <span v-if="errLecture" class="text-danger">Please add a file.</span>
                </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" @click="validateAddLec">
                    Submit Assignment <span v-if="loadingAddLecture" class="ld ld-ring ld-spin"></span>
                </button>
            </div>
            </div>
        </div>
    </div>    
</template>
<script>
import { mapGetters } from "vuex";
import { submitAssignment } from "../api";
export default {
    name: 'SubmitAssignmentModal',
    computed: mapGetters(['getToken', 'getCourse']),
    data: function(){
        return {
            title: "Submit Assignment",
            errLecture: false,
            loadingAddLecture: false,
            file: null,
        }
    },
    props: {
        addModalId: String,
        init: Function,
        assignment: Object
    },
    methods: {
        async addLec(){
            // console.log(this.assignment.id, this.file);
            this.loadingAddLecture = true;
            let res = await submitAssignment(this.getToken.token, this.assignment.id, this.file);
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
            // console.log(this.deadline);
            if(this.file == null){
                this.errLecture = true;
            }
            else{
                this.errLecture = false;
            }
            if(!this.errLecture){
                this.addLec();
            }
            // this.errLecture = false;
        },
    }
}
</script>

