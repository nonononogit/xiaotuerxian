<template>
  <!-- 热门品牌 -->
  <div class="hotBrand">
    <div class="container">
      <h2>
        热门品牌
        <span>国际经典&nbsp;品质保证</span>
      </h2>
      <swiper :modules="modules" :slides-per-view="5" :slides-per-group="5" :space-between="10" navigation>
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper';
const modules = [Navigation]
</script>

<style lang="less" scoped>
// 热门品牌
.hotBrand {
  width: 100%;
  height: 460px;

  h2 {
    padding: 40px 0;
    font-size: 32px;
    font-weight: normal;

    span {
      color: #9b9b9d;
      font-size: 16px;
    }

  }

  .container {
    position: relative;
  }

  :deep(.swiper) {
    position: initial;
    z-index: 0;

    .swiper-wrapper {
      transition: all 1s !important;
    }

    .swiper-slide {
      width: 240px;
      height: 305px;
      background-color: #27bb9a;
    }

    .swiper-button-prev {
      left: 1190px;
    }

    .swiper-button-next {
      left: 1220px;
    }

    .swiper-button-prev,
    .swiper-button-next {
      width: 20px;
      height: 20px;
      background-color: #27ba9b;
      top: 80px;
      z-index: 0;

      &::after {
        font-size: 12px;
        color: white;
      }
    }

    .swiper-button-disabled {
      background-color: #ccc;
      cursor: not-allowed;
      pointer-events: initial;
    }
  }

}
</style>