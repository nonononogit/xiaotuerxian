<template>
  <!-- 新鲜好物和人气推荐 -->
  <div class="newGoodsAndPopularity">
    <!-- 新鲜好物 -->
    <div class="newGoods">
      <div class="container">
        <h2 class="newGoodsTitle">
          新鲜好物
          <span>新鲜出炉&nbsp;品质靠谱</span>
          <a href="javascript:;">查看更多<i class="iconfont iconxiangyoujiantou"></i></a>
        </h2>
        <ul class="newGoodsItemContainer">
          <li class="newGoodsItem">
            <a href="javascript:;">
              <img src="" alt="">
              <p class="introduce">千年龙泉瓷茶具套组朱啊八八八八</p>
              <p class="price">￥169.00</p>
            </a>
          </li>
          <li class="newGoodsItem">
            <a href="javascript:;">
              <img src="" alt="">
              <p class="introduce">千年龙泉瓷茶具套组朱啊八八八八</p>
              <p class="price">￥169.00</p>
            </a>
          </li>
          <li class="newGoodsItem">
            <a href="javascript:;">
              <img src="" alt="">
              <p class="introduce">千年龙泉瓷茶具套组朱啊八八八八</p>
              <p class="price">￥169.00</p>
            </a>
          </li>
          <li class="newGoodsItem">
            <a href="javascript:;">
              <img src="" alt="">
              <p class="introduce">千年龙泉瓷茶具套组朱啊八八八八</p>
              <p class="price">￥169.00</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 人气推荐 -->
    <div class="newGoods">
      <div class="container">
        <h2 class="newGoodsTitle">
          人气推荐
          <span>人气爆款&nbsp;不容错过</span>
          <!-- <a href="javascript:;">查看更多<i class="iconfont iconxiangyoujiantou"></i></a> -->
        </h2>
        <ul class="newGoodsItemContainer">
          <li class="newGoodsItem">
            <a href="javascript:;">
              <img src="" alt="">
              <p class="introduce">千年龙泉瓷茶具套组朱啊八八八八</p>
              <p class="price">￥169.00</p>
            </a>
          </li>
          <li class="newGoodsItem">
            <a href="javascript:;">
              <img src="" alt="">
              <p class="introduce">千年龙泉瓷茶具套组朱啊八八八八</p>
              <p class="price">￥169.00</p>
            </a>
          </li>
          <li class="newGoodsItem">
            <a href="javascript:;">
              <img src="" alt="">
              <p class="introduce">千年龙泉瓷茶具套组朱啊八八八八</p>
              <p class="price">￥169.00</p>
            </a>
          </li>
          <li class="newGoodsItem">
            <a href="javascript:;">
              <img src="" alt="">
              <p class="introduce">千年龙泉瓷茶具套组朱啊八八八八</p>
              <p class="price">￥169.00</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

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
      }

      .newGoodsItem:hover {
        transform: translate(0, -5px);
        box-shadow: 0 4px 5px #d9d9d9;
      }
    }
  }

  & .newGoods:nth-child(2) {
    .newGoodsItem {
      background-color: #fff;
    }
  }
}
</style>