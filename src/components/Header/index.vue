<template>
  <!-- 头部 -->
  <header>
    <!-- 顶部导航 -->
    <nav class="top">
      <div class="container">
        <ul>
          <li><a class="first-a">请先登录</a></li>
          <li><a>免费注册</a></li>
          <li><a>我的订单</a></li>
          <li><a>会员中心</a></li>
          <li><a>帮助中心</a></li>
          <li><a>关于我们</a></li>
          <li><a><i class="iconfont iconshouji"></i> 手机版</a></li>
        </ul>
      </div>
    </nav>
    <!-- 头部分类导航 -->
    <div class="classify">
      <div class="container">
        <div class="leftLogo">
          <a href="javascript:;" class="logo"></a>
        </div>
        <ul class="middleNav">
          <li><a href="javascript:;">首页</a></li>
          <li v-for="nav in headerData" :key="nav.id">
            <a href="javascript:;">{{nav.name}}</a>
            <ul class="dropDownMenu">
              <li v-for="navChildren in nav.children" :key="navChildren.id">
                <a href="javascript:;"><img :src="navChildren.picture" />
                  <p>{{navChildren.name}}</p>
                </a>
              </li>
              <!-- <li>
                <a href="javascript:;"><img src="./images/product1.png" />
                  <p>茶咖酒具</p>
                </a>
              </li>
              <li>
                <a href="javascript:;"><img src="./images/product1.png" />
                  <p>茶咖酒具</p>
                </a>
              </li>
              <li>
                <a href="javascript:;"><img src="./images/product1.png" />
                  <p>茶咖酒具</p>
                </a>
              </li> -->
            </ul>
          </li>
          <!-- <li><a href="javascript:;">美食
              <ul class="dropDownMenu">
                <li>
                  <a href="javascript:;"><img src="./images/product1.png" />
                    <p>茶咖酒具</p>
                  </a>
                </li>
                <li>
                  <a href="javascript:;"><img src="./images/product1.png" />
                    <p>茶咖酒具</p>
                  </a>
                </li>
                <li>
                  <a href="javascript:;"><img src="./images/product1.png" />
                    <p>茶咖酒具</p>
                  </a>
                </li>
                <li>
                  <a href="javascript:;"><img src="./images/product1.png" />
                    <p>茶咖酒具</p>
                  </a>
                </li>
              </ul>
            </a></li>
          <li><a href="javascript:;">服饰</a></li>
          <li><a href="javascript:;">母婴</a></li>
          <li><a href="javascript:;">个护</a></li>
          <li><a href="javascript:;">严选</a></li>
          <li><a href="javascript:;">数码</a></li>
          <li><a href="javascript:;">运动</a></li>
          <li><a href="javascript:;">杂项</a></li> -->
        </ul>
        <div class="rightSearch">
          <div class="searchIpu">
            <i class="iconfont iconsousuo"></i>
            <input type="text" placeholder="搜一搜">
          </div>
          <div class="shopCartIcon">
            <i class="iconfont icongouwuche"></i>
          </div>
        </div>
      </div>
    </div>
    <!-- 滚动显示的固定导航 -->
    <div class="fixedNav" :class="{fixedNavActive:isHidden}">
      <div class="container">
        <a href="javascript:;" class="logo"></a>
        <ul>
          <li><a href="javascript:;">首页</a></li>
          <li>
            <a href="javascript:;">居家</a>
            <ul class="dropDownMenu">
              <li>
                <a href="javascript:;"><img src="" />
                  <p>茶咖酒具</p>
                </a>
              </li>
              <li>
                <a href="javascript:;"><img src="" />
                  <p>茶咖酒具</p>
                </a>
              </li>
              <li>
                <a href="javascript:;"><img src="" />
                  <p>茶咖酒具</p>
                </a>
              </li>
              <li>
                <a href="javascript:;"><img src="" />
                  <p>茶咖酒具</p>
                </a>
              </li>
            </ul>
          </li>
          <li><a href="javascript:;">美食</a></li>
          <li><a href="javascript:;">服饰</a></li>
          <li><a href="javascript:;">母婴</a></li>
          <li><a href="javascript:;">个护</a></li>
          <li><a href="javascript:;">严选</a></li>
          <li><a href="javascript:;">数码</a></li>
          <li><a href="javascript:;">运动</a></li>
          <li><a href="javascript:;">杂项</a></li>
        </ul>
        <div class="rightBrand">
          <a href="javascript:;">品牌</a>
          <a href="javascript:;">专题</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue"
import { useHeaderStore } from '@/store/home'
import { storeToRefs } from 'pinia'
// 控制固定导航显隐的参考值
let isHidden = ref(true)
// 监听页面滚动高度
const getScollTop = () => {
  let top = document.documentElement.scrollTop
  isHidden.value = top > 80 ? false : true
}
window.addEventListener('scroll', getScollTop)

const headerStore = useHeaderStore()
// 从store中获取headerData
let { headerData } = storeToRefs(headerStore)
onMounted(() => {
  // 请求获取头部数据
  headerStore.reqHeaderStoreData()
})
</script>

<style lang="less" scoped>
// 顶部导航
.top {
  height: 50px;
  background-color: #333333;

  ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 50px;

    li {
      text-align: center;

      .first-a {
        border: none;
      }

      a {
        display: inline-block;
        padding: 0 15px;
        height: 14px;
        line-height: 14px;
        border-left: 2px solid #666666;
        font-size: 14px;
      }

    }
  }
}

// 头部分类导航
.classify {
  height: 132px;
  background-color: #fff;

  .container {
    display: flex;

    .leftLogo {
      width: 200px;

      .logo {
        display: block;
        background: url(@/assets/images/logo.png) no-repeat center 18px/contain;
        width: 100%;
        height: 132px;
      }
    }

    .middleNav {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 820px;
      padding: 0 20px;

      &>li {
        height: 32px;
        line-height: 32px;

        a {
          color: #33336e;
        }

        a:hover {
          color: #27bb9a;
        }

        .dropDownMenu {
          display: flex;
          position: absolute;
          overflow: hidden;
          left: 63px;
          top: 160px;
          padding: 0 50px;
          background-color: #fff;
          box-shadow: 0 0 5px #ccc;
          width: 1240px;
          height: 0;
          transition: height .2s .1s;
          z-index: 1;

          li {
            padding-top: 20px;
            width: 110px;
            text-align: center;

            p {
              font-size: 14px;
            }
          }

          img {
            width: 60px;
            height: 60px;
          }
        }
      }

      &>li:hover {
        border-bottom: 1px solid #27bb9a;

        .dropDownMenu {
          height: 132px;
        }
      }
    }

    .rightSearch {
      display: flex;
      align-items: center;

      .searchIpu {
        width: 170px;
        height: 32px;
        line-height: 32px;
        border-bottom: 1px solid #e7e7e7;

        .iconsousuo {
          font-size: 18px;
        }

        input {
          width: 140px;
          padding-left: 5px;
          border: none;
          outline: none;
          color: #666666;
        }

        input::placeholder {
          color: #cccccc;
        }
      }

      .shopCartIcon {
        width: 32px;
        text-align: center;

        .icongouwuche {
          font-size: 24px;
        }
      }
    }
  }
}

// 滚动显示的固定导航
.fixedNav {
  z-index: 10;
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  transform: none;
  opacity: 1;
  transition: all .3s linear;

  .container {
    display: flex;
    align-items: center;

    .logo {
      display: block;
      background: url(@/assets/images/logo.png) no-repeat right 2px;
      background-size: 160px auto;
      width: 200px;
      height: 80px;
    }

    ul {
      display: flex;
      width: 820px;
      padding-left: 40px;

      li {
        width: 38px;
        height: 32px;
        margin-right: 40px;
        line-height: 32px;
        text-align: center;

        .dropDownMenu {
          display: flex;
          position: absolute;
          overflow: hidden;
          left: 63px;
          top: 80px;
          padding: 0 50px;
          background-color: #fff;
          box-shadow: 0 0 5px #ccc;
          width: 1240px;
          height: 0;
          transition: height .2s .1s;
          z-index: 1;

          li {
            padding-top: 20px;
            width: 110px;
            text-align: center;

            p {
              font-size: 14px;
            }
          }

          img {
            width: 60px;
            height: 60px;
          }
        }
      }

      li:hover {
        border-bottom: 1px solid #27bb9a;

        .dropDownMenu {
          height: 132px;
        }
      }
    }

    .rightBrand {
      display: flex;
      padding-left: 40px;
      border-left: 2px solid #27bb9a;

      a {
        line-height: 1;
        font-size: 16px;
        margin-right: 40px;
      }
    }

    a {
      color: #333333;
    }

    a:hover {
      color: #27bb9a;
    }
  }
}

.fixedNavActive {
  transform: translateY(-100%);
  opacity: 0;
}
</style>