<template>
  <div class="CourseCard">
    <div class="card h-100">
      <img class="card-img-top" alt="Card image cap" :src="info.imageUrl" height="300" width="400">
      <div class="card-body">
        <h5 class="card-title">{{info.className}}</h5>
        <p class="card-text text-truncate">
          {{info.description}}
        </p>
        <router-link :to="{'name': 'courseHome', 'params': {'id': info.id, 'signedIn': signedIn}}">
          <a href="#" class="btn btn-primary float-right">Go to class</a>
        </router-link> 
        <footer class="blockquote-footer">Taught by <cite title="Source Title">{{info.teacherName}}</cite></footer>
      </div>
    </div>
  </div>
</template>
<script>
// import logo from '../assets/logo.png'
export default {
  name: 'CourseCard',
  props: {
    info: Object,
    signedIn: Object
  }
}
</script>