import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'

Vue.use(VueResource);
Vue.use(Vuex)


const state = {
    newDia:{
        title: "",
        time: "",
        type:"",
        content:""
    },
    type:["个人日志","休闲","其他"],
    list:[]
}
//跨域访问node中的数据
Vue.http.get("http://localhost:3000/first").then(function (res) {
    for(var i= 0,len=res.body.lists.length;i<len;i++){
        var selData = res.body.lists[i];
        state.list.push(selData);
    }
})

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})
