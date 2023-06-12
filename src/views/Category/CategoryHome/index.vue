<template>
  <Bread>
    <BreadItem :to="`/home`">首页</BreadItem>
    <Transition name="crumbs" mode="out-in">
      <BreadItem :key="categoryData.id">{{ categoryData.name }}</BreadItem>
    </Transition>
  </Bread>
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
        <router-link :to="`/product/${goods.id}`">
          <img :src="goods.picture" alt="">
          <p>{{ goods.desc }}</p>
          <p>{{ goods.name }}</p>
          <p>￥{{ goods.price }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { onBeforeRouteUpdate, useRouter } from 'vue-router'
import { useCategoryStore } from '@/store/category'
import { storeToRefs } from 'pinia'
const router = useRouter()
const categoryStore = useCategoryStore()
const { categoryData } = storeToRefs(categoryStore)
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
// 利用导航守卫，路由更新时触发，点击导航路由变更时，请求对应分类数据，要结合onMounted使用
onBeforeRouteUpdate(to => {
  categoryStore.reqCategoryStoreData(to.params.id as string)
})
onMounted(() => {
  categoryStore.reqCategoryStoreData(router.currentRoute.value.params.id as string)
})
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
</style>