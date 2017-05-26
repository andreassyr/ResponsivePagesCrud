import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './app.vue';
import PagesStore from './store/state.js';
import routes from './routes.js';

Vue.use(Vuex);
Vue.use(VueRouter);

const store = new Vuex.Store({
    modules: {
        PagesStore
    }
});


const router = new VueRouter({
    routes // short for routes: routes
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});