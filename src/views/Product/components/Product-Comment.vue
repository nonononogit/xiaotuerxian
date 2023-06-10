<template>
  <div class="comment-container">
    <div class="header">
      <div class="left">
        <div>
          <p>{{ commentHeadData.salesCount }}</p>
          <p>人购买</p>
        </div>
        <div>
          <p>{{ commentHeadData.praisePercent }}</p>
          <p>好评率</p>
        </div>
      </div>
      <div class="right">
        <div class="desc">
          大家都在说：
        </div>
        <ul class="tag">
          <li :class="{ active: commentActive === 'default' }" @click="filterComment('default')">全部评价（{{
            commentHeadData.evaluateCount }}）</li>
          <li :class="{ active: commentActive === true }" @click="filterComment(true)">有图（{{
            commentHeadData.hasPictureCount
          }}）</li>
          <li :class="{ active: commentActive === tag.title }" @click="filterComment(tag.title)"
            v-for="tag in commentHeadData.tags" :key="tag.title">{{
              `${tag.title}（${tag.tagCount}）` }}</li>
        </ul>
      </div>
    </div>
    <div class="sort">
      <span>排序：</span>
      <a href="javascript:;">默认</a>
      <a href="javascript:;">最新</a>
      <a href="javascript:;">最热</a>
    </div>
    <div class="comment-content">
      <div class="content-item" v-for="item in commentContentData.items" :key="item.id">
        <div class="user">
          <img class="avatar" :src="item.member?.avatar" alt="">
          <span class="nickname">{{ item.member?.nickname }}</span>
        </div>
        <div class="content">
          <div class="star">
            <i class="iconfont iconshixinwujiaoxing" v-for="index in item.score" :key="index"></i>
            <i class="iconfont iconkongxinwujiaoxing" v-for="index in (5 - item.score)" :key="index"></i>
            <span v-for="spesc in item.orderInfo?.specs" :key="spesc.name">{{ `${spesc.name}：${spesc.nameValue}` }}</span>
          </div>
          <p class="desc">{{ item.content }}</p>
          <div v-if="item.pictures.length">
            <ul class="img-list">
              <li :class="{ active: bigImg === pic }" v-for="pic in item.pictures" :key="pic" @click="bigImg = pic">
                <img :src="pic" alt="">
              </li>
            </ul>
            <div class="preview" v-if="bigImg">
              <i class="iconfont iconchacha" @click="bigImg = ''"></i>
              <img :src="bigImg" alt="">
            </div>
          </div>
          <div class="time">
            <span>{{ item.createTime }}</span>
            <span><i class="iconfont iconjurassic_zan"></i>{{ item.praiseCount }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '@/store/product';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
const bigImg = ref('')
const goodsId = ref('')
const commentActive = ref<boolean | string>('default')
const productStore = useProductStore()
const { commentContentData, commentHeadData } = storeToRefs(productStore)
const getCommentData = (id: string) => {
  goodsId.value = id
  productStore.getCommentHeadData(id)
  productStore.getCommentContentData(id)
}
const filterComment = (type: boolean | string) => {
  commentActive.value = type
  if (type === 'default') {
    productStore.getCommentContentData(goodsId.value)
  } else {
    productStore.getCommentContentData(goodsId.value, type)
  }
}
defineExpose({
  getCommentData
})
</script>

<style lang="less" scoped>
.comment-container {
  .header {
    display: flex;
    height: 184px;
    padding: 30px 0;

    .left {
      display: flex;
      padding: 20px;
      height: 124px;

      p {
        width: 150px;
        text-align: center;
      }

      p:first-child {
        color: @ftColor;
        font-size: 32px;
      }

      p:last-child {
        color: #999;
        font-size: 14px;
      }

    }

    .right {
      flex: 1;
      display: flex;
      border-left: 1px solid #f5f5f5;

      .desc {
        width: 100px;
        text-align: right;
        font-weight: 700;
        line-height: 42px;
        font-size: 14px;
      }

      .tag {
        flex: 1;
        display: flex;
        flex-wrap: wrap;

        li {
          width: 132px;
          height: 42px;
          margin-left: 20px;
          margin-bottom: 20px;
          border-radius: 4px;
          border: 1px solid #e4e4e4;
          background: #f5f5f5;
          color: #999;
          text-align: center;
          line-height: 40px;
          font-size: 14px;
          cursor: pointer;
        }

        li:hover {
          color: #27ba9b;
          border-color: #27ba9b;
          background-color: #E6FAF6;
        }

        .active {
          border-color: #27ba9b;
          background: #27ba9b;
          color: #fff;
        }
      }
    }
  }

  .sort {
    height: 60px;
    line-height: 60px;
    border-top: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    margin: 0 20px;
    color: #666;
    font-size: 14px;

    a {
      color: black;
      margin-left: 30px;
    }

    a:hover {
      color: @bgColor;
    }

    .active {
      color: @bgColor;
    }
  }

  .comment-content {
    padding: 0 20px;

    .content-item {
      display: flex;
      padding: 25px 10px;
      border-bottom: 1px solid #f5f5f5;

      .user {
        width: 160px;

        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          overflow: hidden;
        }

        .nickname {
          padding-left: 10px;
          color: #666;
          font-size: 14px;
        }
      }

      .content {
        flex: 1;
        font-size: 14px;
        color: #666;

        .star {
          line-height: 40px;

          .iconfont {
            color: #ff9240;
            font-size: 20px;
          }

          span {
            display: inline-block;
            padding-left: 10px;
            font-size: 14px;
            vertical-align: top;
          }
        }

        .img-list {
          display: flex;
          flex-wrap: wrap;
          margin-top: 10px;

          li {
            width: 120px;
            height: 120px;
            border: 1px solid #e4e4e4;
            margin-right: 20px;
            margin-bottom: 10px;
            cursor: pointer;
          }

          .active {
            border-color: #27ba9b;
          }
        }

        .preview {
          position: relative;
          width: 480px;
          height: 480px;
          border: 1px solid #e4e4e4;
          background: #f8f8f8;
          margin-bottom: 20px;

          i {
            position: absolute;
            right: 0;
            top: 0;
            width: 30px;
            height: 30px;
            background: rgba(0, 0, 0, .2);
            color: #fff;
            text-align: center;
            line-height: 30px;
          }
        }

        .time {
          color: #999;
          display: flex;
          justify-content: space-between;
          margin-top: 5px;

          .iconfont {
            font-size: 18px;
          }
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }
}</style>