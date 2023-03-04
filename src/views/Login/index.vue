<template>
  <LoginHeader></LoginHeader>
  <main class="main-login">
    <section class="section-login">
      <div class="login-action">
        <a class="account-text" :class="{ action: loginAction === 'form' }" href="javascript:;"
          @click="loginAction = 'form'">账户登录</a>
        <a class="QRCode-text" :class="{ action: loginAction === 'QRCode' }" href="javascript:;"
          @click="loginAction = 'QRCode'">扫码登录</a>
      </div>
      <div class="login-form" v-show="loginAction === 'form'">
        <div class="login-form-box">
          <div class="form-action-box">
            <a v-if="formLogin" class="form-action-message" href="javascript:;" @click="formLogin = false"><i
                class="iconfont iconxinfeng1"></i>使用短信登录</a>
            <a v-else class="form-action-account" href="javascript:;" @click="formLogin = true"><i
                class="iconfont iconyonghu"></i>使用账号登录</a>
          </div>
          <Form ref="formDom" class="form" :validation-schema="schema" v-slot="{ errors }" autocomplete="off">
            <template v-if="formLogin">
              <div class="account-box">
                <i class="iconfont iconyonghu"></i>
                <Field :class="{ error: errors.account }" name="account" type="text" placeholder="请输入用户名"
                  v-model="form.account" />
                <div class="error-box" v-show="errors.account">
                  <i class="iconfont iconjinggao"></i>
                  <span>{{ errors.account }}</span>
                </div>
              </div>
              <div class="password-box">
                <i class="iconfont iconsuoding_o"></i>
                <Field :class="{ error: errors.password }" name="password" type="password" placeholder="请输入密码"
                  v-model="form.password" />
                <div class="error-box" v-show="errors.password">
                  <i class="iconfont iconjinggao"></i>
                  <span>{{ errors.password }}</span>
                </div>
              </div>
            </template >
            <template  v-else>
              <div class="phone-box">
                <i class="iconfont iconshouji"></i>
                <Field :class="{ error: errors.mobile }" name="mobile" type="text" placeholder="请输入手机号"
                  v-model="form.mobile" />
                <div class="error-box" v-show="errors.mobile">
                  <i class="iconfont iconjinggao"></i>
                  <span>{{ errors.mobile }}</span>
                </div>
              </div>
              <div class="verification-box">
                <i class="iconfont icon24gl-shieldCheck"></i>
                <Field :class="{ error: errors.code }" name="code" type="text" placeholder="请输入验证码" v-model="form.code" />
                <a class="send-verification" href="javascript:;">发送验证码</a>
                <div class="error-box" v-show="errors.code">
                  <i class="iconfont iconjinggao"></i>
                  <span>{{ errors.code }}</span>
                </div>
              </div>
            </template>
            <div class="terms-box">
              <div class="terms-content">
                <i v-if="checkedTerms" class="iconfont iconyixuanze" @click="checkedTerms = false"></i>
                <i v-else class="iconfont iconweixuanze" @click="checkedTerms = true"></i>
                <span>我已同意</span>
                <a href="javascript:;">《隐私条款》</a>
                <span>和</span>
                <a href="javascript:;">《服务条款》</a>
              </div>
              <div class="error-box" v-show="!checkedTerms">
                <i class="iconfont iconjinggao"></i>
                <span>请勾选登录协议</span>
              </div>
            </div>
            <!-- 声明按钮为button类型，避免form默认事件 -->
            <button class="submit" type="button" @click="login">登录</button>
          </Form>
          <div class="register-box">
            <a class="login-qq"
              href="https://graph.qq.com/oauth2.0/authorize?client_id=101941968&response_type=token&scope=all&redirect_uri=http%3A%2F%2Ferabbit.itheima.net%2F%23%2Flogin%2Fcallback">
              <img src="../../assets/images/Connect_QQ_logo.png">
            </a>
            <div class="register-right">
              <a class="forget">忘记密码</a>
              <a class="register">免费注册</a>
            </div>
          </div>
        </div>
      </div>
      <div class="login-QRCode" v-show="loginAction === 'QRCode'">
        <img src="../../assets/images/login-qrcode.jpg" alt="">
        <p class="login-QRcode-text">
          打开
          <a href="javascript:;">小兔鲜App</a>
          扫码登录
        </p>
      </div>
    </section>
  </main>
  <LoginFooter></LoginFooter>
</template>

<script lang="ts">
import { ref, watch } from 'vue';
import { Form, Field } from 'vee-validate'
import schema from '@/utils/vee-validate-schema'
import { userStore } from '@/store/userInfo'
import LoginHeader from '@/views/Login/components/LoginHeader/index.vue'
import LoginFooter from '@/views/Login/components/LoginFooter/index.vue'
</script>
<script setup lang="ts">
// 控制账户登录或者扫码登录
let loginAction = ref('form')
// 控制账号登录或短信登录
let formLogin = ref(true)
// 检查是否勾选协议
let checkedTerms = ref(true)
let form = ref({
  account: '',
  password: '',
  mobile: '',
  code: '',
})
const userInfo = userStore()
const formDom = ref<HTMLFormElement>()
// 监视切换登录方式，情况表单内容和验证状态
watch(formLogin, async () => {
  form.value = {
    account: '',
    password: '',
    mobile: '',
    code: '',
  }
  formDom.value!.resetForm()
})
// 登录
const login = async () => {
  const validate = await formDom.value!.validate()
  if (validate.results.account.valid && validate.results.password.valid) {
    const { account, password } = form.value
    userInfo.getUserInfo({ account, password })
  }
}
</script>

<style lang="less" scoped>
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
        transition: none;
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
        }

        .form {

          .account-box,
          .password-box,
          .phone-box,
          .verification-box {
            position: relative;
            width: 300px;
            height: 36px;
            // border: 1px solid #cfcdcd;
            margin-bottom: 28px;

            &>i {
              position: absolute;
              top: 1px;
              left: 1px;
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
              border: 1px solid #cfcdcd;
              outline: none;
              font-size: 14px;

              &.error {
                border-color: #cf4444;
              }

              &:focus {
                border-color: #27ba9b;
              }
            }

            input::placeholder {
              color: #cfcdcd;
            }

          }

          .verification-box {
            position: relative;

            .send-verification {
              position: absolute;
              top: 1px;
              right: 1px;
              display: inline-block;
              height: 34px;
              width: 90px;
              line-height: 34px;
              color: #666;
              background-color: #f5f5f5;
              text-align: center;
              font-size: 14px;
            }
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
            height: 46px;

            .terms-content {
              display: flex;
              font-size: 14px;

              i {
                padding-top: 2px;
                margin-right: 2px;
              }

              .iconyixuanze {
                color: #27ba9b;
              }

              a {
                color: #069;
              }
            }
          }

          .submit {
            display: block;
            width: 100%;
            height: 40px;
            margin-bottom: 20px;
            color: #fff;
            line-height: 40px;
            background-color: #27ba9b;
            border: none;
          }

          .focusAction {
            border: 1px #27ba9b solid;
          }


        }

        .register-box {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .register-right {
            font-size: 14px;

            .forget,
            .register {
              color: #999;
            }

            .forget {
              margin-right: 5px;
            }
          }
        }
      }
    }

    .login-QRCode {
      margin-top: 40px;
      text-align: center;

      .login-QRcode-text {
        margin-top: 20px;
        font-size: 14px;

        a {
          font-size: 16px;
          color: #27ba9b;
        }
      }
    }
  }
}

</style>