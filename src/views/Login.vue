<template>
    <div class="login align-items-center">
        <div class="">
            <div class="card mx-auto col-sm-12 col-md-6 my-5">
                <h5 class="card-header">Aphlabet Login</h5>
                <div class="card-body">
                    <h5 class="card-title">Welcome back to Aphlabet. Enter credentials below.</h5>
                    <input type="text" class="form-control my-2" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                    <input type="password" class="form-control my-2" placeholder="Password" aria-label="Password" aria-describedby="basic-addon2">
                    <button @click="loginAndNavigate" class="btn btn-primary my-2">Login</button>
                    <router-link :to="{'name':'signup'}">
                        <a href="#" class="float-right">signup with us.</a>
                    </router-link>
                    <router-link :to="{'name': 'forgotPassword'}">
                        <a href="#" class="float-right mr-2"> forgot password?</a>
                    </router-link>
                </div>
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

