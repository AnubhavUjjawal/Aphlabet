<template>
    <div class="login align-items-center">
        <div class="">
            <div class="card mx-auto col-sm-12 col-md-6 my-5">
                <h5 class="card-header">Aphlabet Login</h5>
                <div class="card-body">
                    <h5 class="card-title">Welcome back to Aphlabet. Enter credentials below.</h5>
                    <input v-model="username" type="text" class="form-control my-2" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                    <input v-model="password" type="password" class="form-control my-2" placeholder="Password" aria-label="Password" aria-describedby="basic-addon2">
                    <button @click="loginAndNavigate" class="btn btn-primary my-2">
                        Login <span v-if="loading" class="ld ld-ring ld-spin"></span>
                    </button>
                    <a href="https://serene-wildwood-35121.herokuapp.com/login/5bd1cca61312ae0015c801a2" class="float-right">Login With IIITS.</a>
                    <router-link :to="{'name': 'forgotPassword'}">
                        <a href="#" class="float-right mr-2"> forgot password?</a>
                    </router-link>
                    <div v-if="err" class="card-footer text-danger text-center">
                        Invalid username/password !
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import router from '../router';
import { mapMutations } from 'vuex';
import { getApiToken, getUserDetails } from '../api';
export default {
    name: 'Login',
    data: function(){
        return {
            username: "",
            password: "",
            loading: false,
            err: false
        }
    },
    methods: {
        loginAndNavigate: async function() {
            this.loading = true;
            this.err = false;
            this.$store.commit('setUser');
            let res = await getApiToken(this.username, this.password);
            console.log(res, "token");
            this.loading = false;

            if(res.status == 200){
                this.err = false;
                this.$store.commit({
                    type: 'setToken',
                    token: res.data.token
                });
                let userDetailsRes = await getUserDetails(res.data.token);
                console.log("userDetailRes", userDetailsRes);
                this.$store.commit({
                    type: 'setUser',
                    user: userDetailsRes.data 
                })
                router.push({name: 'home'});
            }
            else{
                this.err = true;
                this.username = "";
                this.password = "";
                console.log(res);
            }
            // console.log(this.username, this.password);
        }
    },
    async mounted() {
        if(this.$route.query['token']){
            console.log("here1");
            console.log(this.$route.query['token']);
            this.$store.commit({
                type: 'setToken',
                token: this.$route.query['token']
            });
            let userDetailsRes = await getUserDetails(this.$route.query['token']);
            console.log("userDetailRes", userDetailsRes);
            this.$store.commit({
                type: 'setUser',
                user: userDetailsRes.data 
            })
            router.push({name: 'home'}); 
        }
        else if(this.$store.getters.getUser){
            console.log("here2");
            router.push({name: 'home'});
        }
    }
}
</script>

