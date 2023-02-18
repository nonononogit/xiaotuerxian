<template>
  <!-- 最新专题 -->
  <div class="container">
    <div class="newSpecial" ref="newSpecial">
      <h3 class="title">
        最新专题
        <a href="javascript:;">查看全部 ></a>
      </h3>
      <ul class="specialList">
        <li v-for="special in specialData" :key="special.id">
          <a href="javascript:;">
            <img :src="special.detailsUrl" alt="">
            <div class="describe">
              <p>{{special.title}}</p>
              <p>{{special.summary}}</p>
              <p>￥{{special.lowestPrice}}起</p>
            </div>
          </a>
          <div class="interact">
            <span><i class="iconfont iconaixin"></i>{{special.collectNum}}</span>
            <span><i class="iconfont iconliulan"></i>{{special.viewNum}}</span>
            <span><i class="iconfont iconpinglun"></i>{{special.replyNum}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLazyData } from '@/hooks/useLazyData';
import { useHomeStore } from '@/store/home';
import { storeToRefs } from 'pinia'
const homeStore = useHomeStore()
const newSpecial = useLazyData(homeStore.reqSpecialStoreData)
const { specialData } = storeToRefs(homeStore)
</script>

<style lang="less" scoped>
// 最新专题
.newSpecial {
  margin-bottom: 20px;
  .title {
    display: flex;
    justify-content: space-between;
    padding: 40px 0;
    font-size: 32px;
    font-weight: normal;

    a {
      display: flex;
      align-items: flex-end;
      font-size: 16px;
      color: #999;
    }

    a:hover {
      color: #27ba9b;
    }
  }

  .specialList {
    display: flex;
    justify-content: space-between;

    li {
      width: 404px;
      transition: all .5s;

      a {
        position: relative;
        display: block;

        img {
          width: 404px;
          height: 288px;
          object-fit: cover;
        }

        .describe {
          position: absolute;
          top: 0;
          width: 100%;
          height: 288px;
          background-image: linear-gradient(0deg, rgba(0, 0, 0, .8), transparent 50%);

          p {
            position: absolute;
            left: 15px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 266.8px;
          }

          p:nth-child(1) {
            bottom: 40px;
            font-size: 22px;
            color: #fff;
          }

          p:nth-child(2) {
            bottom: 15px;
            font-size: 19px;
            color: #999;
          }

          P:nth-child(3) {
            left: 300px;
            bottom: 34px;
            width: 81.85px;
            background-color: #fff;
            border-radius: 4px;
            text-align: center;
            line-height: 25px;
            color: #cf4444;
            font-size: 17px;
          }
        }

      }

      .interact {
        display: flex;
        width: 404px;
        height: 72px;
        padding: 0 20px;
        line-height: 72px;
        background-color: #fff;

        span {
          margin-right: 25px;

          i {
            margin-right: 5px;
            color: #999;
          }
        }

        span:nth-child(2) {
          flex: 1;
        }

        span:nth-child(3) {
          margin-right: 0;
        }
      }
    }

    li:hover {
      transform: translate(0, -5px);
      box-shadow: 0 4px 5px #d9d9d9;
    }
  }
}
</style>