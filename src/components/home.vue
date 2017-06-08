<template>
<div class="home">
  <div class="homeBody">
    <div class="homeHeader">
      <div class="panel">
        <div class="info">{{DESC}}</div>
        <div class="user">
          <span>用户信息</span>
          <i class="el-icon-caret-bottom"></i>
          <div class="logout">LOGOUT</div>
        </div>
      </div>
    </div>
    <div class="homeSide">
      <mySidebar></mySidebar>
    </div>
    <div class="homeContent">
      <router-view></router-view>
    </div>
  </div>
</div>
</template>

<script>
import sideBar from './sidebar/sidebar.vue'
export default {
  data() {
    return {
      DESC: 'CAMPAIGNS'
    }
  },
  computed() {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData() {
      let path = this.$route.path.split('/')
      let num = path.length - 1
      if (path[num]) {
        if (path[num] === 'campaignList') {
          this.DESC = 'CAMPAIGNS'
        } else if (path[num] === 'wallet') {
          this.DESC = 'WALLET'
        } else if (path[num] === 'setting') {
          this.DESC = 'SETTING'
        } else if (path[num] === 'faq') {
          this.DESC = 'FAQ'
        }
      }
    }
  },
  components: {
    mySidebar: sideBar
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
        .panel {
            width: 100%;
            height: 100%;
            .user {
                position: absolute;
                top: 0;
                right: 40px;
                i {
                    margin-left: 15px;
                    font-size: 12px;
                    color: #f9ced0;
                }
                .logout {
                    position: absolute;
                    top: 70px;
                    right: 0;
                    padding: 15px 20px;
                    border-radius: 5px;
                    border: 1px solid #f9ced0;
                }
            }
        }
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
