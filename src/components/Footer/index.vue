<template>
  <!-- 底部 -->
  <footer>
    <div class="footerTop">
      <div class="container">
        <ul>
          <li>
            <dl>
              <dt>客户服务</dt>
              <dd><i class="iconfont iconkefu"></i>在线客服</dd>
              <dd><i class="iconfont icongerenzhongxin-wentifankui"></i>问题反馈</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>关注我们</dt>
              <dd><i class="iconfont iconweixin"></i>公众号</dd>
              <dd><i class="iconfont iconxinlangweibo"></i>微博</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>下载APP</dt>
              <dd><img src="" alt=""></dd>
              <dd>
                <p>扫描二维码</p>
                <p>立马下载APP</p>
                <a href="javascript:;">下载页面</a>
              </dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>服务热线</dt>
              <dd class="phone">
                <p>400-0000-000</p>
                <p>周一至周日 8:00-18:00</p>
              </dd>
            </dl>
          </li>
        </ul>
      </div>
    </div>
    <div class="footerBottom">
      <div class="container">
        <ul class="slogan">
          <li>
            <a href="javascript:;"><i class="iconfont iconjiagebaohu"></i><span>价格亲民</span></a>
          </li>
          <li>
            <a href="javascript:;"><i class="iconfont iconguojiwuliu"></i>物流快捷</a>
          </li>
          <li>
            <a href="javascript:;"><i class="iconfont icondianzan"></i>品质新鲜</a>
          </li>
        </ul>
        <div class="copyright">
          <ul>
            <li><a href="javascript:;">关于我们</a></li>
            <li><a href="javascript:;">关注中心</a></li>
            <li><a href="javascript:;">售后服务</a></li>
            <li><a href="javascript:;">配送与验收</a></li>
            <li><a href="javascript:;">商务合作</a></li>
            <li><a href="javascript:;">搜索推荐</a></li>
            <li><a href="javascript:;">友情链接</a></li>
          </ul>
          <p>Copyright © 小兔鲜儿</p>
        </div>
      </div>
    </div>

  </footer>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
// 底部-上半部分
.footerTop {
  background-color: #fff;
  margin-top: 40px;

  ul {
    display: flex;
    height: 290px;
    align-items: center;

    li {
      width: 269px;
      height: 190px;
      border-right: 1px solid #f2f2f2;

      dl {
        overflow: hidden;
        color: #999999;
        text-align: center;
        padding-right: 70px;

        dt {
          font-size: 18px;
        }

        dd {
          float: left;
          margin: 36px 12px 0 0;
          width: 92px;
          height: 92px;
          font-size: 14px;
          border: 1px solid #ededed;

          i {
            display: block;
            margin: 15px 0 10px 0;
            color: #666666;
            font-size: 36px;
          }
        }

        dd:nth-child(3) {
          margin: 36px 0 0 0;
        }
      }
    }

    li:nth-child(2) {
      width: 341px;

      dl {
        padding-left: 70px;
      }
    }

    li:nth-child(3) {
      width: 355px;

      dl {
        padding-left: 70px;

        dd:nth-child(3) {
          width: 106px;
          padding-top: 5px;
          border: none;

          a {
            display: block;
            padding: 10px 25px;
            margin-top: 5px;
            line-height: 1;
            width: 100%;
            border-radius: 2px;
            color: #fff;
            background-color: #27ba9b;
          }
        }
      }
    }

    li:nth-child(4) {
      border: none;

      dl {
        padding: 0 0 0 70px;

        .phone {
          width: 100%;
          margin-top: 50px;
          border: none;

          p:nth-child(1) {
            color: #666;
            font-size: 22px;
          }
        }
      }
    }
  }

  .iconfont:hover {
    color: #27ba9b;
  }
}

// 底部-下半部分
.footerBottom {
  background-color: #333333;
  height: 348px;

  .slogan {
    display: flex;
    justify-content: space-between;
    height: 178px;
    padding: 60px 100px;
    border-bottom: 1px solid #434343;
    color: #fff;

    li {
      line-height: 58px;

      a {
        font-size: 28px;
        color: #fff;

        span {
          vertical-align: middle;
        }

        i {
          font-size: 50px;
          margin-right: 5px;
          vertical-align: middle;
        }
      }
    }
  }

  .copyright {
    height: 170px;
    padding-top: 40px;

    ul {
      display: flex;
      padding: 0 315px;

      li {
        height: 20px;
        line-height: 20px;
        border-right: 1px solid #999999;

        a {

          padding: 0 10px;
          color: #999999;
        }
      }

      li:last-child {
        border: none;
      }
    }

    p {
      margin-top: 20px;
      color: #999;
      text-align: center;
    }
  }
}
</style>