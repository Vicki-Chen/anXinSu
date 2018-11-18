import Vue from 'vue'// vue实例
import Vuex from 'vuex' //vue router

Vue.use(Vuex)

export default new Vuex.Store({
    state:{        //state  状仓库  所有的状态值放在这里管理
        login:window.localStorage.getItem("login") || false, 
    },
     mutations:{    //mutations：修改仓库中状态值的方法 ，state的修改只有通过mutations才能修改
    //更改state 里的数据的方法
        changeLogin(state,val1){
            console.log(val1)

            state.login=val1
        }
    }
})