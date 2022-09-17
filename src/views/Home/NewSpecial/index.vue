<template>
  <!-- 最新专题 -->
  <div class="container">
    <div class="newSpecial">
      <h3 class="title">
        最新专题
        <a href="javascript:;">查看全部 ></a>
      </h3>
      <ul class="specialList">
        <li>
          <a href="javascript:;">
            <img src="" alt="">
            <p>地表最强 男士鹅绒毛领经鹅绒毛领</p>
            <p>很好，很暖和。冬天穿就再也不怕冷啦</p>
            <p>￥1299起</p>
          </a>
          <div class="interact">
            <span><i class="iconfont iconaixin"></i>5902</span>
            <span><i class="iconfont iconliulan"></i>5902</span>
            <span><i class="iconfont iconpinglun"></i>5902</span>
          </div>
        </li>
        <li>
          <a href="javascript:;">
            <img src="" alt="">
            <p>地表最强 男士鹅绒毛领经鹅绒毛领</p>
            <p>很好，很暖和。冬天穿就再也不怕冷啦</p>
            <p>￥1299起</p>
          </a>
          <div class="interact">
            <span><i class="iconfont iconaixin"></i>5902</span>
            <span><i class="iconfont iconliulan"></i>5902</span>
            <span><i class="iconfont iconpinglun"></i>5902</span>
          </div>
        </li>
        <li>
          <a href="javascript:;">
            <img src="" alt="">
            <p>地表最强 男士鹅绒毛领经鹅绒毛领</p>
            <p>很好，很暖和。冬天穿就再也不怕冷啦</p>
            <p>￥1299起</p>
          </a>
          <div class="interact">
            <span><i class="iconfont iconaixin"></i>5902</span>
            <span><i class="iconfont iconliulan"></i>5902</span>
            <span><i class="iconfont iconpinglun"></i>5902</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
// 最新专题
.newSpecial {
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
        }

        p {
          position: absolute;
          left: 15px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 266.8px;
        }

        p:nth-child(2) {
          bottom: 40px;
          font-size: 22px;
          color: #fff;
        }

        p:nth-child(3) {
          bottom: 15px;
          font-size: 19px;
          color: #999;
        }

        P:nth-child(4) {
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