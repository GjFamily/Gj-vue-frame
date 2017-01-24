import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
import App from './App'
import Home from './components/Home'
import TimeEntries from './components/TimeEntries.vue'
import LogTime from './components/LogTime.vue'
import NotFound from './components/404'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter)

const routes = [{
  path : '/',
  component : Home
},{
  path : '/home',
  component : Home
},{
  path : '/time-entries',
  component : TimeEntries,
  children : [{
    path : 'log-time',
    component : LogTime,
  }]
},{
  path : '*',
  component : NotFound
}];

const router = new VueRouter({
  routes
});

/* eslint-disable no-new */
// 这灵活得亮瞎了
/*new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: { App }
});

 new Vue(Vue.util.extend({
   router
 }, App)).$mount('#app');

new Vue({
  el:'#app',
  router,
  render:h => h(App)
});*/
var app = new Vue({
  el: '#root',
  router,
  store,
  ...App,
});
