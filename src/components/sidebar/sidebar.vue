<template>
<aside class="sidebar">
  <img src="../../common/img/logo3.png" alt="logo">
  <ul class="routerList">
    <router-link tag="li" v-for="item in items" :key="item.id" :to="item.router" exact>
      <a><i class="fa fa-fw" :class=[item.icon]></i><span>{{item.title}}</span></a>
    </router-link>
  </ul>
</aside>
</template>
<script>
export default {
  name: 'sideBar',
  data() {
    return {
      items: [{
        id: 1,
        icon: 'fa-address-book',
        title: 'CAMPAIGNS',
        router: 'campaignList'
      }, {
        id: 2,
        icon: 'fa-usd',
        title: 'WALLET',
        router: 'wallet'
      }, {
        id: 3,
        icon: 'fa-cog',
        title: 'SETTINGS',
        router: 'setting'
      }, {
        id: 4,
        icon: 'fa-question-circle',
        title: 'FAQ',
        router: 'faq'
      }]
    }
  }
}
</script>
<style lang="scss" scoped>
aside {
    width: 100%;
    height: 100%;
    img {
        max-width: 75%;
        height: auto;
        display: block;
        border-bottom: 1px solid #f9ced0;
        padding: 50px 0;
        margin: 0 auto;
    }
    .routerList {
        padding: 0;
        li {
            list-style: none;
            height: 45px;
            margin-top: 13px;
            padding: 0;
            width: 100%;
            box-sizing: border-box;
            cursor: pointer;
            padding-left: 30px;
            line-height: 45px;
            font-size: 14px;
            border-left: 4px solid transparent;
            > a {
                text-decoration: none;
                display: block;
                width: 100%;
                height: 100%;
                color: #000;
                font-weight: 400;
            }
            i {
                color: #c1272d;
                padding-right: 10px;
                font-size: 18px;
            }
            span{
              vertical-align: top;
            }
            &:hover {
                background-color: #f9ced0;
                border-color: #c1272d;
            }
        }
    }
    .active {
        background-color: #f9ced0;
        border-color: #c1272d!important;
    }
}
</style>
