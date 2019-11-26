<template>
<div class="swiper-container">
	<div class="swiper-wrapper">
		<div v-for='el in arrItem' class="swiper-slide" :key='el.index'>
			<img class="img" :src="el.imgUrl">
		</div>
	</div>
	<!-- 分页器 -->
	<div class="swiper-pagination"></div>
	<!-- 前后箭头 -->
	 <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
</div>

</template>
<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
    name:"bigschool",
    mounted:function(){
	new Swiper('.swiper-container', {
		//箭头模样
		prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
		// 分页器
		pagination: {
			el: '.swiper-pagination',
		},
		observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true //修改swiper的父元素时，自动初始化swiper
	})
},
props:['arrItem']

}
</script>
<style scoped>
.img{
	width: 98%;
	margin-left: 1%;
}
</style>