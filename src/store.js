import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export const store = new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        signedIn: false,
        course: null,
        user: null
    },
    getters: {
        getSignedIn(state){
            return state.signedIn;
        },
        getCourse(state){
            return state.course;
        },
        getUser(state){
            return state.user;
        }
    },
    mutations: {
        setCourse(state, course){
            state.course = course;
        },
        setUser(state, user=null){
            state.signedIn = true;
            state.user = user;
        },
        setToken(state, token){
            state.token = token;
        },
        removeUser(state){
            state.signedIn = false;
            state.user = null;
            state.course = null;
            state.token = null;
        }
    }
});