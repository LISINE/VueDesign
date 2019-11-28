const state = {
    //初始化定位
    defaultname : window.localStorage.getItem('nowNm') || '北京',
    id : window.localStorage.getItem('nowId') || 1
   
};

const actions = {

};

const mutations = {
    //修改定位
    CITY_INFO(state , payload){
        state.nm = payload.nm;
        state.id = payload.id;
    }
};

export default {
    namespaced : true,
    state,
    actions,
    mutations
}