import Vue from 'vue';
// import VueRouter from 'vue-router';

import 'normalize.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './app.vue';

// // vue-router

// Vue.use(VueRouter);

// const routes = [{
//     path: '/test',
//     component: test
// }];

// const router = new VueRouter({
//     routes // （缩写）相当于 routes: routes
// });

// vue

Vue.use(ElementUI);

new Vue({
    el: '#app',
    render: h => h(App),
    // router
});