<template>
  <!-- <div class="crumbs">
    <router-link to="/home">首页</router-link>
    <i class="iconfont iconxiangyoujiantou"></i>
    让面包屑导航切换的时候，有过渡效果
    <transition name="crumbs">
      <p v-if="category1Id === categoryData.id">{{ categoryData.name }}</p>
    </transition>
  </div> -->
  <Crumbs></Crumbs>
  <Banner></Banner>
  <div class="all-category">
    <h3>全部分类</h3>
    <ul class="all-category-list">
      <li v-for="category in categoryData.children" :key="category.id" @click="toSub(category.id)">
        <a href="javascript:;">
          <img :src="(category.picture as string)" alt="">
          <p>{{ category.name }}</p>
        </a>
      </li>
    </ul>
  </div>
  <div class="category" v-for="category in categoryData.children" :key="category.id">
    <h3>- {{ category.name }} -</h3>
    <a class="view-more">查看全部 <i class="iconfont iconxiangyoujiantou"></i></a>
    <p class="describe">温暖柔软，品质之选</p>
    <ul class="category-list">
      <li v-for="goods in category.goods" :key="goods.id">
        <a href="javascript:;">
          <img :src="goods.picture" alt="">
          <p>{{ goods.desc }}</p>
          <p>{{ goods.name }}</p>
          <p>￥{{ goods.price }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router'
import { useCategoryStore } from '@/store/category'
import { storeToRefs } from 'pinia'
import { useHeaderStore } from '@/store/header';
// const category1Id = ref('')
const router = useRouter()
const categoryStore = useCategoryStore()
const { categoryData } = storeToRefs(categoryStore)
// const headerStore = useHeaderStore()
// // 方式一：监听路由路径
// watch(() => router.currentRoute.value.path, (newValue, oldValue) => {
//   if (router.currentRoute.value.name !== 'sub') {
//     category1Id.value = router.currentRoute.value.params.id as string
//     // 如果点击的去首页，category1Id为空，则重新请求分类列表的数据
//     if (!category1Id.value) {
//       headerStore.reqHeaderStoreData()
//       return
//     }
//     categoryStore.reqCategoryStoreData(category1Id.value as string)
//   }
// }, { immediate: true })
// 点击全部分类子项路由跳转sub
const toSub = (categoryId: string) => {
  router.push({
    // name:'sub',
    // params:{
    //   id:categoryId
    // }
    path: '/category/sub/' + categoryId
  })
}
</script>

<style lang="less" scoped>
// banner按钮样式
:deep(.el-carousel__button) {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #9b9b9d;
}

:deep(.el-carousel__indicator.is-active button) {
  background-color: #fff;
}

// 全部分类
.all-category {
  margin: 20px 0;
  padding: 0 32px;
  background-color: white;

  .all-category-list {
    display: flex;

    li {
      width: 168px;
      height: 160px;
    }

    a {
      display: block;
      text-align: center;
      font-size: 16px;
      color: black;

      img {
        width: 100px;
        height: 100px;
      }

      p {
        line-height: 40px;
      }
    }

    a:hover {
      color: #27ba9b;
    }
  }
}

// 分类列表
.category {
  position: relative;
  color: #999;
  background-color: white;

  .view-more {
    position: absolute;
    top: 20px;
    right: 20px;
    color: #999;
    font-size: 16px;

    .iconfont {
      font-size: 14px;
    }
  }

  .view-more:hover {
    color: #27ba9b;
  }

  .describe {
    position: relative;
    top: -20px;
    text-align: center;
    font-size: 20px;
  }

  .category-list {
    display: flex;
    padding: 0 65px 30px;

    li {
      a {
        display: block;
        width: 220px;
        height: 300px;
        padding: 20px 30px;
        transition: all .5s ease;

        img {
          width: 160px;
          height: 160px;
        }

        p {
          text-align: center;
          margin-top: 10px;
        }

        p:nth-child(2),
        p:nth-child(3) {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        p:nth-child(2) {
          color: black;
        }

        p:nth-child(3) {
          color: #999;
          font-size: 14px;
        }

        P:nth-child(4) {
          color: #cf4444;
          font-size: 20px;
        }
      }

      a:hover {
        transform: translate(0, -5px);
        box-shadow: 0px 2px 7px #d9d9d9;
      }
    }
  }
}

// 标题统一样式
h3 {
  color: #666666;
  font-size: 28px;
  font-weight: normal;
  text-align: center;
  line-height: 100px;
}

// 面包屑导航
.crumbs {
  display: flex;
  align-items: center;
  margin: 25px 0 25px 10px;
  font-size: 14px;

  a {
    color: #666666;
  }

  .iconfont {
    margin: 0 5px;
    font-size: 12px;
  }
}

// 面包屑导航过渡效果
.crumbs-enter-active,
.crumbs-leave-active {
  transition: all 0.5s ease;
}

.crumbs-enter-from,
.crumbs-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>