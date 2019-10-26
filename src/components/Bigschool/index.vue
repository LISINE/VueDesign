<template>
 <div class="container">
             <!--自己定义的收容轮播的区域-->
              <div id="myShuffArea">
                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                     <!--轮播指标-->
                      <ol class="carousel-indicators">
                          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                          <li data-target="#myCarousel" data-slide-to="1" ></li>
                         <li data-target="#myCarousel" data-slide-to="2" ></li>
                         <li data-target="#myCarousel" data-slide-to="3" ></li>
                         <li data-target="#myCarousel" data-slide-to="4" ></li>
                         <li data-target="#myCarousel" data-slide-to="5" ></li>
                     </ol>
                     <!--轮播项目-->
                     <div class="carousel-inner">
                         <div class="item active">
                             <img src="/images/banner_1.jpg" alt="图1"/>
                         </div>
                         <div class="item">
                             <img src="/images/banner_2.jpg" alt="图2"/>
                         </div>
                         <div class="item">
                             <img src="/images/banner_3.jpg" alt="图2"/>
                         </div>
                    
                        <div class="item">
                             <img src="/images/banner_4.jpg" alt="图2"/>
                         </div>
                            <div class="item">
                             <img src="/images/banner_5.jpg" alt="图2"/>
                         </div>
                            <div class="item">
                             <img src="/images/banner_6.jpg" alt="图2"/>
                         </div>
                          </div>
                     <!-- 轮播（Carousel）导航 -->
                     <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                         <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                         <span class="sr-only">Previous</span>
                    </a>
                     <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                         <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                         <span class="sr-only">Next</span>
                     </a>
                 </div>
             </div>
         </div>
</template>
<script>
//自动播放
		$("#myCarousel").carousel({
			interval :1000,
		});

export default {
    name:"bigschool"
}
</script>
<style>

</style>