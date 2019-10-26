<template>
  <div class="city_body">
          <div class="city_list">
                    <div class="city_sort" ref="city_sort">
                        <div v-for="item in cityList" :key="item.index">
                            <h2>{{ item.index }}</h2>
                            <ul>
                                <li v-for="itemList in item.list" :key="itemList.id" >{{ itemList.nm }}</li>
                            </ul>
                        </div>	
                    </div>
            </div>
          <div class="city_index">
            <ul>
                <li v-for="(item,index) in cityList" :key="item.index" @click="handleToIndex(index)">{{ item.index }}</li>
            </ul>
         </div>
  </div>
</template>
<script>
export default {
    name:"location",
     data(){
        return {
            cityList : []
        }
    },
   mounted(){

            this.axios.get('/api/cityList').then((res)=>{
                var msg = res.data.msg;
                if(msg === 'ok'){
                      var cities = res.data.data.cities;
                    //[ { index : 'A' , list : [{ nm : '阿城' , id : 123 }] } ]
                    var { cityList } = this.formatCityList(cities);
                    this.cityList = cityList;
                }
            });
        
    },
    methods : {
        formatCityList(cities){
            var cityList = [];
            for(var i=0;i<cities.length;i++){
                var firstLetter = cities[i].py.substring(0,1).toUpperCase();
                if(toCom(firstLetter)){  //新添加index
                    cityList.push({ index : firstLetter , list : [ { nm : cities[i].nm , id : cities[i].id } ] });
                }
                else{   //累加到已有index中
                    for(var j=0;j<cityList.length;j++){
                        if( cityList[j].index === firstLetter ){
                            cityList[j].list.push( { nm : cities[i].nm , id : cities[i].id } );
                        }
                    }
                }
            }

            cityList.sort((n1,n2)=>{
                if( n1.index > n2.index ){
                    return 1;
                }
                else if(n1.index < n2.index){
                    return -1;
                }
                else{
                    return 0;
                }
            });

           

            function toCom(firstLetter){
                for(var i=0;i<cityList.length;i++){
                    if( cityList[i].index ===  firstLetter){
                        return false;
                    }
                }
                return true;
            }

            return {
                cityList,
            };

        },
        handleToIndex(index){
            var h2 = this.$refs.city_sort.getElementsByTagName('h2');
            this.$refs.city_sort.parentNode.scrollTop = h2[index].offsetTop;
            // this.$refs.city_List.toScrollTop(-h2[index].offsetTop);
        }
    }
}
</script>
<style scoped>
.city_body{ display: flex; width:80%; position: absolute;padding-left: 15%;}
.city_body .city_list{ float:left;width:25%; max-height: 440px;flex:1; overflow: scroll; background: #FFF5F0;}
.city_body .city_list::-webkit-scrollbar{
    background-color:transparent;
    width:0;
}
.city_body .city_sort div{ margin-top: 20px;}
.city_body .city_sort h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_sort ul{ padding-left: 10px; margin-top: 10px;}
.city_body .city_sort ul li{ line-height: 30px; }
.city_body .city_index{ float: right; width:17%;display: flex; overflow: auto;flex-direction:column; justify-content:center; text-align: center; border-left:1px #e6e6e6 solid;padding-right: 10px}
</style>

