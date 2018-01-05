import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import 'normalize.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './global.scss';

import App from './app.vue';
import SiteMy from './apps/site/my.vue';
import SiteSubscribe from './apps/site/subscribe.vue';
import SiteDiscover from './apps/site/discover.vue';

// vue-router

Vue.use(VueRouter);

const routes = [{
    path: '/my',
    component: SiteMy
},{
    path: '/subscribe',
    component: SiteSubscribe
},{
    path: '/discover',
    component: SiteDiscover
}];

const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
});

// vue;

Vue.use(Vuex);
Vue.use(ElementUI);

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++;
        }
    }
});

new Vue({
    el: '#app',
    render: h => h(App),
    store,
    router
});