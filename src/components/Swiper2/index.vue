<template>
<div>
    <!-- Swiper -->
<div class="swiper-container" id="gallery">
    <div class="swiper-wrapper">
         <div v-for='el in arrItem1' class="swiper-slide" :key='el.index'>
		<img  :src="el.imgUrl">
		</div>
    </div>
    <div class="swiper-button-prev swiper-button-white"></div>
    <div class="swiper-button-next swiper-button-white"></div>
</div>
<div class="swiper-container swiper-container-thumbs" id="thumbs">
	<div class="swiper-wrapper" style="transition-duration: 0ms;">
     <div v-for='el in arrItem2' class="swiper-slide" :key='el.index'>
           <img :src="el.imgUrl"> 
            </div>  
    </div>
  </div>
</div>
</template>
<script>
import Swiper from 'swiper';
export default {
    name:"smallschool",
mounted() {
var thumbsSwiper = new Swiper('#thumbs', {
	spaceBetween: 10,
	slidesPerView: 5,
	watchSlidesVisibility: true, //防止不可点击
})
var gallerySwiper = new Swiper('#gallery', {
	effect : 'coverflow',
	spaceBetween: 10, //缩略图间距
	slidesPerView: 3,
	centeredSlides: true,
	initialSlide :2,
	loop: true,
	autoplay: true,
	thumbs: {
        swiper: thumbsSwiper,
	}, navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
})
},

props:['arrItem1','arrItem2']
}
</script>
<style scoped>
img{
	width: 100%;
     display: block;
}

#gallery {
	width: 1200px;
}

#thumbs {
	width: 1000px;
	margin-top: 50px;
}


</style>