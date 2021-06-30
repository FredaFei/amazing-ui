<template>
  <div class="am-button-group 22">
    <slot/>
  </div>
</template>

<script lang="ts" setup="props, context">
  import Button from './Button.vue';
  import { defineComponent, SetupContext, Component } from 'vue';

  defineComponent;
  export default {
    name: 'AmButtonGroup',
  };
  declare const context: SetupContext;
  export const defaults = context.slots.default();
  defaults.forEach((tag) => {
    if ((tag.type as Component).name !== Button.name) {
      throw new Error('ButtonGroup 子节点必须为 Button');
    }
  });
</script>
<style lang="scss">
  @import '../../style/_var.scss';
  .am-button-group {
    display: inline-flex;
    vertical-align: middle;
    > .am-button-wrapper {
      border-radius: 0;
      &:not(:first-child) {
        border-left: none;
        margin-left: 0;
      }
      &:first-child {
        border-top-left-radius: $border-radius;
        border-bottom-left-radius: $border-radius;
      }
      &:last-child {
        border-top-right-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
      }
      &:hover {
        position: relative;
        z-index: 1;
      }
    }
  }
</style>
