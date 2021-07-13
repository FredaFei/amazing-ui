<template>
  <header class="site-doc-header">
    <!--mobile端-->
    <div class="site-doc-menu-icon" @click="toggleMenu">
      <div class="menu-icon-line" @click="toggleMenu"></div>
    </div>
    <nav class="site-doc-logo-github">
      <!--PC端-->
      <div class="site-nav-item">
        <img src="../assets/logo.png" alt="logo" class="logo"/>
      </div>
      <div class="site-nav-item"><a href="https://github.com/FredaFei/AUI" :style="{color: '#1890ff'}">github</a></div>
    </nav>
  </header>
</template>
<script lang="ts">
  import { inject, Ref } from 'vue';

  export default {
    setup() {
      const visibleMenu = inject<Ref<boolean>>('visibleMenu'); // get
      const toggleMenu = () => {
        visibleMenu.value = !visibleMenu.value;
      };
      return { toggleMenu };
    },
  };
</script>
<style lang="scss" scoped>
  .site-doc {
    &-header {
      display: flex;
      padding: 4px 48px;
      align-items: center;
      background: #fdf9f3;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.13);
      position: relative;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 9;
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
  }
  // 移动端
  @media (max-width: 750px) {
    .site-doc {
      &-header {
        padding: 10px;
        img {display: none;}
      }
      &-menu-icon {
        .menu-icon-line {
          position: relative;
          display: block;
          margin: 10px 0;
          &,
          &:before,
          &:after {
            width: 16px;
            height: 2px;
            border-radius: 1px;
            background: #0a0a0a;
          }
          &:before,
          &:after {
            content: '';
            position: absolute;
          }
          &:before {
            top: -6px;
          }
          &:after {
            top: 6px;
          }
        }
      }
      &-logo-github {
        margin-left: 10px;
      }
    }
  }
</style>