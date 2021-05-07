<template>
  <header class="site-doc-header">
    <div class="site-doc-menu-icon" @click="onToggleMenu">
      <div class="menu-icon-line" @click="onToggleMenu"></div>
    </div>
    <nav class="site-doc-logo-github">
      <div class="site-nav-item">
<!--        <img :src="logo" class="logo"/>-->
      </div>
      <div class="site-nav-item"><a href="https://github.com/FredaFei/AUI" style="{color: '#1890ff'}">github</a>
      </div>
    </nav>
  </header>
</template>
<script language="ts">
  export default {
    name: 'Topnav',
    data() {
      return {
        logo: 'logo.png'
      };
    },
    methods: {
      onToggleMenu() {}
    }
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