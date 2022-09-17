<template>
  <!-- 主图和分类列表导航 -->
  <div class="mainBanner container">
    <!-- 主轮播图-->
    <div class="banner">
      <el-carousel height="500px" trigger="click">
        <el-carousel-item v-for="item in bannerList" :key="item.id">
          <img :src="item.url" class="bannerImg">
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 左侧导航列表 -->
    <div class="LeftNavList">
      <ul class="leftNavContainer">
        <li class="leftNavItem">
          <a>居家</a><a>茶咖酒具</a><a>水具杯壶</a>
          <!-- 隐藏分类推荐 -->
          <div class="hideNavContainer">
            <h3>分类推荐 <span>根据您的购买或浏览记录推荐</span></h3>
            <ul class="hideNavList">
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li class="leftNavItem">
          <a>居家</a><a>茶咖酒具</a><a>水具杯壶</a>
          <!-- 隐藏分类推荐 -->
          <div class="hideNavContainer">
            <h3>分类推荐 <span>根据您的购买或浏览记录推荐</span></h3>
            <ul class="hideNavList">
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li class="leftNavItem">
          <a>居家</a><a>茶咖酒具</a><a>水具杯壶</a>
          <!-- 隐藏分类推荐 -->
          <div class="hideNavContainer">
            <h3>分类推荐 <span>根据您的购买或浏览记录推荐</span></h3>
            <ul class="hideNavList">
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li class="leftNavItem">
          <a>居家</a><a>茶咖酒具</a><a>水具杯壶</a>
          <!-- 隐藏分类推荐 -->
          <div class="hideNavContainer">
            <h3>分类推荐 <span>根据您的购买或浏览记录推荐</span></h3>
            <ul class="hideNavList">
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li class="leftNavItem">
          <a>居家</a><a>茶咖酒具</a><a>水具杯壶</a>
          <!-- 隐藏分类推荐 -->
          <div class="hideNavContainer">
            <h3>分类推荐 <span>根据您的购买或浏览记录推荐</span></h3>
            <ul class="hideNavList">
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li class="leftNavItem">
          <a>居家</a><a>茶咖酒具</a><a>水具杯壶</a>
          <!-- 隐藏分类推荐 -->
          <div class="hideNavContainer">
            <h3>分类推荐 <span>根据您的购买或浏览记录推荐</span></h3>
            <ul class="hideNavList">
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li class="leftNavItem">
          <a>居家</a><a>茶咖酒具</a><a>水具杯壶</a>
          <!-- 隐藏分类推荐 -->
          <div class="hideNavContainer">
            <h3>分类推荐 <span>根据您的购买或浏览记录推荐</span></h3>
            <ul class="hideNavList">
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li class="leftNavItem">
          <a>居家</a><a>茶咖酒具</a><a>水具杯壶</a>
          <!-- 隐藏分类推荐 -->
          <div class="hideNavContainer">
            <h3>分类推荐 <span>根据您的购买或浏览记录推荐</span></h3>
            <ul class="hideNavList">
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li class="leftNavItem">
          <a>居家</a><a>茶咖酒具</a><a>水具杯壶</a>
          <!-- 隐藏分类推荐 -->
          <div class="hideNavContainer">
            <h3>分类推荐 <span>根据您的购买或浏览记录推荐</span></h3>
            <ul class="hideNavList">
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li class="leftNavItem">
          <a>居家</a><a>茶咖酒具</a><a>水具杯壶</a>
          <!-- 隐藏分类推荐 -->
          <div class="hideNavContainer">
            <h3>分类推荐 <span>根据您的购买或浏览记录推荐</span></h3>
            <ul class="hideNavList">
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <img src="" alt="">
                  <div>
                    <p>圆润大肚流线型耐热玻璃凉水壶</p>
                    <p>1.25L容量，耐冷耐热，通用型通用型通用型通用型</p>
                    <p><span>￥</span>79.00</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
const bannerList = reactive([
  { url: '/src/assets/images/JL1.webp', id: 1 },
  { url: '/src/assets/images/JL2.webp', id: 2 },
  { url: '/src/assets/images/new_batman1.webp', id: 3 },
  { url: '/src/assets/images/new_batman2.webp', id: 4 },
])
</script>

<style lang="less" scoped>
// 主图和分类列表导航
.mainBanner {
  position: relative;
  height: 500px;

  // banner图
  .banner {
    :deep(.el-carousel__arrow--left) {
      left: 260px;
    }

    :deep(.el-carousel__arrow) {
      width: 40px;
      height: 40px;
      font-size: 20px;
    }

    :deep(.el-carousel__button) {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: #9b9b9d;
    }

    :deep(.el-carousel__indicator.is-active button) {
      background-color: #fff;
    }

    :deep(.el-carousel__indicators) {
      left: 50%;
      margin-left: 125px;
    }

    .bannerImg {
      width: 1240px;
      height: 500px;
    }
  }

  // 左侧分类列表导航
  .LeftNavList {
    position: absolute;
    top: 0;
    background: rgba(49, 46, 46, .5);

    .leftNavContainer {
      width: 250px;
      height: 500px;

      .leftNavItem {
        height: 50px;
        line-height: 50px;
        padding-left: 40px;

        &>a {
          margin-right: 5px;
          color: #fff;
          font-size: 14px;
        }

        &>a:first-child {
          font-size: 16px;
        }

        // 隐藏的分类推荐
        .hideNavContainer {
          display: none;
          position: absolute;
          top: 0;
          left: 250px;
          padding: 0 15px;
          width: 990px;
          height: 500px;
          background: rgba(255, 255, 255, .8);

          h3 {
            margin: 10px 0;
            font-size: 20px;
            font-weight: normal;

            span {
              font-size: 16px;
              color: #666666;
            }
          }

          .hideNavList {
            display: flex;
            flex-wrap: wrap;
            height: 405px;
            width: 960px;

            li {
              overflow: hidden;
              width: 310px;
              height: 120px;
              margin: 0 15px 15px 0;
              border-radius: 4px;
              background-color: #fff;

              a {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 10px;
                color: #9b9b9d;

                img {
                  width: 95px;
                  height: 95px;
                }

                div {
                  width: 190px;
                  height: 95px;
                  line-height: 24px;

                  p:nth-child(1) {
                    color: #666666;
                  }

                  p:nth-child(2) {
                    font-size: 14px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                  }

                  p:nth-child(3) {
                    font-size: 22px;
                    color: #cf4444;

                    span {
                      font-size: 16px;
                    }
                  }
                }
              }
            }

            li:hover {
              background-color: #e3f9f4;
            }

            li:nth-child(3n) {
              margin: 0 0 15px 0;
            }
          }
        }
      }

      .leftNavItem:hover {
        background-color: #27bb9a;

        .hideNavContainer {
          display: block;
        }
      }
    }
  }

}
</style>