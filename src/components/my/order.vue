<template>
  <div class="order">
    <div class="clearfix vip-head">
      <router-link to="/vip" class="vip-back left fs-14 color-999" @click="histroy">< 返回</router-link>
      <span>个人订单</span>
      <button type="button" name="button" class="vip-exit right" @click="exit">退出</button>
    </div>
    <div class="order-wrap pt-10 pb-10">
      <div class="order-list">
        <div class="order-list-l left">
          <img src="https://m.360buyimg.com/n12/jfs/t6358/175/1554019318/140288/acd06994/59546bcbN59d7af1b.jpg!q70.jpg" />
        </div>
        <div class="order-list-r left">
          <h4>可口可乐</h4>
          <p class="ellipsis-1">喝可口可乐赢取王者皮肤</p>
        </div>
        <div class="order-list-rt right">
          <router-link to="/buy/1">购买</router-link>
          <router-link to="/buy/1">查看</router-link>
        </div>
      </div>
      <div class="order-list">
        <div class="order-list-l left">
          <img src="https://m.360buyimg.com/n12/jfs/t7579/348/1095898838/117733/bc9e690/599a6d6cNf387b3df.jpg!q70.jpg" />
        </div>
        <div class="order-list-r left">
          <h4>幸福蛋糕</h4>
          <p class="ellipsis-1">生日蛋糕同城配送</p>
        </div>
        <div class="order-list-rt right">
          <router-link to="/buy/2">购买</router-link>
          <router-link to="/buy/2">查看</router-link>
        </div>
      </div>
      <div class="order-list">
        <div class="order-list-l left">
          <img src="https://m.360buyimg.com/n12/jfs/t8491/252/113741437/338547/65c5edce/59a0f8f9N45c76bee.jpg!q70.jpg" />
        </div>
        <div class="order-list-r left">
          <h4>秋季T恤</h4>
          <p class="ellipsis-1">2017最新款-秋季新款T恤</p>
        </div>
        <div class="order-list-rt right">
          <router-link to="/buy/3">购买</router-link>
          <router-link to="/buy/3">查看</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'order',
  data: () => ({
    id: 0
  }),
  methods: {
    exit () {
      this.$store.commit('exit', this.$router)
    },
    histroy () {
      this.$store.commit('histroy', this.$router)
    }
  }
}
</script>
<style lang="scss" scoped>
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
.order-wrap {
  // margin-top: 10px;

  .order-list {
    overflow: hidden;
    margin: 10px 5px 0;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;

    .order-list-l {
      margin-right: 10px;
      width: 60px;
      height: 60px;
      background-color: #fafafa;

      img{
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .order-list-r {
      width: 150px;

      h4 {
        color: #666;
        font-size: 14px;
        line-height: 28px;
        font-weight: 300;
      }

      p {
        font-size: 13px;
        color: #999;
      }
    }
    .order-list-rt {
      width: 60px;
      height: 60px;
      border: 1px solid #f1f1f1;

      a {
        display: block;
        height: 30px;
        box-sizing: border-box;
        line-height: 30px;
        color: #666;
        font-size: 12px;
        text-align: center;

        &:last-child{
          border-top: 1px solid #f1f1f1;
        }
      }
    }
  }
}
</style>
