<style lang="postcss" scoped>
  @import '../assets/common.pcss';

  .admin-layout-container {
    position: absolute;
    width: 100%;
    height: 100%;

    & .layout {
      background: #f5f7f9;
      position: relative;
      overflow: hidden;
      height: 100%;

      & .sidebar {
        background: #fff;
      }

      & .dropdown-wrap {
        height: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        background: #fff;
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
        z-index: 11;
        & .dw-content {
          height: 100%;
          & .dd-btn {
            width: 83px;
            margin-left: -5px;
            padding: 10px 0;
          }
        }
      }
      & .logo {
        width: auto;
        height: 60px;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: flex-start;
        cursor: pointer;
        border-bottom: 1px solid #363e4f;
        position: relative;
        padding-left: 20px;
        background: #0d58ab;

        & .logo-user {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          position: relative;

          & .user-name {
            color: #fff;
            font-size: 20px;
            margin-left: 15px;
          }
        }
      }
    }

    & .layout-header-bar {
      background: #fff;
      padding: 0;
      position: relative;
      display: flex;
      flex-direction: column;
      z-index: 20;
      width: 100%;
      & .header-wrapper {
        display: flex;
        align-tems: center;
        justify-content: space-between;
        position: relative;
        z-index: 1;
        box-shadow: 0 2px 1px 1px rgba(100, 100, 100, 0.1);
        background: #0e64c3;
        color: #fff;
        & .header-left {
          display: flex;
          align-items: center;
          & .header-title {
            font-size: 18px;
            font-weight: bold
          }
        }

        & .header-right {
          margin-right: 20px;
          & .btn-blue {
            color: #fff;
            font-size: 16px;
          }
        }
      }
    }

    & .main-content {
      width: 100%;
      height: calc(100% - 60px);
      position: relative;
      overflow: auto;
      & .main-layout-con {
        height: 100%;
        overflow: hidden;
        & .content-wrapper {
          overflow: auto;
          padding: 10px;
          position: relative;

          &.spinCls {
            width: 60px !important;
            height: 60px !important;
            & ::after {
              background: linear-gradient(#0d58ab, #0256ac);
            }
          }
        }
        & .tags-nav-wrapper {
          /*调整导航栏背景颜色*/
          background: #F0F0F0;
          height: 40px;
          padding: 0;

          & .tags-nav {
            height: 100%;
            width: 100%;
            position: relative;
            /*调整导航栏上部边框和下部边框线的背景颜色*/
            border-top: 1px solid #F0F0F0;
            border-bottom: 1px solid #F0F0F0;
            & .btn-con {
              position: absolute;
              top: 0px;
              height: 100%;
              /*调整导航栏中左边和右边按钮的背景颜色*/
              background: #fff;
              padding-top: 3px;
              z-index: 10;
            }
            & button {
              padding: 6px 4px;
              line-height: 14px;
              text-align: center;
            }
            & .left-btn {
              left: 0px;
              /*调整导航栏中左边按钮线的背景颜色*/
              border-right: 1px solid #F0F0F0;
            }
            & .right-btn {
              right: 0px;
              /*调整导航栏中右边按钮线的背景颜色*/
              border-left: 1px solid #F0F0F0;
            }
            & .scroll-outer {
              position: absolute;
              left: 28px;
              right: 28px;
              top: 0;
              bottom: 0;
              box-shadow: 0px 0 3px 2px rgba(100, 100, 100, .1) inset;

              & .scroll-body {
                height: calc(100% - 1px);
                display: inline-block;
                padding: 1px 4px 0;
                position: absolute;
                overflow: visible;
                white-space: nowrap;
                transition: left .3s ease;
                .ivu-tag-dot-inner {
                  transition: background .2s ease;
                }
              }
            }
            &.contextmenu {
              position: absolute;
              margin: 0;
              padding: 5px 0;
              background: #fff;
              z-index: 100;
              list-style-type: none;
              border-radius: 4px;
              box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);

              /*左侧导航栏的菜单与上和左的距离*/
              & li {
                margin: 0;
                padding: 5px 15px;
                cursor: pointer;

                /*鼠标指针所经过区域颜色变化*/
                & :hover {
                  background: #eee;
                }
              }
            }
          }
        }
      }
    }

    & .layout-logo-left {
      width: 90%;
      height: 30px;
      background: #5b6270;
      border-radius: 3px;
      margin: 15px auto;
    }

    /*调整隐藏左侧导航栏按钮和项目标题与左侧的距离*/
    & .menu-icon {
      cursor: pointer;
      transition: all .3s;
      margin: 0 20px 0;
    }

    & .rotate-icon {
      transform: rotate(-90deg);
    }

    & .menu-item {
      position: absolute;
      overflow: auto;
      box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
      & :after {
        width: 0;
      }
      & span {
        display: inline-block;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
      }
      & i {
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
      }
    }
    & .collapsed-menu {
      & span {
        width: 0px;
        transition: width .2s ease;
      }
      & i {
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
      }
    }
  }

  .dd-menu {
    width: 200px;
    min-width: 200px;
    height: 100%;
    & .ddi-wrapper {
      display: flex;
      align-items: center;
      & .ddi-text {
        /*调整隐藏导航栏后，下拉菜单文字与左侧的距离*/
        padding-left: 10px;
      }
    }
  }

  /*在不动'iview/dist/styles/iview.css'的情况下，利用重写覆盖来修改相关组件*/

  .ivu-btn-text:hover {
    background-color: rgba(255, 255, 255, .2) !important;
  }

  /*content滚动条*/
  .ivu-layout.ivu-layout-has-sider {
    height: 100%;
  }

  .ivu-layout-sider {
    background: #fff;
    transition: none;
  }

  .ivu-layout-header {
    height: 60px;
    line-height: 60px;
  }

  /*导航栏滚动条*/
  .ivu-menu {
    height: calc(100% - 60px);
    overflow-y: auto;
  }

  .ivu-menu-item {
    white-space: nowrap;
  }

  .ivu-menu-submenu {
    white-space: nowrap;
    & .ivu-menu-submenu-title {
      white-space: nowrap;
    }
  }
</style>

<template>
  <section class="admin-layout-container">
    <div class="layout">
      <Layout>

        <Sider class="sidebar" ref="sidebar" hide-trigger collapsible width="230" :collapsed-width="78"
               v-model.trim="isCollapsed">

          <!--调整头像+用户名称-->
          <div class="logo">
            <div v-if="!isCollapsed" class="logo-user">
              <Avatar icon="ios-person" size="large"/>
              <span class="user-name">{{value14}}</span>
            </div>
            <Avatar icon="ios-person" size="large" v-else/>
          </div>

          <!---侧边导航栏-->
          <Menu ref="sideMenu" :active-name="activeMenuName" :open-names="openMenuName" theme="light" width="230px"
                :class="menuItemClasses" @on-select="choseMenu" v-if="!isCollapsed">

            <template v-for="(menu,menuIndex) in menus">

              <!--一级菜单：home-->
              <MenuItem :name="menu.name" v-if="!menu.children && menu.showInMenus" :key="menuIndex">
                <Icon :size="20" :type="menu.icon" :key="menuIndex"></Icon>
                <span>{{menu.title}}</span>
              </MenuItem>

              <!--一级菜单：除去home的其他按钮-->
              <Submenu :name="menu.name" v-if="menu.children" :key="menuIndex">

                <!--一级菜单：调整图标+一级标题-->
                <template slot="title">
                  <Icon :size="20" :type="menu.icon"></Icon>
                  <span>{{menu.title}}</span>
                </template>

                <!--二级子菜单：调整图标+二级标题-->
                <MenuItem :name="child.name" v-for="(child ,childIndex) in menu.children" :key="childIndex">
                  <Icon :size="20" :type="child.icon"></Icon>
                  <span>{{child.title}}</span>
                </MenuItem>
              </Submenu>
            </template>
          </Menu>

          <div class="dropdown-wrap" v-if="isCollapsed">
            <div class="dw-content">
              <template v-for="(menu,menuIndex) in menus">
                <!-- 隐藏导航栏后，home按钮的下拉菜单组件-->
                <Dropdown placement="right-start" transfer v-if="!menu.children && menu.showInMenus"
                          @on-click="dropdownClick" :key="menuIndex">

                  <!-- 这个button是隐藏导航栏之后的home按鈕-->
                  <Button class="dd-btn" type="text">
                    <Icon :size="25" :type="menu.icon"></Icon>
                  </Button>

                  <!--点击home按钮的下拉菜单内容-->
                  <DropdownMenu class="dd-menu" slot="list">
                    <DropdownItem :name="menu.name">
                      <div class="ddi-wrapper">
                        <Icon :size="16" :type="menu.icon"></Icon>
                        <span class="ddi-text">{{ menu.title }}</span>
                      </div>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>

                <!-- 隐藏导航栏后，除home的其他按钮的下拉菜单组件-->
                <Dropdown transfer placement="right-start" v-if="menu.children"
                          @on-click="dropdownClick" :key="menuIndex">

                  <!-- 这个button是隐藏导航栏之后的除home的其他按鈕-->
                  <Button class="dd-btn" type="text">
                    <Icon :size="25" :type="menu.icon"></Icon>
                  </Button>

                  <!--点击按钮的下拉菜单内容-->
                  <DropdownMenu class="dd-menu" slot="list">
                    <template v-for="(child, i) in menu.children">
                      <DropdownItem :name="child.name" :key="i">
                        <div class="ddi-wrapper">
                          <Icon :size="16" :type="child.icon"></Icon>
                          <span class="ddi-text">{{ child.title }}</span>
                        </div>
                      </DropdownItem>
                    </template>
                  </DropdownMenu>
                </Dropdown>
              </template>
            </div>
          </div>
        </Sider>

        <Layout>
          <Header class="layout-header-bar">

            <div class="header-wrapper">

              <!--隐藏左侧菜单栏按钮+添加系统标题-->
              <div class="header-left">
                <Icon @click.native="collapsedSider" :class="rotateIcon" type="md-menu" size="28"></Icon>
                <!--<Button type="primary" @click="goPath()">获取上一页面数据</Button>-->
                <span class="header-title">测试</span>
              </div>

              <!--退出按钮-->
              <div class="header-right">
                <Button type="text" icon="md-exit" class="btn-blue" size="large" @click="quit">退出系统</Button>
              </div>
            </div>
          </Header>

          <Content class="main-content">
            <Layout class="main-layout-con">
              <div class="tags-nav-wrapper">
                <div class="tags-nav">

                  <!--页面导航栏 左按钮-->
                  <div class="btn-con left-btn">
                    <Button type="text" @click="handleScroll(240)">
                      <Icon :size="18" type="ios-arrow-back"/>
                    </Button>
                  </div>

                  <!--页面导航-->
                  <div ref="scrollOuter" class="scroll-outer" @DOMMouseScroll="handleTagScroll"
                       @MouseWheel="handleTagScroll">
                    <div ref="scrollBody" class="scroll-body" :style="{left: tagBodyLeft + 'px'}">
                      <transition-group>
                        <!--调整导航栏标签的样式（包括选中tag时的颜色）+标题-->
                        <Tag type="dot" v-for="tab in tags" :closable="tab.closable"
                             :color="tab.chose? 'primary':'#e9EAEC'"
                             :name="tab.name" @click.native="clickTag(tab)"
                             @on-close="closeTag" :key="tab.name">
                          {{tab.title}}
                        </Tag>
                      </transition-group>
                    </div>
                  </div>

                  <!--页面导航栏 右按钮-->
                  <div class="btn-con right-btn">
                    <Button type="text" @click="handleScroll(-240)">
                      <Icon :size="18" type="ios-arrow-forward"/>
                    </Button>
                  </div>
                </div>
              </div>

              <!--面包屑-->
              <!-- <Breadcrumb :style="{margin: '24px 0'}">
                 <BreadcrumbItem>
                   <Icon type="ios-home-outline"></Icon>
                   {{Home}}
                 </BreadcrumbItem>

                 <BreadcrumbItem>
                   <Icon type="logo-buffer"></Icon>
                   {{Components}}
                 </BreadcrumbItem>

                 <BreadcrumbItem>
                   <Icon type="ios-cafe"></Icon>
                   {{Layout}}
                 </BreadcrumbItem>
               </Breadcrumb>-->

              <Content class="content-wrapper">
                <!--&lt;!&ndash; 渲染组件 &ndash;&gt;-->
                <!--<router-view></router-view>-->

                <!--保存组件状态到内存，避免重新渲染-->
                <keep-alive>
                  <router-view></router-view>
                </keep-alive>
              </Content>

            </Layout>
          </Content>
        </Layout>
      </Layout>
    </div>
  </section>
</template>
<script>
  let name = '';
  export default {
    name: name,
    data() {
      return {
        isCollapsed: false,
        value14: this.$route.params.userName,//不知道能不能调用方法
        //面包屑用
        Home: "您当前位置为",
        Components: "--",
        Layout: "--",

        // ------------------------------  菜单操作开始  --------------------------------
        title: '首页',
        activeMenuName: 'admin',
        openMenuName: [],

        tagBodyLeft: 0,
        rightOffset: 40,
        outerPadding: 4,
        contextMenuLeft: 0,
        contextMenuTop: 0,
        visible: false,

        menus: [
          {
            title: '首页',
            num: 1,
            name: 'admin',
            icon: 'ios-home',
            href: '/home',
            closable: false,
            showInTags: true,
            showInMenus: true,
            chose: true
          },
          {
            title: '用户管理',
            name: 'members-agents',
            icon: 'ios-people',
            children: [
              {
                title: '用户信息',
                name: '用户信息',
                href: '/userInfo',
                closable: true,
                showInTags: false,
                showInMenus: true,
                chose: false
              },
              {
                title: '新增用户',
                name: '新增用户',
                href: '/addUser',
                closable: true,
                showInTags: false,
                showInMenus: true,
                chose: false
              },
            ]
          },

          {
            title: '组件管理',
            name: 'component-agents',
            icon: 'ios-search',

            children: [
              {
                title: '组件1',
                name: '组件1',
                href: '/componentOne',
                closable: true,
                showInTags: false,
                showInMenus: true,
                chose: false
              },
              {
                title: '组件2',
                name: '组件2',
                href: '/componentTwo',
                closable: true,
                showInTags: false,
                showInMenus: true,
                chose: false
              },
              {
                title: '组件3',
                name: '组件3',
                href: '/componentThree',
                closable: true,
                showInTags: false,
                showInMenus: true,
                chose: false
              },
            ]
          },

          {
            title: '测试练习',
            name: 'test-agents',
            icon: 'ios-settings',

            children: [
              {
                title: '测试1',
                name: '测试1',
                href: '/testOne',
                closable: true,
                showInTags: false,
                showInMenus: true,
                chose: false
              },
              {
                title: '测试2',
                name: '测试2',
                href: '/testTwo',
                closable: true,
                showInTags: false,
                showInMenus: true,
                chose: false
              },
              {
                title: '测试3',
                name: '测试3',
                href: '/testThree',
                closable: true,
                showInTags: false,
                showInMenus: true,
                chose: false
              },
            ]
          },

        ]
        // ------------------------------  菜单操作结束  --------------------------------
      }
    },
    computed: {
      // 筛选menus中选中的menu
      tags() {
        let tags = [];
        // 将menus中showInTags=true的标签放到tags数组中
        this.menus.forEach(menu => {
          if (menu.showInTags) {
            tags.push(menu);
          } else if (menu.children) {
            menu.children.forEach(child => {
              if (child.showInTags) {
                tags.push(child)
              }
            })
          }
        });
        //标签数组排序，从小到到
        tags.sort((a, b) => {
          return (a.num - b.num)
        })
        return tags;
      },
      rotateIcon() {
        return [
          'menu-icon',
          this.isCollapsed ? 'rotate-icon' : ''
        ];
      },
      menuItemClasses() {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      }
    },
    methods: {
      collapsedSider() {
        this.$refs.sidebar.toggleCollapse();
      },
      goPath() {
        // 路由参数
        let mm = this.$route.params//parms包含传递的所有参数
        this.value14 = this.$route.params.userName;
        console.info("页面跳转结束" + mm.userName);
      },
      parentTag(e) {
        this.Components = e[0];
        if (e[0] === undefined) {
          this.Components = "--"
          this.Layout = "--";
        }
      },
      childTag(e) {
        this.Layout = e;
      },

      //退出
      quit() {
        this.$router.push('/login')
      },

      //tags 滚动事件
      handleTagScroll(e) {
        var type = e.type
        let delta = 0
        if (type === 'DOMMouseScroll' || type === 'MouseWheel') {
          delta = (e.wheelDelta) ? e.wheelDelta : -(e.detail || 0) * 40
        }
        this.handleScroll(delta)
      },
      /*tags 滑动事件 */
      handleScroll(offset) {
        const outerWidth = this.$refs.scrollOuter.offsetWidth
        const bodyWidth = this.$refs.scrollBody.offsetWidth
        if (offset > 0) {
          this.tagBodyLeft = Math.min(0, this.tagBodyLeft + offset)
        } else {
          if (outerWidth < bodyWidth) {
            if (this.tagBodyLeft < -(bodyWidth - outerWidth)) {
              this.tagBodyLeft = this.tagBodyLeft
            } else {
              this.tagBodyLeft = Math.max(this.tagBodyLeft + offset, outerWidth - bodyWidth)
            }
          } else {
            this.tagBodyLeft = 0
          }
        }
      },

      // ------------------------------  菜单操作开始  --------------------------------
      closeTag(event, name) {
        // 判断该标签是否是选中状态
        // 如果是那么就要设置标签数组中最后一个标签成选中状态
        // 如果否那么就直接删除就好
        let isChose = false;
        this.menus.forEach((menu) => {
          if (menu.name == name) {
            isChose = menu.chose;
            menu.showInTags = false;
          } else if (menu.children) {
            menu.children.forEach(child => {
              if (child.name == name) {
                isChose = child.chose;
                child.showInTags = false;
              }
            })
          }
        })
        // 关闭标签并选中tags中最后一个标签高亮
        if (isChose) {
          let last_tag = this.tags[this.tags.length - 1];
          last_tag.chose = true;
          this.$router.push(last_tag.href);
          this.activeMenuName = last_tag.name;
          localStorage.activeMenuName = this.activeMenuName;
        }
      },

      clickTag(tag) {
        this.tags.forEach(_tag => {
          if (_tag.name == tag.name) {
            _tag.chose = true;
          } else {
            _tag.chose = false;
          }
        })
        // 设置菜单选中name
        this.activeMenuName = tag.name;
        localStorage.activeMenuName = this.activeMenuName;
        // 刷新菜单
        this.$nextTick(() => {
          if (this.$refs.sideMenu) {
            this.$refs.sideMenu.updateActiveName()
          }
        });
        //点击tab跳转
        this.$router.push(`${tag.href}`);
      },
      choseMenu(name) {
        // 获取标签数组最后一个元素的num
        let tags_last_num = this.tags[this.tags.length - 1].num;
        // 设置选中菜单name
        this.activeMenuName = name;
        localStorage.activeMenuName = this.activeMenuName;

        //根据name查找对应的菜单对象
        let menu = null;
        this.menus.forEach(_menu => {
          if (_menu.name == name) {
            // 只有不在tags数组中的元素才能设置num
            if (!_menu.showInTags) {
              _menu.num = tags_last_num + 1;
            }
            menu = _menu;
            _menu.showInTags = true;
            _menu.chose = true;

          }
          else if (_menu.children) {
            _menu.children.forEach(child => {
              if (child.name == name) {
                // 只有不在tags数组中的元素才能设置num
                if (!_menu.showInTags) {
                  child.num = tags_last_num + 1;
                }
                menu = child;
                child.showInTags = true;
                child.chose = true;

              } else {
                child.chose = false;
              }
            })
          }
          else {
            _menu.chose = false;
          }
        })
        this.$router.push(`${menu.href}`);
      },
      dropdownClick(name) {
        this.choseMenu(name);
      }
      // ------------------------------  菜单操作结束  --------------------------------
    }
  }
</script>
