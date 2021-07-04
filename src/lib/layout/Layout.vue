<template>
  <div :class="['am-layout',{'am-layout-hasAside': hasAside}]">
    <slot></slot>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  defineComponent;
  export default {
    name: 'AmLayout',
    props: {
      hasAside: Boolean
    }
  };

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