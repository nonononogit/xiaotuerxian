<template>
  <div class="sub-goods">
    <div class="sub-goods-filter">
      <ul class="sub-goods-left">
        <li @click="changeSort(null)" :class="{ active: reqTemporaryParams.sortField === null }">
          默认排序</li>
        <li @click="changeSort('publishTime')" :class="{ active: reqTemporaryParams.sortField === 'publishTime' }">最新商品
        </li>
        <li @click="changeSort('orderNum')" :class="{ active: reqTemporaryParams.sortField === 'orderNum' }">最高人气</li>
        <li @click="changeSort('evaluateNum')" :class="{ active: reqTemporaryParams.sortField === 'evaluateNum' }">
          评论最多</li>
        <li @click="changeSort('price')">价格排序
          <i class="iconfont iconshangjiantou" :class="{ iActive: reqTemporaryParams.sortMethod === 'asc' }"></i>
          <i class="iconfont iconxiajiantou" :class="{ iActive: reqTemporaryParams.sortMethod === 'desc' }"></i>
        </li>
      </ul>
      <div class="sub-goods-right">
        <div class="cursor" :class="{ checkActive: reqTemporaryParams.inventory }" @click="changeChecked('inventory')">
          <i class="iconfont iconweixuanze" v-if="!reqTemporaryParams.inventory"></i>
          <i class="iconfont iconyixuanze" v-else></i>
          <span>仅显示有货商品</span>
        </div>
        <div class="cursor" :class="{ checkActive: reqTemporaryParams.onlyDiscount }"
          @click="changeChecked('onlyDiscount')">
          <i class="iconfont iconweixuanze" v-if="!reqTemporaryParams.onlyDiscount"></i>
          <i class="iconfont iconyixuanze" v-else></i>
          <span>仅显示特惠商品</span>
        </div>
      </div>
    </div>
    <ul class="category-list" v-infinite-scroll="temporaryLoad" :infinite-scroll-disabled="stopRequestTemporary"
      :infinite-scroll-delay="1000">
      <li v-for="goods in temporaryData.items" :key="goods.id" ref="target" v-loading="loading">
        <a href="javascript:;">
          <img :src="goods.picture" alt="">
          <p>{{ goods.name }}</p>
          <p>{{ goods.desc }}</p>
          <p>￥{{ goods.price }}</p>
        </a>
      </li>
    </ul>
    <div class="none" v-if="stopRequestTemporary">
      <span class="img"></span>
      <span class="text">亲, 没有更多了</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router'
import { useCategoryStore } from '@/store/category'
import { storeToRefs } from 'pinia'
import { ReqTemporaryParams } from '@/api/category'
const route = useRoute()
const category2Id = ref('')
const categoryStore = useCategoryStore()
let loading = ref(false)
const { temporaryData } = storeToRefs(categoryStore)
// 方式二：从其他页面跳转到分类页时先发一次请求
onMounted(() => {
  category2Id.value = route.params.id as string
  categoryStore.reqTemporaryStoreData(reqTemporaryParams)
})
// 当下滑到商品展示区域请求商品数据
let page = ref(1)
// 控制滚动到底之后停止发请求的
let stopRequestTemporary = ref(false)
// 请求参数类型
let reqTemporaryParams: ReqTemporaryParams = reactive({
  categoryId: category2Id,
  inventory: false,
  onlyDiscount: false,
  page,
  pageSize: 20,
  sortField: null,
  sortMethod: null,
})
// 滚动加载的方法
const temporaryLoad = async () => {
  ++page.value
  loading.value = true
  const state = await categoryStore.reqTemporaryStoreData(reqTemporaryParams)
  if(state === 'done'){
    stopRequestTemporary.value = true
    loading.value = false
  }else{
    loading.value = false
  }
}
// 当改变筛选规则之后，需要初始化的数据
const initParams = () => {
  page.value = 1
  stopRequestTemporary.value = false
  categoryStore.reqTemporaryStoreData(reqTemporaryParams)
}
// 选择商品显示规则
const changeSort = (action: string | null) => {
  reqTemporaryParams.sortField = action
  if (action === 'price') {
    reqTemporaryParams.sortMethod = reqTemporaryParams.sortMethod === "desc" ? "asc" : "desc"
  } else {
    reqTemporaryParams.sortMethod = null
  }
  initParams()
}
// 勾选框筛选商品
const changeChecked = (action: string) => {
  if (action === 'inventory') {
    reqTemporaryParams.inventory = !reqTemporaryParams.inventory
  } else {
    reqTemporaryParams.onlyDiscount = !reqTemporaryParams.onlyDiscount
  }
  initParams()
}
</script>

<style lang="less" scoped>
// goods列表
.sub-goods {
  background-color: white;
  margin-top: 25px;
  padding: 25px;

  .sub-goods-filter {
    display: flex;
    align-items: center;

    .sub-goods-left {
      flex: 1;
      display: flex;

      li {
        position: relative;
        height: 30px;
        margin-right: 20px;
        padding: 0 20px;
        line-height: 28px;
        border: 1px solid #E4E4E4;
        border-radius: 2px;
        font-size: 14px;
        color: #999;
        transition: all 0.3;
      }

      li:hover {
        cursor: pointer;
      }

      .active {
        background-color: #27ba9b;
        color: white;
      }

      i {
        font-size: 11px;
        position: absolute;
        right: 5px;
      }

      .iconshangjiantou {
        bottom: 2px;
      }

      .iconxiajiantou {
        top: 5px;
      }

      .iActive {
        color: #27ba9b;
      }
    }

    .sub-goods-right {
      display: flex;
      color: #999;
      font-size: 14px;

      div {
        margin-left: 20px;

        i {
          position: relative;
          top: 1.5px;
          margin-right: 2px;
        }

        .iconyixuanze {
          color: #27ba9b;
        }
      }

      div:hover {
        cursor: pointer;
      }

      .checkActive {
        color: #27ba9b;
      }
    }
  }

  .category-list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;

    li {
      margin-right: 20px;
      margin-bottom: 20px;

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

    li:nth-child(5n) {
      margin-right: 0;
    }
  }

  .none {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;

    .img {
      width: 200px;
      height: 134px;
      background: url(@/assets/images/sub-none.png) no-repeat 50%/contain;
    }

    .text {
      color: #999;
    }
  }
}
</style>