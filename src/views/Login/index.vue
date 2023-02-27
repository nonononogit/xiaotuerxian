<template>
  <header class="header-login">
    <div class="container">
      <div class="logo-box">
        <a class="logo-item"></a>
      </div>
      <div class="login-welcome">
        欢迎登录
      </div>
      <div class="to-home">
        <span>进入网站首页</span>
        <i class="iconfont iconxiangyoujiantou"></i>
        <i class="iconfont iconxiangyoujiantou"></i>
      </div>
    </div>
  </header>
  <main class="main-login">
    <section class="section-login">
      <div class="login-action">
        <a class="account-text action" href="javascript:;">账户登录</a>
        <a class="QRCode-text" href="javascript:;">扫码登录</a>
      </div>
      <div class="login-form">
        <div class="login-form-box">
          <div class="form-action-box">
            <a class="form-action-account" href="javascript"><i class="iconfont iconyonghu"></i>使用账号登录</a>
            <a class="form-action-message" href="javascript"><i class="iconfont iconxinfeng1"></i>使用短信登录</a>
          </div>
          <form action="" class="form">
            <div class="account-box">
              <i class="iconfont iconyonghu"></i>
              <input type="text" placeholder="请输入用户名">
              <div class="error-box">
                <i class="iconfont iconjinggao"></i>
                <span>请输入用户名</span>
              </div>
            </div>
            <div class="password-box">
              <i class="iconfont iconsuoding_o"></i>
              <input type="password" placeholder="请输入密码">
              <div class="error-box">
                <i class="iconfont iconjinggao"></i>
                <span>请输入密码</span>
              </div>
            </div>
            <div class="phone-box">
              <i class="iconfont iconshouji"></i>
              <input type="text" placeholder="请输入手机号">
              <div class="error-box">
                <i class="iconfont iconjinggao"></i>
                <span>请输入手机号</span>
              </div>
            </div>
            <div class="verification-box">
              <i class="iconfont icon24gl-shieldCheck"></i>
              <input type="text" placeholder="请输入验证码">
              <div class="error-box">
                <i class="iconfont iconjinggao"></i>
                <span>请输入验证码</span>
              </div>
            </div>
            <div class="terms-box">
              <div class="terms-content">
                <i class="iconfont iconweixuanze"></i>
                <i class="iconfont iconyixuanze"></i>
                <span>我已同意</span>
                <a href="javascript:;">《隐私条款》</a>
                <span>和</span>
                <a href="javascript:;">《服务条款》</a>
              </div>
              <div class="error-box">
                <i class="iconfont iconjinggao"></i>
                <span>请勾选登录协议</span>
              </div>
            </div>
            <!-- 声明按钮为button类型，避免form默认事件 -->
            <button class="submit" type="button">登录</button>
          </form>
          <div class="register-box">
            <a class="login-qq" href="javascript:;"></a>
            <span class="forget">忘记密码</span>
            <span class="register">免费注册</span>
          </div>
        </div>
      </div>
      <div class="login-QRCode">

      </div>
    </section>
  </main>
</template>

<script lang="ts">

</script>
<script setup lang="ts">

</script>

<style lang="less" scoped>
.header-login {
  background-color: white;

  .container {
    display: flex;
    align-items: center;

    .logo-box {
      width: 200px;

      .logo-item {
        display: block;
        width: 100%;
        height: 132px;
        background: url(@/assets/images/logo.png) no-repeat center 18px/contain;
      }
    }

    .login-welcome {
      flex: 1;
      margin-left: 20px;
      font-size: 24px;
      color: #666;
    }

    .to-home {
      .iconfont {
        font-size: 14px;
        color: #27ba9b;
        letter-spacing: -5px; // 减少字符间距
      }
    }
  }
}

.main-login {
  position: relative;
  height: 488px;
  background: url(@/assets/images/login-bg.png) no-repeat 50%/cover;

  .section-login {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(100px, 0, 0);
    margin-top: -200px;
    background-color: white;
    width: 380px;
    height: 400px;
    box-shadow: 0 0 10px rgb(0 0 0 / 15%);

    .login-action {
      display: flex;
      align-items: center;
      padding: 0 40px;
      height: 55px;
      border-bottom: 1px solid #f5f5f5;

      .account-text,
      .QRCode-text {
        width: 150px;
        font-size: 18px;
        line-height: 1;
        color: #333;
      }

      .account-text {
        border-right: 1px solid #f5f5f5;
        text-align: left;
      }

      .QRCode-text {
        text-align: right;
      }

      .action {
        color: #27ba9b;
        font-weight: 700;
      }
    }

    .login-form {
      padding: 0 40px;

      .login-form-box {
        .form-action-box {
          margin: 15px 0;
          height: 18px;
          text-align: right;

          .form-action-account,
          .form-action-message {
            display: inline-flex;
            align-items: center;
            font-size: 14px;
            color: #27ba9b;
          }

          .iconfont {
            padding: 2px 2px 0 0;
          }

          // .form-action-message{
          //   display: none;
          // }
          .form-action-account {
            display: none;
          }
        }

        .form {

          .account-box,
          .password-box,
          .phone-box,
          .verification-box {
            position: relative;
            width: 300px;
            height: 36px;
            border: 1px solid #cfcdcd;
            margin-bottom: 28px;

            &>i {
              position: absolute;
              left: 0;
              display: inline-block;
              width: 34px;
              height: 34px;
              line-height: 34px;
              color: white;
              font-size: 20px;
              text-align: center;
              background-color: #cfcdcd;

            }

            input {
              width: 100%;
              height: 100%;
              padding-left: 45px;
              border: none;
              outline: none;
              font-size: 14px;
            }

            input::placeholder {
              color: #cfcdcd;
            }
          }


          .phone-box,
          .verification-box {
            display: none;
          }

          .error-box {
            display: flex;
            align-items: center;
            height: 28px;
            color: #cf4444;

            .iconfont {
              font-size: 14px;
            }

            span {
              font-size: 12px;
            }
          }

          .terms-box {


            .terms-content {
              display: flex;
              font-size: 14px;

              i {
                margin-right: 3px;
                padding-top: 2px;
              }

              .iconyixuanze {
                color: #27ba9b;
              }

              a {
                color: #069;
              }
            }
          }
          .submit{
            display: block;
            width: 100%;
            height: 40px;
            color: #fff;
            line-height: 40px;
            background-color: #27ba9b;
            border: none;
          }
        }
      }
    }
  }
}
</style>