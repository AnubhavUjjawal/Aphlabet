import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';

Vue.use(Router);

export default new Router({
  // mode: "history",
  routes: [
    {
      path: '/',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('./views/Signup.vue')
    },
    {
      path: '/forgotPassword',
      name: 'forgotPassword',
      component: () => import('./views/ForgotPassword.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/courseHome/',
      name: 'courseHome',
      component: () => import('./views/CourseHome.vue'),
      props: true
    },
    {
      path: '/Lectures/',
      name: 'lectures',
      component: () => import('./views/Lectures.vue'),
      props: true
    },
    {
      path: '/Announcements/',
      name: 'announcements',
      component: () => import('./views/Announcements.vue'),
      props: true
    },
    {
      path: '/ClassInfo/',
      name: 'classinfo',
      component: () => import('./views/ClassInfo.vue'),
      props: true
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
