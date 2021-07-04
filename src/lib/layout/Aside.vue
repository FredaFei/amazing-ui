<template>
  <div class="am-aside">
    <slot></slot>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';

  defineComponent;
  export default {
    name: 'AmAside'
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
  #{component(header)} {
    flex-grow: 0;
    flex-shrink: 1;
  }
  #{component(footer)} {
    flex-grow: 0;
    flex-shrink: 1;
  }
  #{component(main)} {
    flex: 1;
  }
</style>