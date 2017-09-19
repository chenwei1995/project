<template>
  <div class="vipCenter">
    <div class="clearfix vip-head">
      <router-link to="/index" class="vip-back left fs-14 color-999">< 首页</router-link>
      <span>个人中心</span>
      <button type="button" name="button" class="vip-exit right" @click="exit">退出</button>
    </div>
    <div class="clearfix vip-info">
      <div class="vip-logo left">
        <img :src="info.url" alt="">
      </div>
      <div class="vip-name left">
        <p>{{info.name}}</p>
        <p>ID {{info.id}}</p>
      </div>
    </div>
    <div class="clearfix vip-center-nav">
      <ul>
        <li><router-link to="/order">订单</router-link></li>
        <li><router-link to="#">收藏</router-link></li>
        <li><router-link to="#">推荐</router-link></li>
      </ul>
    </div>
    <div class="clearfix vip-change-info">
      <ul>
        <li><router-link to="#">修改个人资料</router-link></li>
        <li><router-link to="#">修改密码</router-link></li>
      </ul>
    </div>
    <div class="vip-footer">
      <router-link to="/index">首页</router-link>
      <router-link to="/shop">商品列表</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'vipCenter',
  data: () => ({
    info: {
      url: require('../../assets/images/title6.png'),
      name: '五棱面包车',
      id: '145164789'
    }
  }),
  methods: {
    exit () {
      this.$store.commit('exit', this.$router)
    }
  }
}
</script>
<style lang="scss" scoped>
  .vipCenter {
    background-color: #eee;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }
  .vip-head {
    height: 45px;
    background-color: #fff;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.35);
    text-align: center;
    font-size: 16px;
    line-height: 45px;
    font-family: 'microsoft yahei';
    position: relative;

    .vip-back {
      background: none;
      border: 0;
      margin-left: 10px;
      line-height: 45px;
      position: relative;
      z-index: 1;
    }

    .vip-exit {
      background: none;
      border: 0;
      margin-right: 10px;
      line-height: 45px;
      position: relative;
      z-index: 1;
    }

    span {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
    }
  }
  .vip-info {
    margin: 10px auto;
    background-color: #fff;
    padding: 10px 0;

    .vip-logo {
      width: 50px;
      height: 50px;
      margin: 0 10px;

      img {
        display: block;
        width: 100%;
      }
    }

    .vip-name {
      line-height: 25px;
      font-size: 14px;
      font-family: 'microsoft yahei';
      color: #666;
    }
  }
  .vip-center-nav {
    text-align: center;
    font-size: 0;
    background-color: #fff;

    li {
      display: inline-block;
      font-size: 14px;
      line-height: 45px;
      width: 33.33%;
      border-right: 1px solid #eee;
      box-sizing: border-box;

      &:last-child {
        border-right: 0;
      }

      a {
        color: #666;
        font-family: 'microsoft yahei';
        display: block;
      }
    }
  }
  .vip-change-info {
    background-color: #fff;
    margin-top: 10px;

    li {
      line-height: 45px;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;

      &:last-child {
        border-bottom: 0;
      }

      a {
        display: block;
        text-indent: 1em;
        color: #666;
        font-family: 'microsoft yahei';
        font-size: 14px;
      }
    }
  }
  .vip-footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 45px;
    line-height: 45px;
    font-size: 14px;
    background-color: #fff;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
    text-align: center;
    display: flex;

    a {
      flex: 1;
      color: #666;
      box-sizing: border-box;

      &:first-child {
        border-right: 1px solid #eee;
      }
    }
  }
</style>
