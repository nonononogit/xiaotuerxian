<template>
  <header class="header-login">
    <div class="container">
      <div class="logo-box">
        <router-link class="logo-item" to="/home"></router-link>
      </div>
      <div class="login-welcome">
        欢迎登录
      </div>
      <div class="to-home">
        <router-link to="/home">
          <span>进入网站首页</span>
          <i class="iconfont iconxiangyoujiantou"></i>
          <i class="iconfont iconxiangyoujiantou"></i>
        </router-link>
      </div>
    </div>
  </header>
</template>

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
      a {
        color: #333;
      }

      .iconfont {
        font-size: 14px;
        color: #27ba9b;
        letter-spacing: -5px; // 减少字符间距
      }
    }
  }
}

</style>