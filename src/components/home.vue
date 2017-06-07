<template>
<div class="home">
  <div class="homeBody">
    <div class="homeHeader"></div>
    <div class="homeSide"></div>
    <div class="homeContent">
      <div class="userGuide">
        <div class="guideWrapper">
          <p class="tight-margin">Welcome to</p>
          <h1>Star.Store</h1>
          <div class="">
            <p>{{$store.state.count}}</p>
            <button @click="increment">+</button>
            <button @click="decrement">-</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {
  mapState
} from 'vuex'
export default {
  computed: mapState({
    count: state => state.count,
    countAlias: 'count'
  }),
  methods: {
    increment() {
      this.$store.commit('increment')
    },
    decrement() {
      this.$store.commit('decrement')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../common/styles/icon.scss";
.home {
    width: 100%;
    height: 100%;
    position: relative;
    .homeBody {
        height: inherit;
    }
    .homeHeader {
        position: fixed;
        top: 0;
        right: 0;
        left: 230px;
        z-index: 10;
        height: 60px;
        box-sizing: border-box;
        padding: 0 0 0 40px;
        line-height: 60px;
        border-bottom: 1px solid #ccc;
        background-color: #fff;
    }
    .homeSide {
        position: fixed;
        left: 0;
        top: 0;
        height: 100%;
        background-color: #f5f7fa;
        width: 230px;
        z-index: 200;
        border-right: 1px solid #ccc;
        box-sizing: border-box;
    }
    .homeContent {
        width: 100%;
        height: 100%;
        padding-top: 60px;
        padding-left: 230px;
        .userGuide {
            .guideWrapper {
                padding: 10px;
            }
        }
    }

}
</style>
