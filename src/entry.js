import Vue from 'vue'
import Header from '../components/header.vue'
import Main from '../components/main.vue'
import Detail from '../components/detail.vue'
import Add from '../components/addDiary.vue'
import 'vue-template-compiler'
import './js/canvas-nest.min.js'
import './css/font-awesome.min.css'
import './css/common.css'
import store from '../vuex/store'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
    mode:'history',
    base:__dirname + 'dailyManage/daily.html',
    routes: [
        {path: '/', redirect: '/foo' },
        {path: '/foo',component: Main},
        {path: '/bar/:index',component: Detail},
        {path: '/add/:index',component:Add}
    ]
})

new Vue({
    el: '#all',
    router,
    store,
    render: h => h(Header)
})

/*const header = new Vue({router}).$mount('#header');*/
