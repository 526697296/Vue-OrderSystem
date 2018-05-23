import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        // 设置属性
        // 菜单
        menuItmes:{},
        //登入状态
        currentUser: null,
        isLogin: false

    },
    getters:{
        // 获取属性的状态
        currentUser: state => state.currentUser,
        isLogin: state => state.isLogin
    },
    mutations:{
        // 改变属性的状态
        setMenuItems(state,data){
            state.menuItmes = data;
        },
        // 将匹配到的对象，在menuitems数组中删除
        // removemenuItems(state,data){
        //     state.menuItmes.forEach((item,index) => {
        //         state.menuItmes.splice(index,1)
        //     });
        // },
        // pushtomenus(state,data){
        //     state.menuItmes.push(data)
        // }
        // 更改用户的状态信息
        userState(state,user){
            if(user){
                state.currentUser = user;
                state.isLogin = true;
            }else{
                state.currentUser = null;
                state.isLogin = false;
            }
        }
    },
    actions:{
        // 应用mutations
        setUser({commit},user){
            commit("userState",user)
        }
    }
})