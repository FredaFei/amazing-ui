<template>
  <div class="exp-box">
    <Demo :component="Button1Demo"/>
    <Demo :component="Button2Demo"/>
  </div>
</template>

<script lang="ts">
  import Button1Demo from './Button1.demo.vue';
  import Button2Demo from './Button2.demo.vue';
  import Demo from './Demo.vue';

  export default {
    components: { Demo },
    setup() {return { Button1Demo, Button2Demo };}
  };
</script>
<style lang="scss" scoped>
  $site-color: #314659;
  $focus-color: #1890ff;
  $site-border-color: #e8e8e8;
  $light-color: #666;
  .exp-box {
    &.custom-icon {
      .am-icon {font-size: 28px;}
    }
  }
  .exp-section {
    padding: 10px 20px 0;
    border-radius: 4px;
    background: white;
    border: 1px solid #d6d6d6;
    box-shadow: 1px 1px 0px #bababa;
    overflow-x: auto;
    p {padding-bottom: 10px;}
    & + .exp-section {
      margin-top: 20px;
      font-size: 15px;
    }
    &-btn {
      background: #66e2d5;
      border-color: #000;
      color: #000;
      &:hover {
        border-color: #000;
        background: rgba(#66e2d5, 0.9);
      }
    }
  }
  .code-box {
    color: $light-color;
    margin-top: 20px;
    padding: 10px 0;
    border-top: 1px solid $site-border-color;
    .code-title {
      display: flex;
      align-items: center;
      color: $focus-color;
      font-size: 16px;
      cursor: pointer;
    }
    .am-icon {font-size: 30px;margin-right: 6px;}
  }
</style>
