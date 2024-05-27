<template>
    <div class="bg-[#7A4686] py-16">
      <div class="container mx-auto">
        <div>
          <h2 class="pt-4 pb-16 text-4xl text-center text-white uppercase">Characters</h2>
        </div>
        <swiper :slides-per-view="3" :space-between="30" pagination navigation>
          <swiper-slide>
            <div class="bg-black w-[20rem] h-[20rem]"></div>
          </swiper-slide>
          <swiper-slide>
            <div class="bg-secondary w-[20rem] h-[20rem]"></div>
          </swiper-slide>
          <swiper-slide>
            <div class="bg-primary w-[20rem] h-[20rem]"></div>
          </swiper-slide>
          <swiper-slide>
            <div class="bg-primary w-[20rem] h-[20rem]"></div>
          </swiper-slide>
          <swiper-slide>
            <div class="bg-secondary w-[20rem] h-[20rem]"></div>
          </swiper-slide>
          <swiper-slide>
            <div class="bg-white w-[20rem] h-[20rem]"></div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </template>
  
  <script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  
  import 'swiper/css';
  
  
  export default {
    name: 'CarouselComponent',
    components: {
      Swiper,
      SwiperSlide
    }
  };
  </script>
  
  <style scoped>
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  