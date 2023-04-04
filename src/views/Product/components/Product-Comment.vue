<template>
  <div class="comment-container">
    <div class="header">
      <div class="left">
        <div>
          <p>1306</p>
          <p>人购买</p>
        </div>
        <div>
          <p>94.56%</p>
          <p>好评率</p>
        </div>
      </div>
      <div class="right">
        <div class="desc">
          大家都在说：
        </div>
        <ul class="tag">
          <li class="active">全部评价（832）</li>
          <li>全部评价（832）</li>
          <li>全部评价（832）</li>
          <li>全部评价（832）</li>
          <li>全部评价（832）</li>
          <li>全部评价（832）</li>
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
      <div class="content-item">
        <div class="user">
          <img class="avatar" src="" alt="">
          <span class="nickname">兔****y</span>
        </div>
        <div class="content">
          <div class="star">
            <i class="iconfont iconshixinwujiaoxing"></i>
            <i class="iconfont iconshixinwujiaoxing"></i>
            <i class="iconfont iconshixinwujiaoxing"></i>
            <i class="iconfont iconshixinwujiaoxing"></i>
            <i class="iconfont iconkongxinwujiaoxing"></i>
            <span>颜色：白色 尺寸：10cm 产地：美国</span>
          </div>
          <p class="desc">很有分量！颜色太漂亮了很喜欢很喜欢！做工也算比较精细</p>
          <div class="time">
            <span>2021-04-03 13:20:32</span>
            <span><i class="iconfont iconjurassic_zan"></i>162</span>
          </div>
        </div>
      </div>
      <div class="content-item">
        <div class="user">
          <img class="avatar" src="" alt="">
          <span class="nickname">兔****y</span>
        </div>
        <div class="content">
          <div class="star">
            <i class="iconfont iconshixinwujiaoxing"></i>
            <i class="iconfont iconshixinwujiaoxing"></i>
            <i class="iconfont iconshixinwujiaoxing"></i>
            <i class="iconfont iconshixinwujiaoxing"></i>
            <i class="iconfont iconkongxinwujiaoxing"></i>
            <span>颜色：白色 尺寸：10cm 产地：美国</span>
          </div>
          <p class="desc">這個煱我看中了3年，終於在大減價時下手。性價比超高！😁😁😁 今天剛剛收到，包裝精美，閃令令漂亮到冇朋友！😍😍😍 下星期會開煱！十分期待啊！</p>
          <ul class="img-list">
            <li class="active"><img src="" alt=""></li>
            <li><img src="" alt=""></li>
            <li><img src="" alt=""></li>
            <li><img src="" alt=""></li>
            <li><img src="" alt=""></li>
          </ul>
          <div class="preview">
            <i class="iconfont iconchacha"></i>
            <img src="" alt="">
          </div>
          <div class="time">
            <span>2021-04-03 13:20:32</span>
            <span><i class="iconfont iconjurassic_zan"></i>162</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

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
}
</style>