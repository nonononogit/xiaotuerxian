<template>
  <main class="detail-container">
    <section class="detail-left">
      <div class="detail-left-top">
        <nav class="nav">
          <a href="javascript:;" :class="{ active: showDetail === true }" @click="showDetail = true">商品详情</a>
          <a href="javascript:;" :class="{ active: showDetail === false }" @click="showComment">商品评价<span>(0)</span></a>
        </nav>
        <div class="goods-detail" v-if="showDetail">
          <ul class="goods-attrs">
            <li v-for="properties in goodsDetailData?.details?.properties" :key="properties.name">
              <span>{{ properties.name }}</span>
              <span>{{ properties.value }}</span>
            </li>
          </ul>
          <img v-for="img in goodsDetailData?.details?.pictures" :src="img" :key="img" alt="">
        </div>
        <ProductComment v-else ref="commentRef"></ProductComment>
      </div>
      <div class="notice">
        <h3>注意事项</h3>
        <p class="tit">• 购买运费如何收取</p>
        <p>单笔订单金额(不含运费)满88元免邮费；不满88元，每单收取10元运费。（港澳台地区需满500元免邮费；不满500元，每单收取30元运费）</p>
        <br>
        <p class="tit">• 使用什么快递发货?</p>
        <p>默认使用顺丰快递发货(个别商品使用其他快递)</p>
        <p>配送范围覆盖全国大部分地区(港澳台地区除外)</p>
        <br>
        <p class="tit">• 如何申请退货?</p>
        <p>1.自收到商品之日起30日内，顾客可申请无忧退货，退款将原路返还，不同的银行处理时间不同，预计1-5个工作日到账；</p>
        <p>2.内裤和食品等特殊商品无质量问题不支持退货；</p>
        <p>3.退货流程： 确认收货-申请退货-客服审核通过-用户寄回商品-仓库签收验货-退款审核-退款完成；</p>
        <p>4.因小兔鲜儿产生的退货，如质量问题，退货邮费由小兔鲜儿承担，退款完成后会以现金券的形式报销。因客户个人原因产生的退货，购买和寄回运费由客户个人承担。</p>
      </div>
    </section>
    <section class="detail-right">
      <div class="day">
        <h3>24小时热销榜</h3>
        <ul class="hot-goods">
          <li v-for="day in hotListData.day" :key="day.id">
            <img :src="day.picture" alt="">
            <p class="ellipsis">{{ day.name }}</p>
            <p class="ellipsis">{{ day.desc }}</p>
            <p>¥{{ day.price }}</p>
          </li>
        </ul>
      </div>
      <div class="week">
        <h3>周热销榜</h3>
        <ul class="hot-goods">
          <li v-for="week in hotListData.week" :key="week.id">
            <img :src="week.picture" alt="">
            <p class="ellipsis">{{ week.name }}</p>
            <p class="ellipsis">{{ week.desc }}</p>
            <p>¥{{ week.price }}</p>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import ProductComment from '@/views/Product/components/Product-Comment.vue'
import { useProductStore } from '@/store/product'
import { storeToRefs } from 'pinia'
import { onMounted, ref, nextTick } from 'vue';

const showDetail = ref(true)
const props = defineProps(['goodsId'])
const productStore = useProductStore()
const { hotListData,goodsDetailData } = storeToRefs(productStore)
const commentRef = ref<InstanceType<typeof ProductComment>>()
// 点击商品评价
const showComment = () => {
  showDetail.value = false
  nextTick(() => {
    commentRef.value?.getCommentData(props.goodsId)
  })

}
onMounted(() => {
  productStore.getHotListData(props.goodsId)
})
</script>

<style lang="less" scoped>
.detail-container {
  display: flex;
  margin-top: 20px;

  .detail-left {
    margin-right: 20px;
    width: 940px;


    .detail-left-top,
    .notice {
      background-color: white;

      .nav {
        height: 70px;
        line-height: 70px;
        border-bottom: 1px solid #f5f5f5;

        a {
          position: relative;
          display: inline-block;
          padding: 0 40px;
          color: #333;
          font-size: 18px;

          span {
            margin-left: 10px;
            color: @ftColor;
            font-size: 16px;
          }
        }

        a:first-child {
          border-right: 1px solid #f5f5f5;
        }

        .active::before {
          content: "";
          position: absolute;
          left: 40px;
          bottom: -1px;
          width: 72px;
          height: 2px;
          background: #27ba9b;
        }
      }

      .goods-detail {
        padding: 40px;

        .goods-attrs {
          display: flex;
          flex-wrap: wrap;
          font-size: 14px;

          li {
            display: flex;

            span:first-child {
              width: 100px;
              color: #999;
              line-height: 30px;
            }

            span:last-child {
              width: 330px;
              color: #666;
              line-height: 30px;
            }
          }

        }

        img {
          width: 100%;
          vertical-align: middle;
        }
      }
    }

    .notice {
      margin-top: 20px;
      padding-bottom: 40px;

      h3 {
        height: 70px;
        line-height: 70px;
        border-bottom: 1px solid #f5f5f5;
        padding-left: 50px;
        font-size: 18px;
        font-weight: 400;
        margin-bottom: 10px;
      }

      p {
        line-height: 40px;
        padding: 0 25px;
        color: #666;
        font-size: 14px;
      }

      .tit {
        color: #333;
      }
    }
  }

  .detail-right {
    h3 {
      margin-bottom: 10px;
      padding-left: 25px;
      height: 70px;
      line-height: 70px;
      color: white;
      background-color: rgb(226, 98, 55);
      font-size: 18px;
      font-weight: normal;
    }

    .hot-goods {
      li {
        width: 280px;
        padding: 20px 30px;
        margin-bottom: 10px;
        text-align: center;
        background-color: white;

        img {
          width: 200px;
          height: 200px;
        }

        p {
          width: 200px;
          padding-top: 10px;
          margin: 0 10px;
        }

        p:first-child {
          color: #333;
          font-size: 16px;
        }

        p:nth-child(3) {
          color: #999;
          font-size: 14px;
        }

        p:last-child {
          color: @ftColor;
          font-size: 20px;
          text-align: center;
        }
      }
    }
  }
}
</style>