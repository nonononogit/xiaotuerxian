<template>
  <footer class="footer">
    <div class="copyright container">
      <div class="footer-nav">
        <a href="javascript:;">关于我们</a>
        <a href="javascript:;">帮助中心</a>
        <a href="javascript:;">售后服务</a>
        <a href="javascript:;">配送与验收</a>
        <a href="javascript:;">商务合作</a>
        <a href="javascript:;">搜索推荐</a>
        <a href="javascript:;">友情链接</a>
      </div>
      <p>Copyright © 小兔鲜儿</p>
    </div>
  </footer>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.footer {
  background-color: white;

  .copyright {
    height: 170px;
    padding-top: 40px;

    .footer-nav {
      text-align: center;

      a {
        display: inline-block;
        font-size: 14px;
        line-height: 1;
        padding: 0 10px;
        color: #999999;
        border-right: 1px solid #ccc;
      }

      a:last-child {
        border: none;
      }
    }

    p {

      font-size: 14px;
      margin-top: 20px;
      color: #999;
      text-align: center;
    }
  }
}
</style>