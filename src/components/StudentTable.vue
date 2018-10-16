<template>
  <div class="StudentTable table-responsive">
    <table class="table table-hover">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>    
            </tr>
        </thead>
        <tbody>
            <tr v-for="(student, index) in students" v-bind:key="student.id">
                <th scope="row">{{doMath(index)}}</th>
                <td>{{student.username}}</td>
                <td>{{student.first_name}} {{student.last_name}}</td>
                <td>{{student.email}}</td> 
            </tr>
        </tbody>
    </table>
  </div>
</template>
<script>
// import logo from '../assets/logo.png'
export default {
  name: 'StudentTable',
  props: {
    // info: Object,
    // signedIn: Object,
    students: Array
  },
  methods: {
    doMath: function (index) {
      return index+1
    }
  }
}
</script>