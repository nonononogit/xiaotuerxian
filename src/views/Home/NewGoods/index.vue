<template>
  <!-- 新鲜好物和人气推荐 -->
  <div class="newGoodsAndPopularity">
    <!-- 新鲜好物 -->
    <div class="newGoods" ref="newGoods">
      <div class="container">
        <h2 class="newGoodsTitle">
          新鲜好物
          <span>新鲜出炉&nbsp;品质靠谱</span>
          <a href="javascript:;">查看更多<i class="iconfont iconxiangyoujiantou"></i></a>
        </h2>
        <el-skeleton animated :loading="newGoodsLoading">
          <template #template>
            <ul class="newGoodsItemContainer">
              <li class="newGoodsItem">
                <el-skeleton-item variant="image" style="width: 306px; height: 306px" />
                <el-skeleton-item variant="p" style="display:block;margin:17px auto;width:160px;height: 24px;">
                </el-skeleton-item>
                <el-skeleton-item variant="p" style="width:120px;height: 24px;"></el-skeleton-item>
              </li>
              <li class="newGoodsItem">
                <el-skeleton-item variant="image" style="width: 306px; height: 306px" />
                <el-skeleton-item variant="p" style="display:block;margin:17px auto;width:160px;height: 24px;">
                </el-skeleton-item>
                <el-skeleton-item variant="p" style="width:120px;height: 24px;"></el-skeleton-item>
              </li>
              <li class="newGoodsItem">
                <el-skeleton-item variant="image" style="width: 306px; height: 306px" />
                <el-skeleton-item variant="p" style="display:block;margin:17px auto;width:160px;height: 24px;">
                </el-skeleton-item>
                <el-skeleton-item variant="p" style="width:120px;height: 24px;"></el-skeleton-item>
              </li>
              <li class="newGoodsItem">
                <el-skeleton-item variant="image" style="width: 306px; height: 306px" />
                <el-skeleton-item variant="p" style="display:block;margin:17px auto;width:160px;height: 24px;">
                </el-skeleton-item>
                <el-skeleton-item variant="p" style="width:120px;height: 24px;"></el-skeleton-item>
              </li>
            </ul>
          </template>
          <template #default>
            <ul class="newGoodsItemContainer">
              <li class="newGoodsItem" v-for="newGoods in newGoodsData" :key="newGoods.id">
                <a href="javascript:;">
                  <img :src="newGoods.picture" alt="">
                  <p class="introduce">{{newGoods.name}}</p>
                  <p class="price">￥{{newGoods.price}}</p>
                </a>
              </li>
            </ul>
          </template>
        </el-skeleton>
      </div>
    </div>
    <!-- 人气推荐 -->
    <div class="newGoods popularity" ref="popularity">
      <div class="container">
        <h2 class="newGoodsTitle">
          人气推荐
          <span>人气爆款&nbsp;不容错过</span>
        </h2>
        <el-skeleton animated :loading="popularityLoading">
          <template #template>
            <ul class="newGoodsItemContainer">
              <li class="newGoodsItem">
                <el-skeleton-item variant="image" style="width: 306px; height: 306px" />
                <el-skeleton-item variant="p" style="display:block;margin:17px auto;width:160px;height: 24px;">
                </el-skeleton-item>
                <el-skeleton-item variant="p" style="width:120px;height: 24px;"></el-skeleton-item>
              </li>
              <li class="newGoodsItem">
                <el-skeleton-item variant="image" style="width: 306px; height: 306px" />
                <el-skeleton-item variant="p" style="display:block;margin:17px auto;width:160px;height: 24px;">
                </el-skeleton-item>
                <el-skeleton-item variant="p" style="width:120px;height: 24px;"></el-skeleton-item>
              </li>
              <li class="newGoodsItem">
                <el-skeleton-item variant="image" style="width: 306px; height: 306px" />
                <el-skeleton-item variant="p" style="display:block;margin:17px auto;width:160px;height: 24px;">
                </el-skeleton-item>
                <el-skeleton-item variant="p" style="width:120px;height: 24px;"></el-skeleton-item>
              </li>
              <li class="newGoodsItem">
                <el-skeleton-item variant="image" style="width: 306px; height: 306px" />
                <el-skeleton-item variant="p" style="display:block;margin:17px auto;width:160px;height: 24px;">
                </el-skeleton-item>
                <el-skeleton-item variant="p" style="width:120px;height: 24px;"></el-skeleton-item>
              </li>
            </ul>
          </template>
          <template #default>
            <ul class="newGoodsItemContainer">
              <li class="newGoodsItem" v-for="popularity in popularityData" :key="popularity.id">
                <a href="javascript:;">
                  <img :src="popularity.picture" alt="">
                  <p class="introduce">{{popularity.title}}</p>
                  <p class="alt">{{popularity.alt}}</p>
                </a>
              </li>
            </ul>
          </template>
        </el-skeleton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLazyData } from '@/hooks/useLazyData'
import { ref, watch } from 'vue'
import { useHomeStore } from '@/store/home'
import { storeToRefs } from 'pinia'
// 控制新鲜好物和人气推荐加载状态的参考值
let newGoodsLoading = ref(true)
let popularityLoading = ref(true)
const homeStore = useHomeStore()
// 监听页面滚动距离，请求新鲜好物和人气推荐数据
const newGoods = useLazyData(homeStore.reqNewGoodsStoreData)
const popularity = useLazyData(homeStore.reqPopularityStoreData)
let { newGoodsData, popularityData } = storeToRefs(homeStore)
// 监听新鲜好物和人气推荐的数据有无请求回来，控制页面加载状态
watch([newGoodsData, popularityData], values => {
  newGoodsLoading.value = values[0].length < 1 ? true : false
  popularityLoading.value = values[1].length < 1 ? true : false
})
</script>

<style lang="less" scoped>
// 新鲜好物和人气推荐
.newGoodsAndPopularity {

  .newGoods {
    width: 100%;
    height: 100%;
    background-color: #fff;

    .newGoodsTitle {
      padding: 40px 0;
      font-size: 32px;
      font-weight: normal;

      span {
        color: #9b9b9d;
        font-size: 16px;
      }

      a {
        float: right;
        margin-top: 20px;
        font-size: 16px;
      }
    }

    .newGoodsItemContainer {
      display: flex;
      justify-content: space-around;
      height: 406px;

      .newGoodsItem {
        width: 306px;
        background-color: #f0f9f4;
        text-align: center;
        transition: all 0.5s;

        img {
          width: 306px;
          height: 306px;
        }

        p {
          padding: 12px 30px 0 30px;
        }

        .introduce {
          font-size: 22px;
          color: #333333;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .price {
          font-size: 22px;
          color: #cf4444;
        }
        .alt{
          font-size: 18px;
          color:#999;
        }
      }

      .newGoodsItem:hover {
        transform: translate(0, -5px);
        box-shadow: 0 4px 5px #d9d9d9;
      }
    }
  }

  .popularity {
    padding-bottom: 20px;
  }

  & .newGoods:nth-child(2) {
    .newGoodsItem {
      background-color: #fff;
    }
  }
}
</style>