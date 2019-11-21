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
		autoplay: 500,//可选选项，自动滑动
	})
},
data(){
	return {
			arrItem:[
					{
							name:'swiperSlide1',
							imgUrl:'/images/banner_1.jpg'
					},
					{
							name:'swiperSlide2',
							imgUrl:'/images/banner_2.jpg'
					},
					{
							name:'swiperSlide3',
							imgUrl:'/images/banner_3.jpg'
					},
					{
							name:'swiperSlide4',
							imgUrl:'/images/banner_4.jpg'
					},
					{
							name:'swiperSlide5',
							imgUrl:'/images/banner_5.jpg'
					},
					{
							name:'swiperSlide6',
							imgUrl:'/images/banner_6.jpg'
					}
			]
	}
}

}
</script>
<style scoped>
.img{
	width: 98%;
	margin-left: 1%;
}
</style>