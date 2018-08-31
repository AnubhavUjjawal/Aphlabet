<template>
    <div class="login">
        <div class="card mx-auto col-sm-12 col-md-6 my-5">
            <h5 class="card-header">Aphlabet Login</h5>
            <div class="card-body">
                <h5 class="card-title">Welcome back to Aphlabet. Enter credentials below.</h5>
                <input type="text" class="form-control my-2" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                <input type="password" class="form-control my-2" placeholder="Password" aria-label="Password" aria-describedby="basic-addon2">
                <button @click="loginAndNavigate" class="btn btn-primary my-2">Login</button>
                <a href="#" class="float-right">forgot password?</a>
            </div>
        </div>
    </div>
</template>
<script>
import router from '../router';
export default {
    name: 'Login',
    methods: {
    loginAndNavigate: function(){
            router.push('home')
        }
    }
}
</script>

