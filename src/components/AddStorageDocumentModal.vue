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
                        <span v-if="errDocIsNull" class="text-danger">Please add a file.</span>
                        <span v-if="errDocIsLarge" class="text-danger">File too Large.</span>
                </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" @click="validateAddStor">
                    Add Document <span v-if="loadingAddDoc" class="ld ld-ring ld-spin"></span>
                </button>
            </div>
            </div>
        </div>
    </div>    
</template>
<script>
import { mapGetters } from "vuex";
import {addStorageDoc} from "../api";
export default {
    name: 'AddStorageDocumentModal',
    computed: mapGetters(['getToken', 'getCourse']),
    data: function(){
        return {
            title: "Add Document",
            content: "",
            errDocIsNull: false,
            errDocIsLarge: false,
            loadingAddDoc: false,
            file: null,
        }
    },
    props: {
        addModalId: String,
        init: Function,
        used: Number,
        limit: Number
    },
    methods: {
        async addStor(){
            // console.log(this.getCourse.info.id);
            this.loadingAddDoc = true;
            let res = await addStorageDoc(this.getToken.token, this.file);
            this.loadingAddDoc = false;
            if(res.status == 200){
                $(`#${this.addModalId}`).modal('hide');
                // reload page here
                this.file = null;
                this.init();
            }
            else{
                console.log(res.response.data);
                this.errDocIsNull = true;
            }
            // console.log(this.file);
        },
        changeFile(){
            this.file = event.target.files[0];
            console.log(this.file);
        },
        validateAddStor(){
            if(this.file == null){
                this.errDocIsNull = true;
            }
            else{
                this.errDocIsNull = false;
            }
            if(this.file.size + this.used > this.limit + 100 ){ //extra 100 bytes padding in file size just to be careful
                this.errDocIsLarge = true;
            }
            else{
                this.errDocIsLarge = false;
            }
            if(!this.errDocIsNull &&  !this.errDocIsLarge){
                this.addStor();
            }
            // this.errDocIsNull = false;
        },
    }
}
</script>

