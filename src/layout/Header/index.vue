<template>
  <!-- 头部 -->
  <header>
    <!-- 顶部导航 -->
    <nav class="top">
      <div class="container">
        <ul>
          <li v-show="!userInfo.account"><router-link class="first-a" to="/login">请先登录</router-link></li>
          <li v-show="!userInfo.account"><a>免费注册</a></li>
          <li v-show="userInfo.account"><a class="first-a">{{ userInfo.account }}</a></li>
          <li v-show="userInfo.account" @click="logout"><a>退出登录</a></li>
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
        <el-skeleton :loading="mainNavLoading">
          <template #template>
            <ul class="middleNav">
              <li><a href="javascript:;">首页</a></li>
              <li><a href="javascript:;">居家</a></li>
              <li><a href="javascript:;">美食</a></li>
              <li><a href="javascript:;">服饰</a></li>
              <li><a href="javascript:;">母婴</a></li>
              <li><a href="javascript:;">个护</a></li>
              <li><a href="javascript:;">严选</a></li>
              <li><a href="javascript:;">数码</a></li>
              <li><a href="javascript:;">运动</a></li>
              <li><a href="javascript:;">杂项</a></li>
            </ul>
          </template>
          <template #default>
            <ul class="middleNav">
              <li>
                <router-link to="/home">首页</router-link>
              </li>
              <li v-for="nav in headerData" :key="nav.id">
                <router-link :to="`/category/${nav.id}`">{{ nav.name }}</router-link>
                <ul class="dropDownMenu">
                  <li v-for="navChildren in nav.children" :key="navChildren.id">
                    <router-link :to="`/category/sub/${navChildren.id}`">
                      <img :src="navChildren.picture" />
                      <p>{{ navChildren.name }}</p>
                    </router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </template>
        </el-skeleton>
        <div class="rightSearch">
          <div class="searchIpu">
            <i class="iconfont iconsousuo"></i>
            <input type="text" placeholder="搜一搜">
          </div>
          <div class="shopCartIcon">
            <el-popover placement="bottom" :width="400" trigger="hover" popper-class="diy-popper">
              <template #reference>
                <el-badge :value="userStore.totalCount">
                  <router-link to="/cart">
                    <i class="iconfont icongouwuche"></i>
                  </router-link>
                </el-badge>
              </template>
              <div class="diy-popper-table">
                <el-table :data="cartData" :show-header="false" @click="router.push('/cart')">
                  <el-table-column width="80" property="img">
                    <template v-slot="{ row }">
                      <el-image style="width: 80px; height: 80px" :src="row.picture" fit="fill" />
                    </template>
                  </el-table-column>
                  <el-table-column width="193" property="desc">
                    <template v-slot="{ row }">
                      <p>{{ row.name }}</p>
                      <p>{{ row.attrsText }}</p>
                    </template>
                  </el-table-column>
                  <el-table-column width="97" property="price">
                    <template v-slot="{ row }">
                      <p style="color:#cf4444;text-align:center;" class="shopCartIcon-price">¥{{ row.price }}</p>
                      <p style="text-align:center;" class="shopCartIcon-count">x{{ row.count }}</p>
                    </template>
                  </el-table-column>
                  <el-table-column width="28.5">
                    <template v-slot="{ row }">
                      <el-icon @click="deleteCart(row.skuId)">
                        <i-ep-close />
                      </el-icon>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
              <div class="settle-accounts">
                <div class="total-price">
                  <p>共{{ userStore.totalCount }}件商品</p>
                  <p>¥{{ userStore.totalPrice.toFixed(2) }}</p>
                </div>
                <router-link class="btn to-cart-btn" to="/cart">去购物车结算</router-link>
              </div>
            </el-popover>
          </div>
        </div>
      </div>
    </div>
    <!-- 滚动显示的固定导航 -->
    <div class="fixedNav" :class="{ fixedNavActive: isHidden }">
      <div class="container">
        <a href="javascript:;" class="logo"></a>
        <el-skeleton :loading="mainNavLoading" class="fixed-nav-skeleton">
          <template #template>
            <ul class="middleNav">
              <li class="middleNav-item"><a href="javascript:;">首页</a></li>
              <li class="middleNav-item"><a href="javascript:;">居家</a></li>
              <li class="middleNav-item"><a href="javascript:;">美食</a></li>
              <li class="middleNav-item"><a href="javascript:;">服饰</a></li>
              <li class="middleNav-item"><a href="javascript:;">母婴</a></li>
              <li class="middleNav-item"><a href="javascript:;">个护</a></li>
              <li class="middleNav-item"><a href="javascript:;">严选</a></li>
              <li class="middleNav-item"><a href="javascript:;">数码</a></li>
              <li class="middleNav-item"><a href="javascript:;">运动</a></li>
              <li class="middleNav-item"><a href="javascript:;">杂项</a></li>
            </ul>
          </template>
          <template #default>
            <ul class="middleNav">
              <li class="middleNav-item">
                <router-link to="/home">首页</router-link>
              </li>
              <li class="middleNav-item" v-for="nav in headerData" :key="nav.id">
                <router-link :to="`/category/${nav.id}`">{{ nav.name }}</router-link>
                <ul class="dropDownMenu">
                  <li v-for="navChildren in nav.children" :key="navChildren.id">
                    <router-link :to="`/category/sub/${navChildren.id}`">
                      <img :src="navChildren.picture" />
                      <p>{{ navChildren.name }}</p>
                    </router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </template>
        </el-skeleton>
        <div class="rightBrand">
          <a href="javascript:;">品牌</a>
          <a href="javascript:;">专题</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue"
import { useHeaderStore } from '@/store/header'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/userInfo'
import cartApi from '@/api/cart'
const headerStore = useHeaderStore()
const userStore = useUserStore()
// 从store中获取数据
let { headerData } = storeToRefs(headerStore)
const { userInfo, cartData } = storeToRefs(userStore)
const router = useRouter()
// 控制固定导航显隐的参考值
let isHidden = ref(true)
// 控制头部导航加载状态的参考值
let mainNavLoading = ref(true)
// 监听页面滚动高度
const getScollTop = () => {
  let top = document.documentElement.scrollTop
  isHidden.value = top > 80 ? false : true
}
window.addEventListener('scroll', getScollTop)
// 退出登录
const logout = () => {
  userStore.reset()
  router.push('/login')
}
// 删除购物车
const deleteCart = (skuId:string) => {
  cartApi.reqDeleteCart([skuId]).then(() => {
    userStore.getCartData().then(() => {
      ElMessage.success('删除成功！')
    })
  }).catch((error) => {
    ElMessage.error('删除失败，请稍后重试！')
  })
}
onMounted(() => {
  // 请求获取头部数据
  headerStore.reqHeaderStoreData().then(() => {
    // 控制头部导航加载状态
    mainNavLoading.value = false
  })
  // 如果已经登录过，请求购物车的数据
  if (userInfo.value.account) {
    userStore.getCartData().catch(() => {
      userStore.reset()
      router.push('/login')
    })
  }
})
watch(() => router.currentRoute.value.name, (newValue, oldValue) => {
  // 进到首页oldvalue是undefined，就不用发请求
  if (oldValue !== undefined && newValue === 'home') {
    headerStore.reqHeaderStoreData()
  }
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

    :deep(.el-skeleton) {
      display: flex;
      width: 820px;

    }

    .middleNav {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 820px;
      padding: 0 20px;

      li {
        width: 32px;
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

        a {
          display: inline-block;
          color: black;
        }

        .icongouwuche {
          font-size: 24px;
          cursor: pointer;
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

      .middleNav-item {
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

          &>li {
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

      .middleNav-item:hover {
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

    .fixed-nav-skeleton {
      display: flex;
      width: 820px;
    }
  }
}

.fixedNavActive {
  transform: translateY(-100%);
  opacity: 0;
}
</style>