<template>
    <div class="Signup">
        <div class="card mx-auto col-sm-12 col-md-6 my-5">
            <h5 class="card-header">Aphlabet Signup</h5>
            <div class="card-body">
                <h5 class="card-title">Welcome  to Aphlabet. Signup with us.</h5>
                <input type="text" class="form-control my-2" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                <input type="text" class="form-control my-2" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1">
                <input type="password" class="form-control my-2" placeholder="Password" aria-label="Password" aria-describedby="basic-addon2">
                <input type="password" class="form-control my-2" placeholder="Confirm Password" aria-label="Confirm Password" aria-describedby="basic-addon2">
                <button @click="loginAndNavigate" class="btn btn-primary my-2">Signup</button>
                <router-link :to="{'name': 'login'}">
                    <a href="#" class="float-right">back to login</a>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import router from '../router';
export default {
    name: 'Signup',
    methods: {
    loginAndNavigate: function(){
            router.push('home')
        }
    }
}
</script>

