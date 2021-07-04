<template>
  <div :class="['am-layout',{'am-layout-hasAside': hasAside}]">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup="props, context">
  import { defineComponent, SetupContext, Component, ref, onMounted } from 'vue';
  import Aside from './Aside.vue';

  defineComponent;
  export default {
    name: 'AmLayout'
  };
  declare const context: SetupContext;
  export const defaults = context.slots.default();
  export const hasAside = ref(false);
  // onMounted()
  defaults.forEach((tag) => {
    if (tag.children.length > 0) {
      if ((tag.type as Component).name !== Aside.name) {
        hasAside.value = true;
      }
    }
  });

</script>
<style lang="scss">
  @import "../../style/_var.scss";
  #{component(layout)} {
    display: flex;
    flex-direction: column;
    & > & {
      flex-grow: 1;
    }
    &-hasAside {
      flex-direction: row;
      #{component(layout)} {
        flex-direction: column;
      }
    }
  }
</style>