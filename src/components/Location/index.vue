<template>
  <div class="city_body">
<el-menu default-active="1" class="el-menu-vertical-demo city_index" @open="handleOpen" @close="handleClose" >
  <el-submenu index="1" >
      <i class="el-icon-location" style="margin-left:-50px;"></i>
    <el-menu-item-group >
      <el-menu-item  v-for="(item,index) in cityList" :key="item.index" @click=" handleToIndex(index)" >{{ item.index }}</el-menu-item>
    </el-menu-item-group>
 </el-submenu>
</el-menu>
          <div class="city_list">
                    <div class="city_sort" ref="city_sort">
                        <div v-for="item in cityList" :key="item.index">
                            <h2>{{ item.index }}</h2>
                             <el-row type=flex class="box">
                               <el-col :span="6" v-for="itemList in item.list" :key="itemList.id" class="content" >
                                   <div class="cnames">{{ itemList.nm }}
                                   </div>
                                   </el-col> 
                             </el-row>    
                        </div>	
                    </div>
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
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>
<style scoped>
.city_body{ display: flex; width:80%; position: absolute;padding-left: 15%;}
.city_body .city_list{ float:left;width:25%; max-height: 520px;flex:1; overflow: scroll; background:#f2edeb7a;}
.city_body .city_list::-webkit-scrollbar{  background-color:transparent;width:0;}
.city_body .city_sort div{ margin-top: 10px;}
.cnames{background:#d8d9cc6b;width:7em;text-align: center;}
.city_body .city_sort h2{text-align: center; line-height: 30px; font-size: 14px; background:#e8f6726b; font-weight: normal;}
.box{ padding-left: 10px; margin-top: 10px;flex-wrap:wrap;}
.content{ line-height: 30px;padding-left: 2.5em;}
.city_body .city_index{ background-color:"#545c64"; width:17%;display: flex; overflow: auto;flex-direction:column; justify-content:center; text-align: center; border-left:1px #e6e6e6 solid;}
.el-submenu .el-menu-item { height: 20px; line-height: 20px;padding: 0 5px;min-width: 20px;}
.el-menu-item.is-active {color: #7e6862eb;}
.el-submenu  { background-color:#f7e6a994;}
</style>

