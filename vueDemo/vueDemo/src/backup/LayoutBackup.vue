<!--<style scoped>-->

  <!--.admin-layout-container {-->
    <!--position: absolute;-->
    <!--width: 100%;-->
    <!--height: 100%;-->
  <!--}-->

  <!--.layout {-->
    <!--background: #f5f7f9;-->
    <!--position: relative;-->
    <!--overflow: hidden;-->
    <!--height: 100%;-->
  <!--}-->

  <!--.sidebar {-->
    <!--background: #fff;-->
  <!--}-->

  <!--.logo {-->
    <!--width: auto;-->
    <!--height: 60px;-->
    <!--display: flex;-->
    <!--text-align: center;-->
    <!--align-items: center;-->
    <!--justify-content: flex-start;-->
    <!--cursor: pointer;-->
    <!--border-bottom: 1px solid #363e4f;-->
    <!--position: relative;-->
    <!--padding-left: 20px;-->
    <!--background: #0d58ab;-->
  <!--}-->

  <!--.logo-user {-->
    <!--display: flex;-->
    <!--align-items: center;-->
    <!--justify-content: flex-start;-->
    <!--position: relative;-->
  <!--}-->

  <!--.user-name{-->
    <!--color:#fff;-->
    <!--font-size:16px;-->
    <!--margin-left:15px;-->
  <!--}-->

  <!--.layout-header-bar {-->
    <!--background: #fff;-->
    <!--padding: 0;-->
    <!--position: relative;-->
    <!--display: flex;-->
    <!--flex-direction: column;-->
    <!--z-index: 20;-->
    <!--width: 100%;-->
  <!--}-->

  <!--.layout-logo-left {-->
    <!--width: 90%;-->
    <!--height: 30px;-->
    <!--background: #5b6270;-->
    <!--border-radius: 3px;-->
    <!--margin: 15px auto;-->
  <!--}-->

  <!--.menu-icon {-->
    <!--transition: all .3s;-->
  <!--}-->

  <!--.rotate-icon {-->
    <!--transform: rotate(-90deg);-->
  <!--}-->

  <!--.menu-item span {-->
    <!--display: inline-block;-->
    <!--overflow: hidden;-->
    <!--width: 69px;-->
    <!--text-overflow: ellipsis;-->
    <!--white-space: nowrap;-->
    <!--vertical-align: bottom;-->
    <!--transition: width .2s ease .2s;-->
  <!--}-->

  <!--.menu-item i {-->
    <!--transform: translateX(0px);-->
    <!--transition: font-size .2s ease, transform .2s ease;-->
    <!--vertical-align: middle;-->
    <!--font-size: 16px;-->
  <!--}-->

  <!--.collapsed-menu span {-->
    <!--width: 0px;-->
    <!--transition: width .2s ease;-->
  <!--}-->

  <!--.collapsed-menu i {-->
    <!--transform: translateX(5px);-->
    <!--transition: font-size .2s ease .2s, transform .2s ease .2s;-->
    <!--vertical-align: middle;-->
    <!--font-size: 22px;-->
  <!--}-->

  <!--.content-wrapper {-->
    <!--overflow: auto;-->
    <!--padding: 10px;-->
    <!--position: relative;-->
  <!--}-->

  <!--.header-wapper {-->
    <!--display: flex;-->
    <!--align-tems: center;-->
    <!--justify-content: space-between;-->
    <!--position: relative;-->
    <!--z-index: 1;-->
    <!--box-shadow: 0 2px 1px 1px rgba(100, 100, 100, 0.1);-->
    <!--background: #0e64c3;-->
    <!--color: #fff;-->
  <!--}-->

  <!--.header-left {-->
    <!--display: flex;-->
    <!--align-items: center;-->
  <!--}-->

  <!--.header-title {-->
    <!--font-size: 18px;-->
    <!--font-weight: bold-->
  <!--}-->

  <!--.header-right {-->
    <!--margin-right: 20px;-->
  <!--}-->

  <!--.btn-blue {-->
    <!--color: #fff;-->
    <!--font-size: 16px;-->
  <!--}-->
<!--</style>-->

<!--<template>-->
  <!--<section class="admin-layout-container">-->
    <!--<div class="layout">-->
      <!--<Layout>-->
        <!--<Sider class="sidebar" ref="side1" hide-trigger collapsible width="230" :collapsed-width="78"-->
               <!--v-model.trim="isCollapsed">-->

          <!--<div class="logo">-->

            <!--<div v-if="!isCollapsed" class="logo-user">-->
              <!--<Avatar icon="ios-person" size="large"/>-->
              <!--<span class="user-name">Admin</span>-->
            <!--</div>-->
            <!--<Avatar icon="ios-person" size="large" v-else/>-->
          <!--</div>-->

          <!--<Menu @on-open-change="parentTag" @on-select="childTag" theme="dark" width="auto" :class="menuitemClasses" accordion>-->
            <!--<Submenu name="用户管理">-->
              <!--<template slot="title">-->
                <!--<Icon type="ios-navigate"></Icon>-->
                <!--<span>用户管理</span>-->
              <!--</template>-->

              <!--<router-link to="/userInfo">-->
                <!--<MenuItem name="用户信息">用户信息</MenuItem>-->
              <!--</router-link>-->

              <!--<router-link to="/addUser">-->
                <!--<MenuItem name="新增用户">新增用户</MenuItem>-->
              <!--</router-link>-->
            <!--</Submenu>-->

            <!--<Submenu name="组件管理">-->
              <!--<template slot="title">-->
                <!--<Icon type="ios-search"></Icon>-->
                <!--<span>组件管理</span>-->
              <!--</template>-->

              <!--<router-link to="/componentOne">-->
                <!--<MenuItem name="组件1">组件1</MenuItem>-->
              <!--</router-link>-->

              <!--<router-link to="/componentTwo">-->
                <!--<MenuItem name="组件2">组件2</MenuItem>-->
              <!--</router-link>-->

              <!--<router-link to="/componentThree">-->
                <!--<MenuItem name="组件3">组件3</MenuItem>-->
              <!--</router-link>-->
            <!--</Submenu>-->

            <!--<Submenu name="测试练习">-->
              <!--<template slot="title">-->
                <!--<Icon type="ios-settings"></Icon>-->
                <!--<span>测试练习</span>-->
              <!--</template>-->

              <!--<router-link to="/testOne">-->
                <!--<MenuItem name="测试1">测试1</MenuItem>-->
              <!--</router-link>-->

              <!--<router-link to="/testTwo">-->
                <!--<MenuItem name="测试2">测试2</MenuItem>-->
              <!--</router-link>-->

              <!--<router-link to="/testThree">-->
                <!--<MenuItem name="测试3">测试3</MenuItem>-->
              <!--</router-link>-->
            <!--</Submenu>-->
          <!--</Menu>-->
        <!--</Sider>-->
        <!--<Layout>-->
          <!--<Header class="layout-header-bar">-->

            <!--<div class="header-wapper">-->

              <!--<div class="header-left">-->
                <!--<Icon @click.native="collapsedSider" :class="rotateIcon" type="md-menu" size="28"></Icon>-->
                <!--&lt;!&ndash;<Button type="primary" @click="goPath()">获取上一页面数据</Button>&ndash;&gt;-->
                <!--<span class="header-title">测试</span>-->
              <!--</div>-->

              <!--<div class="header-right">-->
                <!--<Button type="text" icon="md-exit" class="btn-blue" size="large" @click="quit">退出系统</Button>-->
              <!--</div>-->

            <!--</div>-->
          <!--</Header>-->

          <!--<Content :style="{padding: '0 24px 24px'}">-->
            <!--<Breadcrumb :style="{margin: '24px 0'}">-->
              <!--<BreadcrumbItem>-->
                <!--<Icon type="ios-home-outline"></Icon>-->
                <!--{{Home}}-->
              <!--</BreadcrumbItem>-->

              <!--<BreadcrumbItem>-->
                <!--<Icon type="logo-buffer"></Icon>-->
                <!--{{Components}}-->
              <!--</BreadcrumbItem>-->

              <!--<BreadcrumbItem>-->
                <!--<Icon type="ios-cafe"></Icon>-->
                <!--{{Layout}}-->
              <!--</BreadcrumbItem>-->
            <!--</Breadcrumb>-->

            <!--&lt;!&ndash;<Content :style="{padding: '24px', minHeight: '480px', background: '#fff'}">&ndash;&gt;-->
            <!--&lt;!&ndash;&lt;!&ndash; 渲染组件 &ndash;&gt;&ndash;&gt;-->
            <!--&lt;!&ndash;<router-view></router-view>&ndash;&gt;-->
            <!--&lt;!&ndash;</Content>&ndash;&gt;-->

            <!--<Content class="content-wrapper">-->
              <!--&lt;!&ndash; 渲染组件 &ndash;&gt;-->
              <!--<router-view></router-view>-->
            <!--</Content>-->

            <!--&lt;!&ndash;<Card>&ndash;&gt;-->
            <!--&lt;!&ndash;<div style="height: 474px">&ndash;&gt;-->

            <!--&lt;!&ndash;<Input v-model="value14" placeholder="请输入..." clearable style="width: 200px"/>&ndash;&gt;-->

            <!--&lt;!&ndash;<template>&ndash;&gt;-->
            <!--&lt;!&ndash;<Row>&ndash;&gt;-->
            <!--&lt;!&ndash;<Col span="12">&ndash;&gt;-->
            <!--&lt;!&ndash;<DatePicker type="date" :options="options1" placeholder="Select date"&ndash;&gt;-->
            <!--&lt;!&ndash;style="width: 200px">&ndash;&gt;-->

            <!--&lt;!&ndash;</DatePicker>&ndash;&gt;-->
            <!--&lt;!&ndash;</Col>&ndash;&gt;-->
            <!--&lt;!&ndash;</Row>&ndash;&gt;-->
            <!--&lt;!&ndash;</template>&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--&lt;!&ndash;</Card>&ndash;&gt;-->
          <!--</Content>-->
        <!--</Layout>-->
      <!--</Layout>-->
    <!--</div>-->
  <!--</section>-->
<!--</template>-->
<!--<script>-->
  <!--let name = '';-->
  <!--export default {-->
    <!--name: name,-->
    <!--data() {-->
      <!--return {-->
        <!--isCollapsed: false,-->
        <!--value14: "",-->
        <!--Home: "您当前位置为",-->
        <!--Components: "&#45;&#45;",-->
        <!--Layout: "&#45;&#45;",-->
      <!--}-->
    <!--},-->
    <!--computed: {-->
      <!--rotateIcon() {-->
        <!--return [-->
          <!--'menu-icon',-->
          <!--this.isCollapsed ? 'rotate-icon' : ''-->
        <!--];-->
      <!--},-->
      <!--menuitemClasses() {-->
        <!--return [-->
          <!--'menu-item',-->
          <!--this.isCollapsed ? 'collapsed-menu' : ''-->
        <!--]-->
      <!--}-->
    <!--},-->
    <!--methods: {-->
      <!--collapsedSider() {-->
        <!--this.$refs.side1.toggleCollapse();-->
      <!--},-->
      <!--goPath() {-->
        <!--// 路由参数-->
        <!--let mm = this.$route.params//parms包含传递的所有参数-->
        <!--this.value14 = this.$route.params.userName;-->
        <!--console.info("页面跳转结束" + mm.userName);-->
      <!--},-->
      <!--parentTag(e) {-->
        <!--this.Components = e[0];-->
        <!--if (e[0] === undefined) {-->
          <!--this.Components = "&#45;&#45;"-->
          <!--this.Layout = "&#45;&#45;";-->
        <!--}-->
      <!--},-->
      <!--childTag(e) {-->
        <!--this.Layout = e;-->

      <!--}-->
    <!--}-->
  <!--}-->
<!--</script>-->
