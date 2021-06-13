<template>
  <svg class="am-icon" :class="{'am-icon-spin': spin||(name === 'loading')}" :style="rotateStyle" v-bind="$attrs">
    <use :xlink:href="`#i-${name}`"/>
  </svg>
</template>
<script lang="ts">
  import './svg.js';
  import { computed } from 'vue';

  export default {
    name: 'AmIcon',
    props: {
      name: {
        type: String,
        required: true
      },
      spin: Boolean,
      rotate: Number
    },
    setup(props, context) {
      const rotateStyle = computed(() => {
        return props.rotate && {
          transform: `rotate(${props.rotate}deg)`,
          transition: `transform .25s ease`
        };
      });
      return { rotateStyle };
    }
  };
</script>
<style lang="scss">
  @import '../../style/_var.scss';
  #{component(icon)} {
    width: 1em;
    height: 1em;
    vertical-align: -0.1em;
    fill: currentColor;
    overflow: hidden;
    &-spin {
      @include spin;
    }
  }
</style>