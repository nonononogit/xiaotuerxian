<template>
  <div class="kind-container">
    <div class="title">
      <i class="icon"></i>
      <span>同类商品推荐</span>
    </div>
    <div class="content">
      <ul class="product-list" :class="{ fade: kindListIndex === 1 }">
        <li class="product-centent" v-for="item in kindItem1Data" :key="item.id">
          <img :src="item.picture" alt="">
          <p class="ellipsis">{{ item.name }}</p>
          <p>{{ item.price }}</p>
        </li>
      </ul>
      <ul class="product-list" :class="{ fade: kindListIndex === 2 }">
        <li class="product-centent" v-for="item in kindItem2Data" :key="item.id">
          <img :src="item.picture" alt="">
          <p class="ellipsis">{{ item.name }}</p>
          <p>{{ item.price }}</p>
        </li>
      </ul>
      <ul class="product-list" :class="{ fade: kindListIndex === 3 }">
        <li class="product-centent" v-for="item in kindItem3Data" :key="item.id">
          <img :src="item.picture" alt="">
          <p class="ellipsis">{{ item.name }}</p>
          <p>{{ item.price }}</p>
        </li>
      </ul>
      <ul class="product-list" :class="{ fade: kindListIndex === 4 }">
        <li class="product-centent" v-for="item in kindItem4Data" :key="item.id">
          <img :src="item.picture" alt="">
          <p class="ellipsis">{{ item.name }}</p>
          <p>{{ item.price }}</p>
        </li>
      </ul>

      <div class="prev">
        <i class="iconfont iconxiangzuojiantou" @click="changeShowKindList('prev')"></i>
      </div>
      <div class="next">
        <i class="iconfont iconxiangyoujiantou" @click="changeShowKindList('next')"></i>
      </div>
      <ul class="indicator">
        <li :class="{ active: kindListIndex === 1 }" @click="changeShowKindList(1)"></li>
        <li :class="{ active: kindListIndex === 2 }" @click="changeShowKindList(2)"></li>
        <li :class="{ active: kindListIndex === 3 }" @click="changeShowKindList(3)"></li>
        <li :class="{ active: kindListIndex === 4 }" @click="changeShowKindList(4)"></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useProductStore } from '@/store/product'
import { storeToRefs } from 'pinia'
const props = defineProps(['goodsId'])
const productStore = useProductStore()
const kindListIndex = ref(1)
const { kindItem1Data, kindItem2Data, kindItem3Data, kindItem4Data } = storeToRefs(productStore)
// 点击展示对应的列表
const changeShowKindList = (...rest: any[]) => {
  if (typeof rest[0] === 'number') {
    kindListIndex.value = rest[0]
  } else if (rest[0] === 'prev') {
    kindListIndex.value = kindListIndex.value === 1 ? 4 : --kindListIndex.value
  } else {
    kindListIndex.value = kindListIndex.value === 4 ? 1 : ++kindListIndex.value
  }
}
onMounted(() => {
  // 获取goodId请求数据
  productStore.getKindListData(props.goodsId)
})
</script>

<style lang="less" scoped>
.kind-container {
  margin-top: 20px;
  height: 460px;
  background-color: white;

  .title {
    padding-left: 20px;
    height: 80px;
    line-height: 80px;

    .icon {
      width: 16px;
      height: 16px;
      display: inline-block;
      border-top: 4px solid #27ba9b;
      border-right: 4px solid #27ba9b;
      box-sizing: border-box;
      position: relative;
      transform: rotate(45deg);
    }

    .icon::before {
      content: "";
      width: 10px;
      height: 10px;
      position: absolute;
      left: 0;
      top: 2px;
      background: #bcf1e6;
    }

    span {
      font-size: 20px;
      padding-left: 10px;
    }
  }

  .content {
    position: relative;

    .product-list {
      display: flex;
      align-items: center;
      justify-content: space-around;
      position: absolute;
      padding: 0 40px;
      height: 290px;
      width: 100%;
      opacity: 0;
      transition: opacity .5s linear;

      .product-centent {
        text-align: center;
        width: 240px;
        cursor: pointer;

        img {
          padding: 20px;
          width: 230px;
          height: 230px;
        }

        p:first-of-type {
          padding: 0 40px;
        }

        p:last-child {
          margin-top: 15px;
          color: @ftColor;
        }
      }
    }

    .fade {
      opacity: 1;
      z-index: 1;
    }

    .prev,
    .next {
      top: 110px;
      position: absolute;
      cursor: pointer;
      z-index: 2;

      .iconfont {
        display: inline-block;
        width: 30px;
        height: 30px;
        font-size: 30px;
        color: #ddd;
      }

    }

    .prev {
      left: 25px;
    }

    .next {
      right: 25px;
    }

    .indicator {
      position: absolute;
      top: 300px;
      display: flex;
      justify-content: center;
      margin-top: 20px;
      width: 100%;

      li {
        margin-left: 12px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, .2);
        cursor: pointer;
      }

      .active {
        background-color: @bgColor;
      }
    }
  }
}
</style>