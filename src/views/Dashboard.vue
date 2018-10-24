<template>
  <div class="Announcements">
    <Navbar/>
    <div class="row">
        <div class="col-md-2">
          <Sidebar/>
        </div>
      <div class="col-md-10">
        <div class="col-md-12 col-xs-12">
            <!-- <button v-if="getUser.user.is_faculty" data-toggle="modal" :data-target="'#' + addModalId" class="btn btn-primary mb-5 mt-2 float-right">
                Add Announcement
            </button> -->
            <h2 class="m-2">Dashboard</h2>
            <div class="col-md-6 pull-right" id="polls-div">
                <select class="custom-select polls-select col-md-4 ml-3" @change="loadPollGraph" v-model="poll">
                    <option selected value="-1">Select a poll</option>
                    <option v-for="poll in polls" :key="poll.id" :value="poll.id">
                        {{truncate(poll.poll_text)}}
                    </option>
                </select>
                <canvas class="col-md-12" id="pollsChart" width="100" height="100" aria-label="Polls Chart" responsive="true"></canvas>
            </div>
            <div class="col-md-6">
                <select class="custom-select assignments-select col-md-4 ml-3">
                    <option selected value="-1">Select an assignment</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <canvas class="col-md-12" id="assignmentsChart" width="100" height="100" aria-label="Assignments Chart" responsive="true"></canvas>
            </div>
        </div><br><br>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from '@/components/Sidebar.vue';
import Navbar from '@/components/Navbar.vue'
import { getPolls, getPollResponse } from "../api";
import { mapGetters } from "vuex";

export default {
  name: 'Dashboard',
  components: {
    Navbar,
    Sidebar,
  },
  computed: {
    ...mapGetters(['getToken', 'getCourse', 'getUser']),
  },
  data: function(){
    return {
      loadingPolls: false,
      polls: [],
      pollRes: [],
      poll: -1
    }
  },
  methods:{
    truncate(str){
        if(str.length <= 50)
            return str;
        return str.slice(0, 50) + " ...";
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
    },
    getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#33';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
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
                    borderWidth: 1,
                    backgroundColor: colors
                }],
            },
            borderWidth: 1,
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
    async loadAssignmentsChart(){
        var ctx = document.getElementById("assignmentsChart").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    label: '# of Assignments',
                    data: [12, 19, 3, 5, 2, 3],
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
  }
}
</script>

