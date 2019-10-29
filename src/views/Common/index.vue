<template>
 <div>
     <nav class="navbar navbar-default" role="navigation">
     <Header title="common vue"/>
     <Tabbar/>
     </nav>
        <div id="content"> 
            <nav class="navbar navbar-default" role="navigation">
                <div class="container-fluid"> 
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">柳州学校</a>
                </div>
                <form class="navbar-form navbar-left" role="search">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Search">
                    </div>
                    <button type="submit" class="btn btn-default">搜索</button>
                </form>
                </div>
            </nav>
           </div>
        <!-- 标签页  https://www.runoob.com/try/try.php?filename=bootstrap3-plugin-tab-->
                <ul id="myTab" class="nav nav-tabs">
                    <li class="active">
                        <a href="#home" data-toggle="tab">
                            你所在的城市
                        </a>
                    </li>
                    <li><a href="#citynow" data-toggle="tab">柳州学校</a></li>
                    <li class="dropdown">
                        <a href="#" id="myTabDrop1" class="dropdown-toggle" 
                        data-toggle="dropdown">排行
                            <b class="caret"></b>
                        </a>
                        <ul class="dropdown-menu" role="menu" aria-labelledby="myTabDrop1">
                            <li><a href="#university" tabindex="-1" data-toggle="tab">校友榜</a></li>
                            <li><a href="#ranks" tabindex="-1" data-toggle="tab">住宿条件</a></li>
                        </ul>
                    </li>
                </ul>
                <div id="myTabContent" class="tab-content">
                    <div class="tab-pane fade in active" id="home">
                        <Location/>
                    </div>
                    <div class="tab-pane fade" id="citynow">
                       <Bigschool/>
                    </div>
                    <div class="tab-pane fade" id="university">
                        <p>university 是一款开源的测试软件。它是 100% 纯 Java 应用程序，用于负载和性能测试。</p>
                    </div>
                    <div class="tab-pane fade" id="ranks">
                        <p>Enterprise Java Beans（ranks）是一个创建高度可扩展性和强大企业级应用程序的开发架构，部署在兼容应用程序服务器（比如 JBOSS、Web Logic 等）的 J2EE 上。
                        </p>
                    </div>
                </div>
                <h4>学校简览</h4>
          <keep-alive>
            <router-view/>
         </keep-alive>
   </div>
</template>
<script >
import Header from '@/components/Header';
import Tabbar from '@/components/TabBar';
import Location from '@/components/Location';
import Bigschool from '@/components/Bigschool';

export default{
name:'common',
components:{
    Header,
    Tabbar,
    Location,
    Bigschool
}
}
</script>
<style>
#myTab{padding-left: 20%}
</style>