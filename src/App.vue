<template>
  <div id="app">
    <el-container>
      <!-- <div :class="searchBarFixed ? 'hold' :'no-hold'"></div> -->
      <el-header class="hidden-xs-only" :class="searchBarFixed ? 'isFixed' :''">
        <div class="header-tip" :class="{ 'hidden-tip': hidden }">
          There is no official public sale or listing for Raze Network. Please be aware of scam or fraud
          <i class="el-icon-close" @click="hidden = true"></i>
        </div>
        <div class="cui-content-center" style="height: 4.5rem">
          <el-row type="flex" justify="space-between" class="menu">
            <el-col :span="8" class="hy-text-left">
              <el-image :src="logo" class="logo" @click="goAnchor('#top')"></el-image>
            </el-col>
            <el-col :span="16" class="menu-width">
              <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" :text-color="textColor"
                       active-text-color="#de637a" :background-color="backgroundColor">
                <el-menu-item index="1">
                  <div @click="goAnchor('#Technology')">
                    <span>Technology</span>
                  </div>
                </el-menu-item>
                <el-menu-item index="2">
                  <div @click="goAnchor('#Products')">
                    <span>Products</span>
                  </div>
                </el-menu-item>
                <el-menu-item index="3">
                  <div @click="goAnchor('#Token')">
                    <span>Token</span>
                  </div>
                </el-menu-item>
                <el-menu-item index="4">
                  <div @click="goAnchor('#Roadmap')">
                    <span>Roadmap</span>
                  </div>
                </el-menu-item>
                <el-menu-item index="5" class="raze-docs">
                  <span>Docs<i class="el-icon-caret-right"></i></span>
                  <div class="pop big">
                    <a target="_blank" href="https://docs.raze.network/">Project Wiki</a>
                    <a target="_blank" href="https://docsend.com/view/5yajjk29muy8nqm3">One Pager</a>
                    <a target="_blank" href="https://docsend.com/view/3p2pszj9cqqpjrzs">Marketing Deck</a>
                  </div>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </div>
      </el-header>
      <el-header class="hidden-sm-and-up background-obb" :class="searchBarFixed ? 'isFixed' :''">
        <div class="header-tip" :class="{ 'hidden-tip': hidden }">
          <p>There is no official public sale or listing for Raze Network. Please be aware of scam or fraud</p>
          <i class="el-icon-close" @click="hidden = true"></i>
        </div>
        <el-row type="flex" justify="space-between" align="middle" class="nav-mobile">
          <el-col :span="5">
            <el-image :src="logo" class="logo" @click="goAnchor('#top')"></el-image>
          </el-col>
          <el-col :span="19" class="header-nav-overflow position-relative">
            <div class="headMoreBtnBox" @click="showMobileMenu = !showMobileMenu">
              <div class="hamburger" id="hamburger-5" :class="{ 'is-mobile-active': showMobileMenu }">
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
              </div>
            </div>
            <div class="mobile-menu" :class="{ 'show-menu': showMobileMenu }">
              <div @click="goAnchor('#Technology')" :class="{ 'menu-select': activeIndex === '1' }">Technology</div>
              <div @click="goAnchor('#Products')" :class="{ 'menu-select': activeIndex === '2' }">Products</div>
              <div @click="goAnchor('#Token')" :class="{ 'menu-select': activeIndex === '3' }">Token</div>
              <div @click="goAnchor('#Roadmap')" :class="{ 'menu-select': activeIndex === '4' }">Roadmap</div>
              <div class="raze-mobile-docs" @click="isShowDoc" :class="{ 'show_pop': showDoc, 'hidden_pop': !showDoc }">
                <span>Docs<i class="el-icon-caret-right"></i></span>
                <div class="pop big">
                  <a target="_blank" href="https://docs.raze.network/">Project Wiki</a>
                  <a target="_blank" href="https://docsend.com/view/5yajjk29muy8nqm3">One Pager</a>
                  <a target="_blank" href="https://docsend.com/view/3p2pszj9cqqpjrzs">Marketing Deck</a>
                </div>
              </div>
            </div>
            <!-- <el-menu :default-active="activeIndex" class="el-menu d-flex" mode="horizontal" :text-color="textColor"
                       active-text-color="#de637a" :background-color="backgroundColor">
                <el-menu-item index="1">
                  <div @click="goAnchor('#Technology')">Technology</div>
                </el-menu-item>
                <el-menu-item index="2">
                  <div @click="goAnchor('#Products')">Products</div>
                </el-menu-item>
                <el-menu-item index="3">
                  <div @click="goAnchor('#Token')">Token</div>
                </el-menu-item>
                <el-menu-item index="4">
                  <div @click="goAnchor('#Roadmap')">Roadmap</div>
                </el-menu-item>
                <el-menu-item index="5" class="raze-docs">
                  <span>Docs<i class="el-icon-caret-right"></i></span>
                  <div class="pop big">
                    <a target="_blank" href="https://docs.raze.network/">Project Wiki</a>
                    <a target="_blank" href="https://docsend.com/view/5yajjk29muy8nqm3">One Pager</a>
                    <a target="_blank" href="https://docsend.com/view/3p2pszj9cqqpjrzs">Marketing Deck</a>
                  </div>
                </el-menu-item>
              </el-menu> -->
          </el-col>
        </el-row>
      </el-header>

      <router-view/>

      <!-- <el-footer class="background-even hy-text-left">
        <div class="cui-content-center">
          <el-row>
            <el-col :xs="22" :sm="12" class="el-col-xs-pull-1 el-col-xs-push-1">
              <h3>{{$t("footer.tools")}}</h3>
              <p @click="toComingSoon">{{$t("footer.desktop")}}</p>
              <p @click="toComingSoon">{{$t("footer.paper")}}</p>
              <p @click="toComingSoon">{{$t("footer.mining")}}</p>
              <p @click="toComingSoon">{{$t("footer.software")}}</p>
              <p @click="toComingSoon" class="last-node">{{$t("footer.explorer")}}</p>
            </el-col>
            <el-col :xs="22" :sm="12" class="el-col-xs-pull-1 el-col-xs-push-1">
              <h3>{{$t("footer.support")}}</h3>
              <p @click="toComingSoon">{{$t("footer.easy")}}</p>
              <p @click="toComingSoon">{{$t("footer.wiki")}}</p>
              <p @click="toComingSoon">{{$t("footer.source")}}</p>
              <p @click="toComingSoon" class="last-node">{{$t("footer.contact")}}</p>
            </el-col>
          </el-row>
          <div class="sub last-node">{{$t("footer.copright")}}</div>
        </div>
      </el-footer> -->
    </el-container>
  </div>
</template>

<script>

import url_img from '@/assets/logo.png'
export default {
  name: 'App',
  data() {
    return {
      activeIndex: '',
      logo: url_img,
      searchBarFixed: true,
      openMobileMenu: false,
      isTop: false,
      showLang: false,
      hidden: false,
      showDoc: false,
      showMobileMenu: false,
      backgroundColor: 'transparent',
      issafariBrowser: '',
      textColor: '#fff'
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)

  },
  methods:{
    handleScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      let offsetTop = '';
      if (document.querySelector('#searchBar')) {
        offsetTop = document.querySelector('#searchBar').offsetTop - 1;
      }
      this.isTop = true;
      this.isTop ? this.searchBarFixed = true : this.searchBarFixed = false;
      // this.isTop ? this.textColor = '#000' : this.textColor = '#fff';
      let activeTechnology = document.getElementById('Technology').offsetTop - scrollTop;
      let activeProducts = document.getElementById('Products').offsetTop - scrollTop;
      let activeToken = document.getElementById('Token').offsetTop - scrollTop;
      let activeRoadmap = document.getElementById('Roadmap').offsetTop - scrollTop;
      if (activeTechnology < 0) {
        this.activeIndex = '1';
      } if (activeProducts < 0) {
        this.activeIndex = '2';
      } if (activeToken < 0) {
        this.activeIndex = '3';
      } if (activeRoadmap < 0) {
        this.activeIndex = '4';
      } if (scrollTop <= 200) {
        this.activeIndex = '';
      }
    },
    isShowDoc() {
      this.showDoc = !this.showDoc;
      console.log(this.showDoc);
    },
    openMenu () {
      this.openMobileMenu = !this.openMobileMenu;
    },
    tabLang (lang) {
      this.$i18n.locale= lang;
    },
    goAnchor (selector) {
      // this.activeIndex
      this.showMobileMenu = false;
      this.$el.querySelector(selector).scrollIntoView({ block: 'start', behavior: 'smooth' });
    },
    reload () {
      location.reload();
    },
    toComingSoon () {
      this.$router.push({ path: 'comingSoon'})
    }
  }
}
</script>

<style lang="less">
  body {
    margin: 0;
    background-color: #1a1d27;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin: 0 10px;
  }
  h1, h2, h3 {
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 300;
  }
  strong {
    font-weight: bold;
  }
  .hy-bg-gray {
    background-color: #f6f6f6;
  }
  .hy-bg-blue {
    background-color: #061a39;
    color: #fff;
  }
  .hy-bg-black {
    background-color: #041229;
  }
  .hy-bg-blue h2.title{
    font-weight: 300;
  }
  .hy-bg-blue p{
    color: #fff;
  }
  .hy-bg-blue .icon{
    font-size: 3rem;
    color: #fff;
  }
  .hy-bg-black p{
    color: #fff;
  }
  .hy-bg-black h3{
    color: #fff;
  }
  .text-white {
    color: #fff;
  }
  .hy-text-right {
    text-align: right;
  }
  .hy-text-left {
    text-align: left;
  }
  .hy-black {
    color: #000!important;
  }
  .background-obb {
    background-color: #000 !important;
    color: #fff !important;
  }
  .background-even {
    background-color: #050505!important;
    color: #fff !important;
  }
  .mt-1 {
    margin-top: 0.5rem;
  }
  .mt-2 {
    margin-top: 1rem;
  }
  .mb-3 {
    margin-bottom: 1rem;
  }

  .header-tip {
    background-image: linear-gradient(88deg, #5c00eb 0%, #de637a);
    line-height: 40px;
    height: 40px;
    overflow: hidden;
    transition: height .3s;
    i {
      position: absolute;
      right: 18px;
      top: 10px;
      cursor: pointer;
    }
  }
  .hidden-tip {
    height: 0;
    i {
      top: -30px;
    }
  }
  
  .headMoreBtnBox {
    position: absolute;
    // right: r(20px);
    right: 0;
    top: 50%;
    z-index: 2;
    transform: translateY(-50%) scale(0.6);
    .hamburger {
      padding: r(20px);
    }
  }
  .is-mobile-active {
    -webkit-transform: rotate(
    90deg
    );
        -ms-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        transform: rotate(
    90deg
    );
    .line:first-child {
      -webkit-transform: translateY(15px) rotate(
      45deg
      );
      -ms-transform: translateY(15px) rotate(45deg);
      -o-transform: translateY(15px) rotate(45deg);
      -moz-transform: translateY(15px) rotate(45deg);
      transform: translateY(15px) rotate(
      45deg
      );
      width: 35px;
      -webkit-transform-origin: right;
      -moz-transform-origin: right;
      -ms-transform-origin: right;
      -o-transform-origin: right;
      transform-origin: right;
    }
    .line:nth-child(2) {
      opacity: 0;
    }
    .line:nth-child(3) {
      -webkit-transform: translateY(-11px) rotate(
      -45deg
      );
      -ms-transform: translateY(-11px) rotate(-45deg);
      -o-transform: translateY(-11px) rotate(-45deg);
      -moz-transform: translateY(-11px) rotate(-45deg);
      transform: translateY(-11px) rotate(
      -45deg
      );
      width: 35px;
      -webkit-transform-origin: right;
      -moz-transform-origin: right;
      -ms-transform-origin: right;
      -o-transform-origin: right;
      transform-origin: right;
    }
  }
  .hamburger .line {
    width: 40px;
    height: 4px;
    background-color: #ecf0f1;
    display: block;
    margin: 8px auto;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
  .mobile-menu {
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    position: absolute;
    right: 1rem;
    top: 1.5rem;
    overflow: visible;
    -webkit-transform: translate(0);
    -moz-transform: translate(0);
    -ms-transform: translate(0);
    -o-transform: translate(0);
    transform: translate(0);
    background-color: #181818;
    padding: 0.6rem 0.6rem 0.6rem 2rem;
    font-size: 0.8rem;
    line-height: 2rem;
    text-align: left;
    width: 128px;
    display: none;
  }
  .show-menu {
    display: flex;
  }
  p.last-node, .feature.last-node {
    margin-bottom: 0;
  }
  .raze-docs {
    .pop {
      position: absolute;
      left: 50%;
      bottom: 0.6rem;
      -webkit-transform: translate(-50%, 100%);
      -moz-transform: translate(-50%, 100%);
      -ms-transform: translate(-50%, 100%);
      -o-transform: translate(-50%, 100%);
      transform: translate(-50%, 100%);
      background-color: #000;
      border-radius: 0.04rem;
      padding: 0.5rem 1rem;
      display: none;
      a {
        position: relative;
        font-size: 0.8rem;
        display: block;
        text-align: left;
        line-height: 1.8em;
      }
    }
  }
  .raze-mobile-docs {
    .pop {
      position: relative;
      // position: absolute;
      // left: 50%;
      // bottom: 0.6rem;
      // -webkit-transform: translate(-50%, 100%);
      // -moz-transform: translate(-50%, 100%);
      // -ms-transform: translate(-50%, 100%);
      // -o-transform: translate(-50%, 100%);
      // transform: translate(-50%, 100%);
      // background-color: #000;
      // border-radius: 0.04rem;
      padding: 0.5rem 1rem;
      display: none;
      a {
        position: relative;
        font-size: 0.8rem;
        display: block;
        text-align: left;
        line-height: 1.8em;
        &::before {
          position: absolute;
          left: -14px;
          top: 0;
          content: "";
          width: 1px;
          height: 100%;
          background-color: #444;
        }
        &::after {
          position: absolute;
          left: -14px;
          top: 50%;
          -webkit-transform: translateY(-100%);
          -moz-transform: translateY(-100%);
          -ms-transform: translateY(-100%);
          -o-transform: translateY(-100%);
          transform: translateY(-100%);
          content: "";
          width: 10px;
          height: 1px;
          background-color: #444;
        }
      }
    }
    i.el-icon-caret-right {
      color: #fff;
      margin-right: 0;
      width: auto;
      text-align: left;
      font-size: 12px;
      vertical-align: middle;
      transition: transform 0.5s;
    }
  }
  .show_pop {
    .pop {
      display: block !important;
    }
    span {
      color: #de637a !important;
    }
    i.el-icon-caret-right {
      color: #de637a !important;
      transform: rotate(90deg) !important;
    }
  }
  .hidden_pop {
    .pop {
      display: none !important;
    }
    span {
      color: #fff !important;
    }
    i.el-icon-caret-right {
      color: #fff !important;
      transform: rotate(0deg) !important;
    }
  }
  .menu-select {
    color: #de637a !important;
  }
  @media (min-width: 768px) {
    .raze-docs:hover {
      span {
        color: #de637a !important;
      }
      .pop {
        display: block;
      }
      i.el-icon-caret-right {
        color: #de637a !important;
        transform: rotate(90deg);
      }
    }
  }
  @media (max-width: 768px) {
    .raze-docs {
      .pop {
        left: 0;
      }
    }
    .raze-docs:active {
      .pop {
        display: block;
      }
      i.el-icon-caret-right {
        color: #de637a !important;
        transform: rotate(90deg);
      }
    }
    .mb-3 {
      margin-bottom: 0;
    }
    .el-footer p.last-node {
      margin-bottom: 1rem;
    }
    .header-tip {
      line-height: normal;
      height: 40px;
      overflow: unset;
      p {
        padding-top: 4px;
        width: 80%;
        margin: 0 auto;
      }
    }
    .hidden-tip {
      height: 0;
      overflow: hidden;
      i {
        top: -30px;
      }
    }
  }
  
  @media (max-width: 321px) {
    .header-nav-overflow {
      width: 320px;
      overflow: scroll;
      .el-menu.el-menu--horizontal {
        width: 320px;
      }
    }
  }
</style>
