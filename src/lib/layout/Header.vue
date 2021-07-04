<template>
  <div class="am-header">
    <slot></slot>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  defineComponent;
  export default {
    name: 'AmHeader'
  };
</script>
<style lang="scss">
  @import "../../style/_var.scss";
  #{component(header)} {
    flex-grow: 0;
    flex-shrink: 1;
  }
</style>