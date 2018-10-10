import Vue from 'vue'
import Vuex from 'Vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
  state:{
    testlist:[
      {data:"111"},
      {data:"222"}
    ]
  },
  getters:{
    getlistnum:state=>(getters,val)=>{
      let num = Number(getters)||0;
      console.log("传递的值："+val)
      if(!val) {
        state.testlist[num].data = val;
      } else {
        console.log("没有传值")
      }
      console.log(state)
      return state.testlist[num].data;
    }
  }
  // getters:{
  //   getlistnum:state=>(vals)=> {
  //     console.log(vals+"slsk")
  //     return state.testlist[vals].data
  //   }
  // }
});
export default store
