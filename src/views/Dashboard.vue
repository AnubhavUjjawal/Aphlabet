<template>
  <div class="Announcements">
    <Navbar/>
    <div class="row">
        <div class="col-md-2">
          <Sidebar/>
        </div>
      <div class="col-md-10">
        <div class="col-md-12 col-xs-12">
            <button v-if="getUser.user.username == getCourse.info.creator.username" data-toggle="modal" data-target="#ArchiveClass" class="btn btn-danger mb-5 mt-2 float-right">
               Archive This Class
            </button>
            <div class="modal fade" tabindex="-1" role="dialog" id="ArchiveClass">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h5 class="modal-title">Archive Class</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div class="modal-body">
                        <p>Are you sure you want to archive this class?</p>
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">
                            Close
                        </button>
                        <button type="button" class="btn btn-danger" @click="archiveClass">
                            Archive <span v-if="loadingDelete" class="ld ld-ring ld-spin"></span>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
            <br><br>
            <h2 class="m-2">Dashboard</h2>
            <div>
                <div class="col-md-6 pull-right" id="polls-div">
                    <select class="custom-select polls-select col-md-4 ml-3" @change="loadPollGraph" v-model="poll">
                        <option selected value="-1">Select a poll</option>
                        <option v-for="poll in polls" :key="poll.id" :value="poll.id">
                            {{truncate(poll.poll_text)}}
                        </option>
                    </select>
                    <canvas class="col-md-12" id="pollsChart" width="100" height="100" aria-label="Polls Chart" responsive="true"></canvas>
                </div>
                <div class="col-md-6" id="assignments-div">
                    <select class="custom-select assignments-select col-md-4 ml-3" @change="loadAssignmentGraph" v-model="assignment">
                        <option selected value="-1">Select an assignment</option>
                        <option v-for="assignment in assignments" :key="assignment.id" :value="assignment.id">
                            {{truncate(assignment.title)}}
                        </option>
                    </select>
                    <!-- <button @click="download('assignmentsChart')" class="btn btn-primary">Download</button> -->
                    <canvas class="col-md-12" id="assignmentsChart" width="100" height="100" aria-label="Assignments Chart" responsive="true"></canvas>
                </div>
            </div>
            <div>
                <div class="col-md-6" id="lectures-div">
                    <!-- <select class="custom-select lecture-select col-md-4 ml-3" @change="loadLectureGraph" v-model="lecture">
                        <option selected value="-1">Select an lecture</option>
                        <option v-for="lecture in lectures" :key="lecture.id" :value="lecture.id">
                            {{truncate(lecture.description)}}
                        </option>
                    </select> -->
                    <canvas class="col-md-12" id="lecturesChart" width="100" height="100" aria-label="Lecture Chart" responsive="true"></canvas>
                </div>
            </div>
        </div><br><br>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from '@/components/Sidebar.vue';
import Navbar from '@/components/Navbar.vue'
import { getPolls, getPollResponse, getAssignments, getAssignmentSubmissions, getLectures, softDeleteClassroom } from "../api";
import { mapGetters } from "vuex";
import router from "../router";

export default {
  name: 'Dashboard',
  components: {
    Navbar,
    Sidebar,
  },
  computed: {
    ...mapGetters(['getToken', 'getCourse', 'getUser']),
    getAssign(){
        for(let i=0; i<this.assignments.length; i++){
            if(this.assignments[i].id == this.assignment)
                return this.assignments[i];
        }
        return { max_score: 0}
    }
  },
  data: function(){
    return {
      loadingPolls: false,
      polls: [],
      pollRes: [],
      lectures: [],
      poll: -1,
      assignments: [],
      assignment: -1,
      assignmentSubmissions: [],
      lecture: -1,
      loadingDelete: false,
    }
  },
  methods:{
    truncate(str){
        if(str.length <= 50)
            return str;
        return str.slice(0, 50) + " ...";
    },
    download(canvID){
        var canvas = document.getElementById(canvID);
        var imgData = canvas.toDataURL("image/jpeg", 1.0);
        var pdf = new jsPDF();

        pdf.addImage(imgData, 'JPEG', 0, 0);
        pdf.save("download.pdf");
    },
    async archiveClass(){
        this.loadingDelete = true;
        const res = await softDeleteClassroom(this.getToken.token, this.getCourse.info.id);
        this.loadingDelete = false;
        if(res.status == 200){
            // $("#DeleteDoc").modal('hide');
            // this.init();
            router.replace({name: 'home'}); 
        }
        else{
            console.log(res);
        }
    },
    async init(){
        this.loadingPolls = true;
        let res = await getPolls(this.getToken.token, this.getCourse.info.id);
        this.loadingPolls = false;
        if(res.status == 200){
            this.polls = res.data
            // console.log(res.data);
        }
        else{
            console.log(res);
        }
        this.loadingPolls = true;
        let res2 = await getAssignments(this.getToken.token, this.getCourse.info.id);
        this.loadingPolls = false;
        if(res2.status == 200){
            this.assignments = res2.data;
            // console.log(res.data);
        }
        else{
            console.log(res2);
        }
        this.loadingPolls = true;
        let res3 = await getLectures(this.getToken.token, this.getCourse.info.id);
        this.loadingPolls = false;
        if(res3.status == 200){
            this.lectures = res3.data;
            console.log(res3.data);
        }
        else{
            console.log(res3);
        }
    },
    getRandomColor() {
        let r = Math.floor(Math.random()*255);
        let g = Math.floor(Math.random()*255);
        let b = Math.floor(Math.random()*255);
        return `rgba(${r}, ${g}, ${b}, 0.2)`;
    },
    async loadPollsChart(){
        let poll = {poll_options: 0};
        let labelsData = {};
        for(let i=0; i<this.polls.length; i++){
            if(this.polls[i].id == this.poll)
                poll = this.polls[i];
        }
        // console.log("poll", poll);
        for(let i=0; i<poll.poll_options.length; i++){
            labelsData[poll.poll_options[i]["option_text"]] = 0;
            // console.log(poll.poll_options);
        }
        // console.log("labels ", labelsData);
        for(let i=0; i<this.pollRes.length; i++){
            labelsData[this.pollRes[i].poll_option["option_text"]] += 1;
        }
        let labels = Object.keys(labelsData);
        let data = Object.values(labelsData);
        let colors = new Array();
        for (let index = 0; index < labels.length; index++) {
            colors.push(this.getRandomColor());   
        }
        // console.log(colors);
        let canv = '<canvas class="col-md-12" id="pollsChart" width="100" height="100" aria-label="Polls Chart" responsive="true"></canvas>';
        $("#pollsChart").remove();
        $("#polls-div").append(canv);
        var ctx = document.getElementById("pollsChart").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: '# of Polls',
                    data: data,
                    backgroundColor: colors,
                    borderWidth: 1,
                }],
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
    },
    async loadPollGraph(){
        this.loadingPolls = true;
        let res = await getPollResponse(this.getToken.token, this.poll);
        this.loadingPolls = false;
        if(res.status == 200){
            this.pollRes = res.data;
            // console.log(res.data);
            this.loadPollsChart();
        }
        else{
            console.log(res);
        }
    },
    async loadAssignmentGraph(){
        this.loadingPolls = true;
        let res = await getAssignmentSubmissions(this.getToken.token, this.assignment);
        this.loadingPolls = false;
        if(res.status == 200){
            this.assignmentSubmissions = res.data;
            // console.log(res.data);
            this.loadAssignmentsChart();
        }
        else{
            console.log(res);
        }
    },
    async loadLectureGraph(){},
    async loadAssignmentsChart(){
        console.log(this.assignmentSubmissions, this.assignment);
        let labels = Array(), students = Array();
        for (let index = 0; index <= this.getAssign.max_score; index++) {
            labels.push(index);
            students.push(0);    
        }
        for(let index = 0; index < this.assignmentSubmissions.length; index++){
            students[this.assignmentSubmissions[index]["score"]] += 1
        }
        // console.log(labels);
        let canv = '<canvas class="col-md-12" id="assignmentsChart" width="100" height="100" aria-label="Assignments Chart" responsive="true"></canvas>';
        $("#assignmentsChart").remove();
        $("#assignments-div").append(canv);
        var ctx = document.getElementById("assignmentsChart").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: '# of Assignments',
                    data: students,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
    },
  },
  async mounted(){
    this.init();
    this.loadPollsChart();
    this.loadAssignmentsChart();
  },
}
</script>

