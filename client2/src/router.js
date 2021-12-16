import Vue from 'vue'
import Router from 'vue-router'
import SearchForm from './components/SearchForm'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: SearchForm
        }
    ]
});
