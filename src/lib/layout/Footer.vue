<template>
  <div class="am-footer">
    <slot></slot>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  defineComponent;
  export default {
    name: 'AmFooter'
  };
</script>
<style lang="scss">
  @import "../../style/_var.scss";
  #{component(footer)} {
    flex-grow: 0;
    flex-shrink: 1;
  }
</style>