<template>
  <div class="home">
    <!-- banner部分 -->
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="slide in dataImg">
        <router-link :to="slide.link">
          <img :src="slide.url">
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <!-- 分类 -->
    <div class="home-column">
      <div class="column" v-for="item in column">
        <router-link :to="item.link">
          <img :src="item.url" />
          <p>{{item.name}}</p>
        </router-link>
      </div>
    </div>
    <!-- 热门排行 -->
    <div class="home-ranking">
      <div class="ranking-title clearfix mt-10 mr-10 ml-10 border-b">
        <h3 class="left">聚划算热卖排行</h3>
        <h3 class="right color-red">TOP3</h3>
      </div>
      <div class="ranking-warp">
        <div class="ranking-list clearfix" v-for="(item,index) in rankDATA">
          <router-link to="/index/" class="clearfix">
            <div class="left serial-number">{{index+1}}</div>
            <div class="left ranking-pic">
              <img :src="item.url" alt="">
            </div>
            <div class="left pl-10 pr-10">
              <h4 class="color-666 fs-14 pt-10">已售{{item.nums}}</h4>
              <p class="fs-12 color-999"><span class="color-red">{{item.discount}}</span>折
                <span class="line-through">{{item.originalprice}}</span>
              </p>
            </div>
            <div class="right pr-10 now-price color-red">￥{{item.price}}</div>
          </router-link>
        </div>
      </div>
      <div class="ranking-more bg-f7f7f7 color-666 ml-10 mr-10 mt-10 text-center" @click="loadingMore">
        点击加载更多聚划算，逛起来！
      </div>
    </div>
    <!-- 商品分块 -->
    <div class="home-large">
      <div class="clearfix large-list" :class="item.colorname" v-for="item in columnList">
        <div class="left fs-14 color-fff text-center">
          {{item.name}}
        </div>
        <div class="right bg-fff border-t">
          <div class="large-list-name left fs-14 text-center" v-for="column in item.list">
            <router-link :to="column.link" :class="{'active': column.flag}">
              {{column.name}}
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- 首页底部 -->
    <div class="home-footer text-center">
      <a>标准版</a>
      <a>电脑版</a>
      <p class="fs-12 pt-10">@Copyright (c) 2017 Copyright Holder All Rights Reserved.</p>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'home',
  data: () => ({
    swiperOption: {
      notNextTick: true,
      pagination: '.swiper-pagination',
      slidesPerView: 'auto',
      autoplay: 3000,
      centeredSlides: true,
      paginationClickable: true,
      spaceBetween: 3,
      autoplayDisableOnInteraction: false
    },
    rankDATA: [],
    dataImg: [{
      url: require('../../../src/assets/pic1.jpg'),
      link: '/index/'
    },
    {
      url: require('../../../src/assets/pic2.jpg'),
      link: '/index/'
    },
    {
      url: require('../../../src/assets/pic3.jpg'),
      link: '/index/'
    },
    {
      url: require('../../../src/assets/pic4.jpg'),
      link: '/index/'
    },
    {
      url: require('../../../src/assets/pic5.jpg'),
      link: '/index/'
    },
    {
      url: require('../../../src/assets/pic6.jpg'),
      link: '/index/'
    }],
    column: [{
      url: require('../../../src/assets/images/title1.png'),
      name: '商品',
      link: '/index/'
    },
    {
      url: require('../../../src/assets/images/title2.png'),
      name: '生活',
      link: '/index/'
    },
    {
      url: require('../../../src/assets/images/title3.png'),
      name: '品牌',
      link: '/index/'
    },
    {
      url: require('../../../src/assets/images/title4.png'),
      name: '聚宝盆',
      link: '/index/'
    },
    {
      url: require('../../../src/assets/images/title5.png'),
      name: '聚名品',
      link: '/index/'
    },
    {
      url: require('../../../src/assets/images/title6.png'),
      name: '聚家装',
      link: '/index/'
    },
    {
      url: require('../../../src/assets/images/title7.png'),
      name: '聚透',
      link: '/index/'
    },
    {
      url: require('../../../src/assets/images/title8.png'),
      name: '客户端',
      link: '/index/'
    }]
  }),
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    },
    ...mapState({
      columnList: state => state.column.columnList
    })
  },
  methods: {
    getRankDATA () {
      const self = this
      this.$axios.get('http://localhost:8080/static/data/ranking.json')
        .then(function (data) {
          self.rankDATA = data.data
        })
    },
    loadingMore () {
      const self = this
      this.$axios.get('http://localhost:8080/static/data/ranking.json')
        .then(function (data) {
          self.$set(self.$data, 'rankDATA', self.rankDATA.concat(data.data))
        })
    }
  },
  mounted () {
    this.getRankDATA()
  }
}
</script>
<style lang="scss" scoped>
  .swiper-container-horizontal {
    margin-top: 10px;

    img {
      width: 100%;
      display: block;
    }
  }

  .home-column {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    background-color: #fafafb;
    padding: 10px 0;

    .column {
      width: 25%;
      padding: 5px 0;

      img {
        display: inline-block;
        width: 50%;
      }

      p {
        font-size: 14px;
        color: #666;
      }
    }
  }

  .home-ranking {
    .ranking-title {
      h3 {
        font-size: 15px;
        font-weight: normal;
        line-height: 34px;
      }
    }

    .ranking-more {
      height: 34px;
      line-height: 34px;

      a {
        display: block;
      }
    }

    .ranking-list {
      margin: 10px 10px 0;
      // padding: 5px 0;
      background-color: #f4f4f4;
      height: 61px;

      .serial-number {
        width: 15%;
        height: 100%;
        line-height: 61px;
        text-align: center;
        background-color: #f60;
        color: #fff;
      }

      .now-price {
        line-height: 61px;
      }

      .ranking-pic {
        height: 100%;

        img {
          display: block;
          height: 100%;
        }
      }
    }
  }

  .home-large {
    width: 96%;
    margin: 0 auto;

    .large-list {
      margin: 10px 0;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      box-sizing: border-box;

      .left {
        width: 20%;
        box-sizing: border-box;
      }
      .right {
        width: 80%;
        border-left: 1px solid #ddd;
        box-sizing: border-box;

        .large-list-name {
          box-sizing: border-box;
          width: 33.33%;
          border: 1px solid #ddd;
          border-top: 0;
          border-left: 0;
          line-height: 34px;
        }

      }
    }

    a {
      color: #666;
    }

    .active {
      color: #f20;
    }
  }

  .home-footer {
    background-color: #f7f7f7;
    padding: 15px;

    a {
      color: #666;
      font-size: 13px;
    }
  }

  .red {
    background-color: #FF3366;
  }
  .green {
    background-color: #99CC66;
  }
  .gray {
    background-color: gray;
  }
</style>
