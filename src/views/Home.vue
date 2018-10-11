<template>
  <div class="home">
    <Navbar/>
    <div class="card-group">
      <CourseCard
        class="col-md-4 my-2 col-sm-12"
        v-for="cls in classes"
        v-bind:key="cls.id"
        v-bind:info="cls"
        v-bind:signedIn="signedIn"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import CourseCard from '@/components/CourseCard.vue'

export default {
  name: 'home',
  components: {
    Navbar,
    CourseCard
  },
  data: function (){
    return {
      signedIn: {
       signedIn: true
      },
      classes: [{
        id: 1,
        className: "Advanced Software Engineering",
        description: "Lorem ipsum dolor amet roof party fingerstache bicycle rights, man bun pok pok synth vape chia ugh freegan ennui. Pug retro wayfarers XOXO helvetica edison bulb direct trade gentrify godard food truck kombucha sartorial raclette. Twee polaroid salvia green juice man bun, +1 plaid air plant gochujang paleo four dollar toast pug slow-carb chia organic. Food truck vape umami dreamcatcher vinyl, 90's freegan. Disrupt mlkshk hot chicken plaid, jianbing ennui flannel. Kinfolk tote bag cornhole, waistcoat cold-pressed gochujang knausgaard tofu literally +1 bitters normcore synth vape. Waistcoat squid jianbing narwhal freegan photo booth, kale chips helvetica swag tacos ramps brunch subway tile.",
        teacherName: "Anubhav Ujjawal",
        imageUrl: "https://picsum.photos/300/200",
      },
      {
        id: 2,
        className: "Digital Signals Analysis and Applications",
        description: "Before they sold out four dollar toast swag, paleo locavore kombucha everyday carry. Post-ironic vinyl umami, kinfolk austin keytar lomo scenester four dollar toast chartreuse dreamcatcher glossier plaid messenger bag. Cronut microdosing tilde listicle flexitarian health goth chillwave. Pabst narwhal art party XOXO forage iPhone raw denim keytar tilde taiyaki distillery cold-pressed stumptown etsy coloring book.",
        teacherName: "Garvit Kataria",
        imageUrl: "https://picsum.photos/400/300",
      }]
    }
  }
}
</script>
