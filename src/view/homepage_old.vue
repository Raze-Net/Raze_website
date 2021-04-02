<template>
  <div class="main">
    <div id="top"></div>
    <section class="position-relative d-flex align-center first-section-height py-0" :style="{height: clientHeight}">
      <!-- <wave></wave> -->
      <wave-more></wave-more>
      <!-- <img :src="homeBg" alt="" class="first-section-bg"> -->

      <div class="breathe-btn first-section-bg" :style="breatheStyle"></div>
      <div class="first-section">
        <div class="banner-text" :style="bannerStyle">
          <h2 :style="bannerTextStyle">Building a Cross-chain Privacy Middleware for DeFi and Web3.0</h2>
          <p :style="bannerTextPStyle">Raze Network is a Substrate-based Cross-chain Privacy Protocol for the Polkadot Ecosystem.</p>
          <el-row type="flex" justify="center" class="banner-btn">
            <el-col>
              <div class="first-play">
                <el-button @click="toWhitepaper">
                  <img :src="doc" alt="">
                  Whitepaper
                </el-button>
              </div>
            </el-col>
            <el-col>
              <div class="first-polkadot d-flex align-center justify-center cui-pointer" @click="toPolkadot">
                <img :src="polkadot" alt="">
                <div>
                  <div>Powered by</div>
                  <b>Polkadot</b>
                </div>
              </div>
            </el-col>
          </el-row>
          <!-- <div class="banner-line">
            Join our Community
            <div class="right-line"></div>
          </div>
          <div class="banner-link">
            <a href="https://t.me/Raze_Net">
              <img :src="telegram" alt="">
            </a>
            <a href="https://twitter.com/R4ZE_Network">
              <img :src="twitter" alt="">
            </a>
            <a href="mailto:contact@raze.network">
              <img :src="email" alt="">
            </a>
            <a href="https://raze.network">
              <img :src="website" alt="">
            </a>
            <a href="https://github.com/Raze-Net">
              <img :src="github" alt="">
            </a>
            <a href="https://raze-net.medium.com/">
              <img :src="medium" alt="">
            </a>
          </div> -->
        </div>
      </div>
    </section>
    <div class="cui-content-center">
      <section class="pb-0">
        <div class="second-section">
          <h3>What is Raze Network?</h3>
          <p class="mt-4">Raze Network is a Substrate-based, cross-chain privacy protocol for the Polkadot ecosystem. It is built as a native privacy layer that can provide end-to-end anonymity for the entire DeFi and Web3.0 stack. The Raze Network applies zkSNARKs to the Zether framework to build a second-layer decentralized anonymous module. It will then be imported as a substrate-based smart contract. The objective of Raze Network is to enable cross-chain privacy-preserving payment and trading systems, while protecting the transparency of your assets and behaviours from  surveillance.</p>
          <div class="network d-flex justify-center">
            <!-- <div class="network-image1">
              <div>
                <img :src="network1" alt="">
                <p>Token Sender</p>
              </div>
            </div>
            <div class="network-image2">
              <img :src="network2" alt="">
            </div>
            <div class="network-image3">
              <div>
                <img :src="network3" alt="">
                <p>Token Receiver</p>
              </div>
            </div> -->
            <img :src="network4" alt="">
          </div>
        </div>
      </section>
      <div id="Technology"></div>
      <section class="pb-0 pt-0">
        <div class="thirt-section">
          <h3>How Raze Network works?</h3>
          <el-row  justify="space-between">
            <el-col :sm="12" :xs="24">
              <p class="text-benchmark">
                The underlying logic of Raze Network is to mint private tokens from base tokens on the contract at a minting value ratio of 1:1. 
                zkSNARKs are key to maintaining anonymity, while also providing the required information for data parsing. 
                It will have three technical abilities: <b>Mint, Transfer</b> and <b>Redeem</b>
              </p>
              <p class="mt-5">
                <b>Mint:</b> The mint function will convert any token into an <br>anonymized version of itself.
              </p>
              <p class="mt-5">
                <b>Redeem:</b> The redeem function will convert the anonymized <br>token back into its native form.
              </p>
              <p class="mt-5">
                <b>Transfer:</b> The transfer function is the one that enables the <br>
                anonymous transfer of the token. It will conceal and protect <br>
                both the anonymity of both sender and receiver, and the <br>
                amount being sent.
              </p>
            </el-col>
            <el-col :sm="12" :xs="24" class="text-right">
              <img :src="raveWork" alt="">
            </el-col>
          </el-row>
        </div>
      </section>
      <div id="Products"></div>
      <section class="pt-0 pb-0">
        <div class="fourth-section">
          <div class="products-line-chart">
            <img :src="lineChart" alt="" class="w-100">
          </div>
          <h3>Products</h3>
          <div class="fourth-section-width">
            <el-row :gutter="28" class="mt-6" justify="center">
              <el-col :sm="12" :xs="24">
                <!-- 渐变框 -->
                <div class="content">
                  <div class="box">
                    <img :src="product1" alt="">
                    <p><b>Private Transaction:</b> Users can use RAZE to empower the privacy of on-chain transactions between recipient and destination addresses and transfer any token between any blockchain.</p>
                  </div>
                </div>
              </el-col>
              <el-col :sm="12" :xs="24">
                <!-- 渐变框 -->
                <div class="content">
                  <div class="box">
                    <img :src="product2" alt="">
                    <p><b>Secret DeFi Bridge:</b> Users can hide their trading history as RAZE is compatible across all DeFi products. It can be fully compatible with Uniswap, AAVE, Compound and DeFi ecosystem on Polkadot and Cosmos.</p>
                  </div>
                </div>
              </el-col>
              <el-col :sm="12" :xs="24" class="mt-5">
                <!-- 渐变框 -->
                <div class="content">
                  <div class="box">
                    <img :src="product3" alt="">
                    <p><b>Anonymity Mining:</b> Users can mine RAZE in a truly private way. The access to the liquidity pool always stays anonymous and secure.</p>
                  </div>
                </div>
              </el-col>
              <el-col :sm="12" :xs="24" class="mt-5">
                <!-- 渐变框 -->
                <div class="content">
                  <div class="box">
                    <img :src="product4" alt="">
                    <p><b>RazeVM Integration:</b> Builders can implement the privacy-preserving functions with an open protocol giving access to all decentralized applications.</p>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </section>
      <section>
        <div class="fifth-section">
          <h3>Advantages</h3>
          <el-row type="flex" class="product-width mt-6" align="middle">
            <el-col :span="12">
              <img :src="advantages1" alt="">
            </el-col>
            <el-col :span="12">
              <p><b>Limitless and Seamless:</b> It can connect to any unconnected DeFi or Web3.0 product and expand the capability of existing decentralized applications with RazeVM.</p>
            </el-col>
          </el-row>
          <el-row type="flex" class="product-width mt-6" align="middle">
            <el-col :span="12">
              <p><b>Crypto friendly and Tradable:</b> The mint and redeem mechanism is implemented for creating private tokens. It makes intangible privacy tradable.</p>
            </el-col>
            <el-col :span="12">
              <img :src="advantages2" alt="">
            </el-col>
          </el-row>
          <el-row type="flex" class="product-width mt-6" align="middle">
            <el-col :span="12">
              <img :src="advantages3" alt="">
            </el-col>
            <el-col :span="12">
              <p><b>Decentralized and Interoperable:</b> Substrate framework provides RAZE the attributes of interoperability and Raze Network is a decentralized project building open-source.</p>
            </el-col>
          </el-row>
        </div>
      </section>
      <div id="Token"></div>
      <section class="p-3">
        <div class="sixth-section">
          <img :src="tokenIcon" alt="" class="token-icon1">
          <img :src="tokenIcon" alt="" class="token-icon2">
          <img :src="tokenIcon" alt="" class="token-icon3">
          <el-row type="flex" align="middle">
            <el-col :span="16" :xs="14">
              <h3>Raze Token</h3>
              <p>RAZE token plays the role of the core utility in the Raze Network ecosystem. It can capture the values included below but not limited to:</p>
            </el-col>
            <el-col :span="8" :xs="10">
              <img :src="tokenRaze" class="w-100 token-raze" alt="">
            </el-col>
          </el-row>
        </div>
      </section>
      <section class="pb-0">
        <div class="seventh-section">
          <el-row :gutter="10" :type="rowType">
            <el-col :md="5" :sm="8" :xs="12">
              <img :src="tokenIcon1" alt="">
              <h4>Privacy Preserving</h4>
              <p>
                RAZE gives Defi users the ability to move between applications and blockchains seamlessly, 
                while leaving no trace of trading history or interactions with applications.
              </p>
            </el-col>
            <el-col :md="5" :sm="8" :xs="12">
              <img :src="tokenIcon1" alt="">
              <h4>Governance and Voting</h4>
              <p>RAZE token holders can create and vote for proposals.</p>
            </el-col>
            <el-col :md="5" :sm="8" :xs="12">
              <img :src="tokenIcon3" alt="">
              <h4>Intermediary of Exchange</h4>
              <p>RAZE token can be used for different services in the ecosystem.</p>
            </el-col>
            <el-col :md="5" :sm="8" :xs="12">
              <img :src="tokenIcon4" alt="">
              <h4>Token Burning</h4>
              <p>A certain percentage of transaction fees are burned in the form of RAZE tokens.</p>
            </el-col>
            <el-col :md="5" :sm="8" :xs="12">
              <img :src="tokenIcon5" alt="">
              <h4>Liquidity Reward</h4>
              <p>The market makers providing liquidity in pools will be rewarded with RAZE tokens.</p>
            </el-col>
          </el-row>
        </div>
      </section>

      <section class="pb-0">
        <div class="tenth-section">
          <h3>Team and Advisors</h3>
          <p class="tenth-content">The Raze Network team has deep knowledge of zero-knowledge algorithms and implemented privacy techniques on Ethereum. The background of the team consists of both engineering and academic experience.</p>
          <el-row :gutter="9" class="tenth-section-width">
            <el-col :span="8" :xs="24">
              <div class="content ">
                <div class="box">
                  <img :src="advisor1" alt="" class="advisor">
                  <div class="d-flex justify-center">
                    <h4>Justin Kellison</h4>
                    <a href="https://github.com/resovepant8" target="_blank">
                      <img :src="github2" alt="" class="link-icon">
                    </a>
                  </div>
                  <h5>Project Lead</h5>
                  <p>Justin is an active marketer and developer in the crypto industry from 4 years, and has worked for a few multi-million dollar DeFi projects. He (and his professional marketing team) has increased product visibility and has shown good results.</p>
                </div>
              </div>
            </el-col>
            <el-col :span="8" :xs="24">
              <div class="content">
                <div class="box">
                  <img :src="advisor2" alt="" class="advisor">
                  <div class="d-flex justify-center">
                    <h4>Dylan Dewdney</h4>
                    <a href="https://www.linkedin.com/in/dylan-dewdney" target="_blank">
                      <img :src="inIcon" alt="" class="link-icon">
                    </a>
                  </div>
                  <h5>Strategy Advisor</h5>
                  <p>Dylan is a longtime crypto enthusiast (2011). In 2017 he co-founded Harbour DAO, which became an open-standard set of tools for building governance structures and voting mechanisms on ERC-20. Later, as Chief Evangelist of Beam and Head of Growth for AdEx, he was a key part of their GTM and general growth strategies. Dylan is a respected peer among many different projects and areas of business. He is now the CEO of Kylin Network.</p>
                </div>
              </div>
            </el-col>
            <el-col :span="8" :xs="24">
              <div class="content">
                <div class="box">
                  <img :src="advisor3" alt="" class="advisor">
                  <div class="d-flex justify-center">
                    <h4>Garlam Won</h4>
                    <a href="https://www.linkedin.com/in/garlam/" target="_blank">
                      <img :src="inIcon" alt="" class="link-icon">
                    </a>
                  </div>
                  <h5>Marketing Advisor</h5>
                  <p>As ex-head of marketing for Harmony, Garlam was also behind the marketing of some of the top DeFi and NFT projects in the space. As an ex-investment banker at JP Morgan & ex-Management consultant at Deloitte, Garlam exerts influence in various parts of the blockchain ecosystem through his in-depth connections with the communities in China, Korea, Canada and US.</p>
                </div>
              </div>
            </el-col>
            <el-col :span="8" :xs="24">
              <div class="content">
                <div class="box">
                  <img :src="advisor4" alt="" class="advisor">
                  <div class="d-flex justify-center">
                    <h4>Ryuhei Matsuda</h4>
                    <a href="https://www.linkedin.com/in/ryuhei-matsuda/" target="_blank">
                      <img :src="inIcon" alt="" class="link-icon">
                    </a>
                  </div>
                  <h5>Blockchain Engineer</h5>
                  <p>Ryuhei is adept at javascript, go, java, c++, and Rust, Ryuhei has proven his ability over the years to help architects and lead large projects or join existing teams with equal ease. Ryuhei was previously CTO at Trade Pharma Network and Lead Developer at BlocX. He graduated from the University of Tokyo.</p>
                </div>
              </div>
            </el-col>
            <el-col :span="8" :xs="24">
              <div class="content">
                <div class="box">
                  <img :src="advisor5" alt="" class="advisor">
                  <div class="d-flex justify-center">
                    <h4>Kyle Chasse</h4>
                    <a href="https://www.linkedin.com/in/kylechasse/" target="_blank">
                      <img :src="inIcon" alt="" class="link-icon">
                    </a>
                  </div>
                  <h5>Advisor</h5>
                  <p>Founder of Master Ventures and Paid Network, Kyle is a blockchain industry veteran and technology entrepreneur, who has founded, advised and invested in numerous early-stage blockchain projects since his initial investment in Bitcoin in 2012.</p>
                </div>
              </div>
            </el-col>
            <el-col :span="8" :xs="24">
              <div class="content">
                <div class="box">
                  <img :src="advisor6" alt="" class="advisor">
                  <div class="d-flex justify-center">
                    <h4>Eric Clark Su</h4>
                    <a href="https://www.linkedin.com/in/ericsu/" target="_blank">
                      <img :src="inIcon" alt="" class="link-icon">
                    </a>
                  </div>
                  <h5>Advisor</h5>
                  <p>Prolific supporter of a wide array of crypto projects, more recently, projects like DIA, Tellor and Orion Protocol. Longtime business builder and founder, with an extremely strong core skill set of rapidly building up dev teams from scratch. He is the CEO of exnt.io.</p>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </section>
      <div id="Roadmap"></div>
      <section class="pt-0 pb-0">
        <div class="eigth-section">
          <h3>Roadmap</h3>
          <div class="hidden-xs-only">
            <el-row type="flex" class="mt-6" align="middle">
              <el-col :span="4" v-for="(road, index) in roadMapList" :key="index">
                <small>{{road.year}}</small>
                <h4>{{road.quarter}}</h4>
              </el-col>
            </el-row>
            <div class="eigth-line">
              <el-row type="flex" class="roadmap" align="middle">
                <el-col :span="4" v-for="(road, index) in roadMapList" :key="index">
                  <div class="roadmap-big"></div>
                  <div class="roadmap-small"></div>
                </el-col>
              </el-row>
            </div>
            <el-row type="flex" class="mt-6" align="top" justify="center">
              <el-col :span="4" v-for="(road, index) in roadMapList" :key="index">
                <div class="d-flex mt-4" v-for="(t, index) in road.text" :key="index">
                  <div class="roadmap-dot"></div>
                  <p>{{t.name}}</p>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="hidden-sm-and-up">
            <el-row type="flex" class="mt-6" align="middle" justify="center">
              <el-col :span="8">
                <div v-for="(road, index) in roadMapList" :key="index" class="road-mobile-dot-height">
                  <small>{{road.year}}</small>
                  <h4>{{road.quarter}}</h4>
                </div>
              </el-col>
              <el-col :span="3">
                <div class="eigth-line-mobile">
                  <div v-for="(road, index) in roadMapList" :key="index" class="road-mobile-dot-height roadmap-tip">
                    <div class="roadmap-big"></div>
                    <div class="roadmap-small"></div>
                  </div>
                </div>
              </el-col>
              <el-col :span="13">
                <div v-for="(road, index) in roadMapList" :key="index" class="road-mobile-dot-height roadmap-text">
                  <div class="d-flex" v-for="(t, index) in road.text" :key="index">
                    <div class="roadmap-dot"></div>
                    <p>{{t.name}}</p>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </section>
      <section>
        <div class="nineth-section">
          <h3>Strategic Investors</h3>
          <img :src="strategic" alt="" class="w-100 strategic">
        </div>
      </section>
      <section class="pb-19">
        <div class="nineth-section">
          <h3>Media Press</h3>
          <img :src="mediaPress" alt="" class="w-100 strategic">
        </div>
      </section>
      <section class="pb-2 pt-3">
        <div class="eleventh-section">
          <img :src="footerBg" alt="" class="footer-bg hidden-xs-only">
          <el-row :type="rowType" :gutter="40" align="middle">
            <el-col :sm="12" :xs="24" class="pl-8">
              <img :src="logo" alt="">
              <div class="footer-link hidden-xs-only">
                <a href="https://t.me/Raze_Net">
                  <img :src="telegram" alt="">
                </a>
                <a href="https://twitter.com/R4ZE_Network">
                  <img :src="twitter" alt="">
                </a>
                <a href="mailto:contact@raze.network">
                  <img :src="email" alt="">
                </a>
                <a href="https://raze.network">
                  <img :src="website" alt="">
                </a>
                <a href="https://github.com/Raze-Net">
                  <img :src="github" alt="">
                </a>
                <a href="https://raze-net.medium.com/">
                  <img :src="medium" alt="">
                </a>
                <p class="copy-right">Copyright: 2020 The Raze Network. All Rights Reserved</p>
              </div>
            </el-col>
            <el-col :sm="12" :xs="24" class="footer-text">
              <h5>DISCLAIMER</h5>
              <p>
                All the information on this website or other official channels is published for information purposes only and is only intended for institutional investors and sophisticated individual investors. 
                Any services to be provided in the future will be subject to the terms of the legal agreements relating thereto. Nothing on this Site should be interpreted as the investment endorsement by Raze Network or any other person. 
                Raze Network and its related services are not provided to any individual from the United States.
              </p>
            </el-col>
          </el-row>
          <div class="footer-link hidden-sm-and-up">
            <a href="https://t.me/Raze_Net">
              <img :src="telegram" alt="">
            </a>
            <a href="https://twitter.com/R4ZE_Network">
              <img :src="twitter" alt="">
            </a>
            <a href="mailto:contact@raze.network">
              <img :src="email" alt="">
            </a>
            <a href="https://raze.network">
              <img :src="website" alt="">
            </a>
            <a href="https://github.com/Raze-Net">
              <img :src="github" alt="">
            </a>
            <a href="https://raze-net.medium.com/">
              <img :src="medium" alt="">
            </a>
            <p class="copy-right">Copyright: 2020 The Raze Network. All Rights Reserved</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import wave from '@/components/wave'
import waveMore from '@/components/waveMore'
import logo from '@/assets/logo.png'
import play from '@/assets/img/play.png'
import doc from '@/assets/img/doc.svg'
import strategic from '@/assets/img/strategic.png'
import mediaPress from '@/assets/img/media-press.png'
import polkadot from '@/assets/img/polkadot.png'
import network1 from '@/assets/img/network1.png'
import network2 from '@/assets/img/network2.png'
import network3 from '@/assets/img/network3.png'
import network4 from '@/assets/img/network4.png'
import raveWork from '@/assets/img/rave-work.png'
import lineChart from '@/assets/img/line-chart.png'
import product1 from '@/assets/img/product1.png'
import product2 from '@/assets/img/product2.png'
import product3 from '@/assets/img/product3.png'
import product4 from '@/assets/img/product4.png'

import advisor1 from '@/assets/img/advisor1.png'
import advisor2 from '@/assets/img/advisor2.png'
import advisor3 from '@/assets/img/advisor3.png'
import advisor4 from '@/assets/img/advisor4.png'
import advisor5 from '@/assets/img/advisor5.png'
import advisor6 from '@/assets/img/advisor6.png'
import github2 from '@/assets/img/github-2.svg'
import inIcon from '@/assets/img/inIcon.svg'

import advantages1 from '@/assets/img/advantages1.png'
import advantages2 from '@/assets/img/advantages2.png'
import advantages3 from '@/assets/img/advantages3.png'
import tokenIcon from '@/assets/img/token-icon.png'
import tokenIcon1 from '@/assets/img/token-icon1.png'
import tokenIcon3 from '@/assets/img/token-icon3.png'
import tokenIcon4 from '@/assets/img/token-icon4.png'
import tokenIcon5 from '@/assets/img/token-icon5.png'
import subscribe from '@/assets/img/subscribe.png'
import footerBg from '@/assets/img/footer-bg.png'
import telegram from '@/assets/img/telegram.svg'
import twitter from '@/assets/img/twitter.svg'
import email from '@/assets/img/email.svg'
import website from '@/assets/img/website.svg'
import github from '@/assets/img/github.png'
import medium from '@/assets/img/medium.svg'

import tokenRaze from '@/assets/img/token-raze.gif'
export default {
  name: 'Homepage',
  data () {
    return {
      isMobile: false,
      clientHeight: '',
      rowType: '',
      homeImgHeight: '',
      issafariBrowser: '',
      breatheStyle: {},
      bannerStyle: {},
      bannerTextStyle: {},
      bannerTextPStyle: {},
      isSmallHeight: false,
      play: play,
      doc: doc,
      strategic: strategic,
      mediaPress: mediaPress,
      polkadot: polkadot,
      network1: network1,
      network2: network2,
      network3: network3,
      network4: network4,
      raveWork: raveWork,
      lineChart: lineChart,
      product1: product1,
      product2: product2,
      product3: product3,
      product4: product4,
      advisor1: advisor1,
      advisor2: advisor2,
      advisor3: advisor3,
      advisor4: advisor4,
      advisor5: advisor5,
      advisor6: advisor6,
      github2: github2,
      inIcon: inIcon,
      advantages1: advantages1,
      advantages2: advantages2,
      advantages3: advantages3,
      tokenIcon: tokenIcon,
      tokenIcon1: tokenIcon1,
      tokenIcon3: tokenIcon3,
      tokenIcon4: tokenIcon4,
      tokenIcon5: tokenIcon5,
      subscribe: subscribe,
      footerBg: footerBg,
      telegram: telegram,
      twitter: twitter,
      website: website,
      email: email,
      medium: medium,
      github: github,
      tokenRaze: tokenRaze,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      logo: logo,

      roadMapList: [
        {
          year: 2020,
          quarter: 'Q3',
          text: [{
            name: 'Project Establishment'
          }]
        },
        {
          year: 2020,
          quarter: 'Q4',
          text: [{
            name: 'Draft of Whitepaper'
          }]
        },
        {
          year: 2021,
          quarter: 'Q1',
          text: [{
            name: 'Official Whitepaper Release'
          }, {
            name: 'Official Website Launch'
          },{
            name: 'Core and zkSNARKS Implementation Release'
          }]
        },
        {
          year: 2021,
          quarter: 'Q2',
          text: [{
            name: 'Token and Dapp source code Release'
          },{
            name: 'Liquidity Reward Program'
          }]
        },
        {
          year: 2021,
          quarter: 'Q3',
          text: [{
            name: 'Protocol and Product Launch'
          }]
        },
        {
          year: 2021,
          quarter: 'Q4',
          text: [{
            name: 'Implementing the Bridge to DeFi Protocols'
          }, {
            name: 'Integrating More Customized Functions'
          }]
        }
      ]
    }
  },
  components: {
    wave,
    waveMore
  },
  mounted(){
    // this.issafariBrowser = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
    // // 获取浏览器可视区域高度
    let clientHeight = `${document.documentElement.clientHeight}`;
    // this.homeImgHeight = `${document.documentElement.clientHeight + 1}`;
    // this.changeFixed(this.clientHeight);

    let width = `${document.documentElement.clientWidth}`;
    if (width < 992) {
      this.rowType = ''
    } else {
      this.clientHeight = clientHeight + 'px';
      this.breatheStyle = {
        width: `${clientHeight - 250}` + 'px',
        height: `${clientHeight - 250}` + 'px'
      }
      this.bannerStyle = {
        width: `${clientHeight - 130}` + 'px'
      }
      this.bannerTextStyle = {
        fontSize: ((clientHeight - 150) * 35 / 573) + 'px',
        lineHeight: ((clientHeight - 150) * 35 / 573) + 'px'
      }
      this.bannerTextPStyle = {
        width: `${clientHeight - 190}` + 'px',
        fontSize: ((clientHeight - 150) * 20 / 573) + 'px',
        lineHeight: ((clientHeight - 150) * 24 / 573) + 'px'
      }
      this.rowType = 'flex'
    }
    window.onresize = () => {
      // that.clientHeight = `${document.documentElement.clientHeight}`;
      // if (that.clientHeight > 620) {
      //   that.isSmallHeight = true;
      // } else {
      //   that.isSmallHeight = false;
      // }

      let width = `${document.documentElement.clientWidth}`;
      if (width < 992) {
        this.rowType = ''
      } else {
        this.rowType = 'flex'
      }
    };
  },
  watch: {
    // 如果 `clientHeight` 发生改变，这个函数就会运行
    // clientHeight: function () {
    //   this.changeFixed(this.clientHeight)
    // }
  },
  methods:{
    changeFixed(clientHeight){
      let width = `${document.documentElement.clientWidth}`;
      // if ( width > 768) {
      //   this.isMobile = false;
      //   this.$refs.homePage.style.height = clientHeight+'px';
      //   this.$refs.homeImg.style.height = this.homeImgHeight+'px';
      // } else {
      //   this.isMobile = true;
      // }
    },
    showDetail(num) {
      if (num === '1') {
        this.show1 = true;
      }if (num === '2') {
        this.show2 = true;
      }if (num === '3') {
        this.show3 = true;
      }if (num === '4') {
        this.show4 = true;
      }if (num === '5') {
        this.show5 = true;
      }
    },
    hiddenDetail() {
      this.show1 = false;
      this.show2 = false;
      this.show3 = false;
      this.show4 = false;
      this.show5 = false;
    },
    goAnchor (selector) {
      this.$el.querySelector(selector).scrollIntoView();
    },
    toWhitepaper() {
      window.location.href = "https://docsend.com/view/nea4rj23f28z5b98";
    },
    toPolkadot() {
      window.location.href = "https://polkadot.network/";
    }
  }
}
</script>

<style lang="less" scoped>

.first-play {
  .el-button {
    padding: 2px;
    font-size: 18px;
    img {
      width: 20px;
      margin-right: 8px;
    }
  }
}
.first-polkadot {
  text-align: left;
  img {
    width: 50px;
    margin-right: 12px;
  }
}
</style>
