<template>
  <div class="am-row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>
<script lang="ts">
  import { defineComponent, computed, provide } from 'vue';

  const RowProps = {
    gutter: {
      type: Number,
    },
    align: {
      type: String,
      default: 'left',
      validator(val) {
        return ['left', 'center', 'right', 'spaceBetween', 'spaceAround'].includes(val);
      }
    },
    verticalAlign: {
      type: String,
      default: 'left',
      validator(val) {
        return ['top', 'center', 'bottom'].includes(val);
      }
    },
  };
  defineComponent;
  export default {
    name: 'AmRow',
    props: RowProps,
    setup(props) {
      provide('gutter', props.gutter);
      const rowStyle = computed(() => {
        let { gutter } = props;
        return {
          marginLeft: `${-gutter! / 2}px`,
          marginRight: `${-gutter! / 2}px`,
        };
      });
      const rowClass = computed(() => {
        const { align, verticalAlign } = props;
        return [
          align !== 'left' && `am-row-align-${align}`,
          verticalAlign !== 'top' && `am-row-verticalAlign-${verticalAlign}`
        ];
      });
      return { rowClass, rowStyle };
    }
  };
</script>
<style lang="scss">
  @import "../../style/var.scss";
  #{component(row)} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    &-align-right {
      justify-content: flex-end;
    }
    &-align-center {
      justify-content: center;
    }
    &-align-spaceBetween {
      justify-content: space-between;
    }
    &-align-spaceAround {
      justify-content: space-around;
    }
    &-verticalAlign-center {
      align-items: center
    }
    &-verticalAlign-bottom {
      align-items: flex-end
    }
  }
</style>