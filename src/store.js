import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        signedIn: false,
        course: null
    },
    getters: {
        getSignedIn(state){
            return state.signedIn;
        },
        getCourse(state){
            return state.course;
        }
    },
    mutations: {
        setCourse(state, course){
            state.course = course;
        },
        setUser(state, userObj=null){
            state.signedIn = true;
            state.user = {
                "token": "letmein"
            }
        }
    }
});