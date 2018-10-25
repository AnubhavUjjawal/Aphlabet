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
                        Enter the marks for <strong>{{ submission.submitter.username }}</strong> out of <strong>{{ getAssignment.assignment.max_score }}</strong>
                    </label>
                </div>
                <div class="form-group">
                    <input type="number" class="form-control" v-model="marks">
                    <span v-if="errMarks" class="text-danger">Please give valid marks.</span>
                </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" @click="validateAddGrade">
                    Submit Marks <span v-if="loadingAddMarks" class="ld ld-ring ld-spin"></span>
                </button>
            </div>
            </div>
        </div>
    </div>    
</template>
<script>
import { mapGetters } from "vuex";
import { submitAssignmentGrade } from "../api";
export default {
    name: 'SubmitAssignmentGradeModal',
    computed: mapGetters(['getToken', 'getAssignment', 'getUser']),
    data: function(){
        return {
            title: "Add Submission Grade",
            errMarks: false,
            loadingAddMarks: false,
            marks: 0,
        }
    },
    props: {
        addModalId: String,
        init: Function,
        submission: Object,
        assignment: Object
    },
    methods: {
        async addGrade(){
            // console.log(this.submission.id, this.file);
            this.loadingAddMarks = true;
            let res = await submitAssignmentGrade(this.getToken.token, this.getAssignment.assignment.id, [{'username': this.submission.submitter.username, 'score': parseInt(this.marks)}]);
            this.loadingAddMarks = false;
            if(res.status == 200){
                $(`#${this.addModalId}`).modal('hide');
                // reload page here
                this.init();
            }
            else{
                console.log(res.response.data);
                this.errMarks = true;
            }
            // console.log(this.file);
        },
        changeFile(){
            this.file = event.target.files[0]
        },
        validateAddGrade(){
            // console.log(this.marks >=);
            if(this.marks >= 0 && this.marks <= this.getAssignment.assignment.max_score){
                this.errMarks = false;
            }
            else{
                this.errMarks = true;
            }
            if(this.errMarks == false){
                this.addGrade();
            }
            // this.errMarks = false;
        },
    },
    mounted(){
        // this.marks = this.submission.score
    }
}
</script>

