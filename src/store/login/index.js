// state ：对数据的全局存储
const state={   
    username:''||window.localStorage.getItem('username') ,
    token:''|| window.localStorage.getItem('token'),  //初始化token
    isVip:false
};
// mutations ：对数据的同步更改
  const mutations= {
    //存储token方法
    //设置token等于外部传递进来的值
    setToken(state, token) {
        state.token = token
        localStorage.token = token //同步存储token至localStorage
      },
    setUsername(state, username) {
        state.username = username
        localStorage.username = username //同步存储username至localStorage
      },
      setVip(state,isVip){
        state.isVip = isVip
        localStorage.isVip = isVip //同步存储token至localStorage
      },
      setout(state){
          localStorage.clear()
          state.username=''
          state.token=''
          state.isVip=false
      }
  };
  // getter： 可以理解为computed ，对数据进行计算
  
// actions：对数据的异步更改
  const actions= {
    addToken(context,token){
        context.commit("setToken",token)
    },
    addName(context,name){
        context.commit("setUsername",name)
    },
    changeVip(context,isVip){
        context.commit("setVip",isVip)
  },
  logout(context){
      context.commit("setout")
  }
}
  export default {
    namespaced : true,
    state,
    actions,
    mutations
   
}

