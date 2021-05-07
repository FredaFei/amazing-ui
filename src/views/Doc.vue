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
              <NavLink to="/guide">快速上手</NavLink>
            </li>
          </ol>
          <h2>组件</h2>
          <ol>{renderLink(linkMap)}</ol>
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

<script language="ts">
  import Topnav from '../components/Topnav.vue';
  import { inject, Ref } from 'vue';

  export default {
    name: 'Doc',
    components: { Topnav },
    setup() {
      const visibleMenu = inject<Ref<boolean>>('menuVisible'); // get
      return { visibleMenu };
    },
  };
</script>
<style lang="scss" scoped>
  $site-color: #314659;
  $focus-color: #1890ff;
  $site-border-color: #e8e8e8;
  body {
    overflow-x: hidden;
    color: $site-color;
    font-size: 16px;
    font-family: 'Microsoft YaHei', 'Helvetica Neue', Arial, sans-serif;
    line-height: 1.5;
    background: #fff;
    transition: background 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  .site-doc {
    &-wrapper {
      min-height: 100vh;
    }
    &-header {
      display: flex;
      padding: 4px 48px;
      align-items: center;
      background: #fdf9f3;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.13);
      position: relative;
    }
    &-logo-github {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      color: #333;
      .logo {
        height: 75px;
      }
    }
    &-body {
      //https://css-tricks.com/couple-takes-sticky-footer/
      margin: 24px auto;
      max-width: 1280px;
      min-height: calc(100vh - 184px);
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
          color: $site-color;
          a {
            display: block;
            padding-left: 1.5em;
            color: $site-color;
            &.active {
              background: #cfd7ff;
            }
            &:hover {
              color: $focus-color;
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
        margin: 24px 8px;
        flex-direction: column;
        min-height: calc(100vh - 145px);
      }
      &-aside-wrapper {
        position: fixed;
        top: 0;
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
