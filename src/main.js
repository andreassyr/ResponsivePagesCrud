import 'bootstrap/dist/css/bootstrap.css';
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './app.vue';
import PagesStore from './store/state.js';
import PagesList from './pages/pages-list.vue';

Vue.use(Vuex);
Vue.use(VueRouter);

const store = new Vuex.Store({
    modules:{
        PagesStore
    }
});

const routes = [
    {path: '/', component: PagesList}
];

const router = new VueRouter({
    routes // short for routes: routes
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});