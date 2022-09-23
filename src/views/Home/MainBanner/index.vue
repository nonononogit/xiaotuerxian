<template>
  <!-- 主图和分类列表导航 -->
  <div class="mainBanner container">
    <!-- 主轮播图-->
    <div class="banner">
      <el-carousel height="500px" trigger="click">
        <el-carousel-item v-for="banner in bannerData" :key="banner.id">
          <img :src="banner.imgUrl" class="bannerImg">
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 左侧导航列表 -->
    <div class="LeftNavList">
      <ul class="leftNavContainer">
        <li class="leftNavItem" v-for="leftNav in headerData" :key="leftNav.id">
          <a>{{leftNav.name}}</a>
          <a>{{leftNav.children![0].name}}</a>
          <a>{{leftNav.children![1]?.name}}</a>
          <!-- 隐藏分类推荐 -->
          <div class="hideNavContainer">
            <h3>分类推荐 <span>根据您的购买或浏览记录推荐</span></h3>
            <ul class="hideNavList">
              <li v-for="goods in leftNav.goods" :key="goods.id">
                <a href="javascript:;">
                  <img :src="goods.picture" alt="">
                  <div>
                    <p>{{goods.name}}</p>
                    <p>{{goods.desc}}</p>
                    <p><span>￥</span>{{goods.price}}</p>
                  </div>
                </a>
              </li>
              <!-- <li>
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
              </li> -->
            </ul>
          </div>
        </li>
        <li class="leftNavItem">
          <a>品牌</a><a>品牌推荐</a>
          <div class="hideNavContainer">
            <h3>品牌推荐 <span>根据您的购买或浏览记录推荐</span></h3>
            <ul class="hideNavList brand">
              <li v-for="brand in brandData" :key="brand.id">
                <a href="javascript:;">
                  <img :src="brand.logo!" alt="">
                  <div class="describe">
                    <p class="brand-p">{{brand.desc}}</p>
                    <p class="brand-p2">{{brand.name}}</p>
                    <p class="brand-p">{{brand.place}}</p>
                  </div>
                </a>
              </li>
              <!-- <li>
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
              </li> -->
              <!-- <li>
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
              </li> -->
            </ul>
          </div>
        </li>
        <!--
        <li class="leftNavItem">
          <a>居家</a><a>茶咖酒具</a><a>水具杯壶</a>
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
        -->
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref ,onMounted} from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useHeaderStore } from '@/store/home'
import { storeToRefs } from 'pinia'

const bannerList = reactive([
  { url: '/src/assets/images/JL1.webp', id: 1 },
  { url: '/src/assets/images/JL2.webp', id: 2 },
  { url: '/src/assets/images/new_batman1.webp', id: 3 },
  { url: '/src/assets/images/new_batman2.webp', id: 4 },
])
const headerStore = useHeaderStore()
// 从store中获取头部数据和品牌数据
let { headerData,brandData,bannerData } = storeToRefs(headerStore)
onMounted(() => {
  // 请求获取头部数据
  headerStore.reqBrandStoreData()
  // 请求获取banner数据
  headerStore.reqBannerStoreData()
})
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
          .brand {
            
            li {
              width: 310px;
              height: 180px;

              a {
                width: 318px;
                height: 178px;

                img {
                  width: 120px;
                  height: 158px;
                }

                .describe {
                  margin-top: -60px;
                  width: 168px;
                  line-height: 30px;
                  .brand-p {
                    color: #9b9b9d;
                    font-size: 14px;
                  }
                  .brand-p2 {
                    color: #666666;
                    font-size: 16px;
                  }
                }
              }

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