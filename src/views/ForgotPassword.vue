<template>
    <div class="login">
        <div class="card mx-auto col-sm-12 col-md-6 my-5">
            <h5 class="card-header">Aphlabet Forgot Password</h5>
            <div class="card-body">
                <h5 class="card-title">Enter your email id below. If it is registered, we will send a password reset link.</h5>
                <input type="text" class="form-control my-2" placeholder="Email address" aria-label="Email Address" aria-describedby="basic-addon1">
                <button @click="sendResetRequest" class="btn btn-primary my-2">Send Password reset request</button>
                <router-link :to="{'name': 'login'}">
                    <a href="#" class="float-right">back to login</a>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
// import router from '../router';
export default {
    name: 'ForgotPassword',
    methods: {
    sendResetRequest: function(){
            
        }
    }
}
</script>

