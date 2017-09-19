<template>
  <div class="navbar">
    <ul>
      <li v-for="item in navData">
        <router-link :to="item.link">{{item.name}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'nav',
  data: () => ({
    navData: [{
      name: '首页',
      link: '/index/'
    },
    {
      name: '商品列表',
      link: '/shop'
    },
    {
      name: '会员',
      link: '/vip'
    }]
  })
}
</script>
<style lang="scss" scoped>
  .navbar {
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    height: 40px;

    li {
      height: 40px;
      line-height: 40px;
      display: inline-block;
      margin: 0 5px;
      box-sizing: border-box;

      a {
        display: block;
        color: #666;
        height: 40px;
        padding: 0 15px;
        box-sizing: border-box;
      }

      .router-link-exact-active{
        color: #5e67a5;
        border-bottom: 2px solid #5e67a5;
      }
    }
  }
</style>
