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
                    <!-- <label for="lectureFile"></label> -->
                        <input type="file" class="form-control-file" @change="changeFile($event)">
                        <span v-if="errLecture" class="text-danger">Please add a file.</span>
                </div>
                <div class="form-group">
                    <label for="message-text" class="col-form-label">Description:</label>
                    <input class="form-control" id="message-text" maxlength="100" v-model="content" />
                </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" @click="validateAddLec">
                    Share Resource <span v-if="loadingAddLecture" class="ld ld-ring ld-spin"></span>
                </button>
            </div>
            </div>
        </div>
    </div>    
</template>
<script>
import { mapGetters } from "vuex";
import {addResource} from "../api";
export default {
    name: 'AddResourceModal',
    computed: mapGetters(['getToken', 'getCourse']),
    data: function(){
        return {
            title: "Add Resource",
            content: "",
            errLecture: false,
            loadingAddLecture: false,
            file: null
        }
    },
    props: {
        addModalId: String,
        init: Function
    },
    methods: {
        async addLec(){
            console.log(this.getCourse.info.id);
            this.loadingAddLecture = true;
            let res = await addResource(this.getToken.token, this.getCourse.info.id, this.content, this.file);
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
            if(this.file == null ){
                this.errLecture = true;
                return;
            }
            this.errLecture = false;
            this.addLec();
        },
    }
}
</script>

