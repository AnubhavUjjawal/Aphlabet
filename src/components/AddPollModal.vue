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
                    <div class="options-div">
                        
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <div class="mr-auto">
                    <button type="button" class="btn btn-warning mr-1" @click="addOption">Add Option</button>
                    <button type="button" class="btn btn-danger" @click="removeOption">Remove Option</button>
                </div>
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
import {addPoll, addPollOption} from "../api";
export default {
    name: 'AddPollsModal',
    computed: mapGetters(['getToken', 'getCourse']),
    data: function(){
        return {
            title: "Add Poll",
            content: "",
            errPoll: false,
            loadingPoll: false,
            option: 1,
        }
    },
    props: {
        addModalId: String,
        init: Function
    },
    methods: {
        async addPol(){
            // console.log(this.getCourse.info);
            this.loadingPoll = true;
            let res = await addPoll(this.getToken.token, this.getCourse.info.id, this.content);
            // let res = { status: 200};
            if(res.status == 200){
                const options = this.getOptions();
                const pollID = res.data.id;
                for(let i=0; i< options.length; i++)
                {
                    let optionText = options[i].value;
                    if(optionText!=''){
                        let resOption = await addPollOption(this.getToken.token, pollID, optionText);
                    }
                    // console.log(resOption.status, resOption.data);
                }
                $(`#${this.addModalId}`).modal('hide');
                // reload page here
                // console.log(res.data);
                this.init();
                // this.$router.push(this.$router.currentRoute);
            }
            else{
                console.log(res);
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
        addOption(){
            let html = "<div id='option-" + this.option + "'>";
            html += '<label for="message-text" class="col-form-label">Option ' + this.option +':</label>';
            html += '<input class="form-control" name="option"/>'
            html += '</div>'
            this.option += 1;
            $(".options-div").append(html);
        },
        removeOption(){
            if(this.option == 1) return;
            this.option -= 1;
            $("#option-"+this.option).remove();
            
        },
        getOptions(){
            return $(".options-div :input");
        }
    }
}
</script>

