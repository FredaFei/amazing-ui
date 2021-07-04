<template>
  <div class="am-main">
    <slot></slot>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  defineComponent;
  export default {
    name: 'AmMain'
  };
</script>
<style lang="scss">
  @import "../../style/_var.scss";
  #{component(main)} {
    flex: 1;
  }
</style>