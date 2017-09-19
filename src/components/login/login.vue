<template>
  <div class="login">
    <h3>登陆界面</h3>
    <div class="sign-in text-center">
      <div class="sign">
        <span>帐号：</span>
        <input type="text" v-model="account" :placeholder="tipsAcc">
      </div>
      <div class="sign">
        <span>密码：</span>
        <input type="password" v-model="passwd" :placeholder="tipsPsd">
      </div>
      <div class="sign text-center">
        <button type="button" name="button" @click="login">登陆</button>
        <router-link to="/signReg">注册账号</router-link>
      </div>
    </div>
    <div class="pt-10 fs-14 color-666 text-center">
      暂不登录，直接去<router-link to="/index" class="color-red">首页</router-link>
    </div>
    <div class="fs-14 color-999 text-center mt-10">
      <span>当前时间:</span>
      {{dateTime()}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data: () => ({
    message: {
      account: window.sessionStorage.getItem('account'),
      passwd: window.sessionStorage.getItem('passwd')
    },
    account: '',
    passwd: '',
    tipsAcc: '',
    tipsPsd: '',
    date: new Date().toLocaleString()
  }),
  methods: {
    login () {
      if (this.account === this.message.account && this.passwd === this.message.passwd) {
        this.$router.push('/index')
        this.$axios.defaults.headers.common['token'] = '8751a1cbe4b2425787e802ef13d5617a'
        window.localStorage.setItem('token', '8751a1cbe4b2425787e802ef13d5617a')
        console.log(this.$axios.defaults.headers.common['token'])
      }
      if (this.account === '') {
        this.tipsAcc = '请输入账号'
      }
      if (this.passwd === '') {
        this.tipsPsd = '请输入密码'
      }
    },
    dateTime () {
      setInterval(() => {
        this.date = new Date().toLocaleString()
      }, 1000)
      return this.date
    }
  }
}
</script>
<style lang="scss" scoped>
  .login {
    width: 100%;
    padding: 15px;
    // box-shadow: 0 0 3px rgba(0, 0, 0, .25);
    background-color: #fff;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);

    h3 {
      font-size: 16px;
      text-align: center;
      font-weight: 400;
      margin-bottom: 10px;
      color: #666;
    }
    .sign {
      margin-bottom: 10px;
      display: inline-block;

      span {
        font-size: 14px;
        line-height: 34px;
        color: #999;
      }
      input {
        border: 1px solid #ddd;
        width: 250px;
        height: 34px;
        text-indent: 0.5em;
      }
      button {
        width: 100px;
        height: 34px;
        border: 0;
        background-color: #222;
        color: #fff;
        cursor: pointer;
        outline: medium;
      }
      a{
        color: #222;
        font-size: 14px;
        margin-left: 10px;
      }
    }
  }
</style>
