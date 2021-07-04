<template>
  <div class="site-doc-wrapper">
    <Topnav/>
    <div class="site-doc-body">
      <div :class="[visibleMenu ? 'site-doc-aside-wrapper active':'site-doc-aside-wrapper']">
        <div class="site-doc-mask"></div>
        <aside class="site-doc-aside">
          <h2>入门</h2>
          <ol>
            <li>
              <router-link to="/doc/get-started">快速上手</router-link>
            </li>
            <li>
              <router-link to="/doc/install">安装</router-link>
            </li>
          </ol>
          <h2>组件</h2>
          <ol>
<!--            <li>-->
<!--              <router-link to="/doc/icon">Icon 图标</router-link>-->
<!--            </li>-->
            <li>
              <router-link to="/doc/button">Button 按钮</router-link>
            </li>
            <li>
              <router-link to="/doc/switch">Switch 开关</router-link>
            </li>
            <li>
              <router-link to="/doc/radio">Radio 单选</router-link>
            </li>
            <li>
              <router-link to="/doc/layout">Layout 布局</router-link>
            </li>
            <li>
              <router-link to="/doc/grid">Grid 栅格</router-link>
            </li>
            <li>
              <router-link to="/doc/tabs">Tabs 标签页</router-link>
            </li>
            <li>
              <router-link to="/doc/dialog">Dialog 对话框</router-link>
            </li>
          </ol>
        </aside>
      </div>
      <main class="site-doc-main">
        <router-view/>
      </main>
    </div>
    <footer class="site-doc-footer">
      <p class="text-center">Made with ❤️<a href="https://github.com/Freda" target="_blank"> by Freda</a></p>
    </footer>
  </div>
</template>

<script lang="ts">
  import Topnav from '../components/Topnav.vue';
  import { inject, Ref } from 'vue';

  export default {
    components: { Topnav },
    setup() {
      const visibleMenu = inject<Ref<boolean>>('visibleMenu');
      return { visibleMenu };
    },
  };
</script>
<style lang="scss" scoped>
  $site-color: #314659;
  $focus-color: #1890ff;
  $site-border-color: #e8e8e8;
  .site-doc {
    &-wrapper {
      min-height: 100vh;
    }
    &-body {
      //https://css-tricks.com/couple-takes-sticky-footer/
      padding-top: 100px;
      margin: auto;
      max-width: 1280px;
      min-height: calc(100vh - 154px);
      display: flex;
    }
    &-aside {
      min-width: 15em;
      border: 1px solid #d6d6d6;
      border-radius: 3px;
      box-shadow: 1px 1px 0px #bababa;
      h2 {
        margin: 0.5em 0 0.2em;
        padding-left: 0.5em;
        color: rgba(0, 0, 0, 0.45);
        font-size: 18px;
      }
      > ol {
        flex-shrink: 0;
        li {
          line-height: 40px;
          font-size: 14px;
          color: #314659;
          a {
            display: block;
            padding-left: 1.5em;
            color: #314659;
            &.router-link-active {
              background: #cfd7ff;
            }
            &:hover {
              color: #1890ff;
            }
          }
        }
      }
    }
    &-main {
      margin-left: 20px;
      flex: 1;
      h2 {
        margin: 1em 0;
      }
      h3 {
        font-size: 18px;
        padding: 10px 0;
      }
    }
    &-footer {
      line-height: 50px;
      margin: auto;
      text-align: center;
      box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.15);
      background-color: #f5f5f5;
      a {color: #1890ff;}
    }
  }
  // 移动端
  @media (max-width: 750px) {
    .site-doc {
      &-body {
        padding-top: 60px;
        margin-left: 8px;
        margin-right: 8px;
        flex-direction: column;
        min-height: calc(100vh - 110px);
      }
      &-aside-wrapper {
        position: fixed;
        top: 44px;
        left: 0;
        right: 0;
        bottom: 0;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        transform: translate3D(-100%, 0, 0);
        z-index: 9999;
        transition: transform 0.3s;
        &.active {
          transform: translate3D(0, 0, 0);
        }
      }
      &-aside {
        width: 280px;
        background: #fff;
        position: relative;
        z-index: 5;
        border-radius: 0px;
        box-shadow: none;
        margin-bottom: 0;
      }
      &-mask {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: scroll;
        position: fixed;
        background: rgba(0, 0, 0, 0.5);
      }
      &-main {
        margin-left: 0;
      }
    }
  }
</style>
