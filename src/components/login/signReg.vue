<template>
  <div class="login">
    <h3>注册页面</h3>
    <div class="sign-in">
      <div class="sign">
        <span>帐号：</span>
        <input type="text" v-model="account">
      </div>
      <div class="sign">
        <span>密码：</span>
        <input type="password" v-model="passwd">
      </div>
      <div class="sign text-center">
        <button type="button" name="button" @click="signReg">注册</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data: () => ({
    account: '',
    passwd: ''
  }),
  methods: {
    signReg () {
      if (this.account === '' || this.passwd === '') {
        console.log('不能为空')
        return
      }
      window.sessionStorage.setItem('account', this.account)
      window.sessionStorage.setItem('passwd', this.passwd)
      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss" scoped>
  .login {
    width: 300px;
    padding: 15px;
    box-shadow: 0 0 3px rgba(0, 0, 0, .25);
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
        width: 100%;
        height: 34px;
        border: 0;
        background-color: #666;
        color: #fff;
        cursor: pointer;
        outline: medium;
      }
      a{
        color: #06f;
        font-size: 14px;
        margin-left: 10px;
      }
    }
  }
</style>
