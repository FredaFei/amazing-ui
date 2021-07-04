<template>
  <div class="am-col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>
<script lang="ts">
  import { defineComponent, computed, inject, Ref } from 'vue';

  const ColProps = {
    gutter: {
      type: [String, Number],
      default: 0
    },
    span: {
      type: [String, Number],
      default: 0
    },
    offset: {
      type: [String, Number],
      default: 0
    },
  };
  defineComponent;
  export default {
    name: 'AmCol',
    props: ColProps,
    setup(props) {
      const fatherGutter = inject<Ref<boolean>>('gutter'); // get
      const colStyle = computed(() => {
        return {
          paddingLeft: `${-fatherGutter! / 2}px`,
          paddingRight: `${-fatherGutter! / 2}px`,
        };
      });
      const colClass = computed(() => {
        const { span, offset } = props;
        return [
          { 'am-col-gutter': fatherGutter },
          `am-col-span-${span}`,
          `am-col-offset-${offset}`
        ];
      });
      return { colClass, colStyle };
    }
  };
</script>
<style lang="scss">
  @import "../../style/var.scss";
  #{component(col)} {
    height: 100%;
    $class-prefix: am-col-offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
    $class-prefix: am-col-span-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    &.am-col-span-0 {
      display: none;
    }
  }
</style>