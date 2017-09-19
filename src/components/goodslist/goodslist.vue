<template>
  <div class='goods-warp'>
    <div class="goods-list">
      <div class="goods" v-for="item in data">
        <router-link to="/index/" class="clearfix">
          <div class="goods-img left">
            <img :src="item.url" alt="">
          </div>
          <div class="goods-trac right">
            <h4>{{item.name}}</h4>
            <p>{{item.trac}}</p>
            <div class="clearfix">
              <p class="left">喜欢{{item.like}}</p>
              <p class="right">￥{{item.price}}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'goodslist',
  data: () => ({
    data: []
  }),
  methods: {
    getINFO () {
      const self = this
      this.$axios.get('http://localhost:8080/static/data/goodslist.json')
        .then(function (data) {
          self.data = data.data
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    loadMORE () {
      let stop = 0
      let ctop = document.documentElement.clientHeight
      let btop = 0
      const self = this
      window.onscroll = function () {
        btop = document.body.scrollHeight
        stop = document.body.scrollTop
        if (stop + ctop === btop) {
          self.$axios.get('http://localhost:8080/static/data/goodslist.json')
            .then(function (data) {
              self.$set(self.$data, 'data', self.data.concat(data.data))
            })
            .catch(function (error) {
              console.log(error)
            })
        }
      }
    }
  },
  mounted () {
    this.getINFO()
    this.loadMORE()
  }
}
</script>
<style lang="scss" scoped>
  .goods {
    padding-left: 5px;
    padding-right: 5px;
    padding-bottom: 10px;
    margin: 10px 0;
    border-bottom: 1px solid #eee;

    .goods-img {
      width: 24%;

      img {
        display: block;
        width: 100%;
      }
    }

    .goods-trac {
      width: 65%;
      color: #666;

      h4 {
        font-size: 14px;
      }

      p {
        font-size: 12px;
      }
    }
  }
</style>
