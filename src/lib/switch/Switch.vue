<template>
  <label class="switch-wrap" :class="[value && 'active',  disabled ? 'disabled':'']" @click="onToggle">
    <span class="core" :class="{active: value}" ref="rippleParentRef">
      <span class="ripple" :class="{active: value}" ref="rippleRef" :style="position"></span>
    </span>
  </label>
</template>
<script lang="ts">
  import { ref } from 'vue';

  export default {
    props: {
      value: Boolean,
      disabled: Boolean
    },
    setup(props, context) {
      const position = ref(null);
      const rippleParentRef = ref(null);
      const rippleRef = ref(null);
      const onToggle = () => {
        if (props.disabled) {return; }
        onRippleEffect();
        context.emit('update:value', !props.value);
      };
      const onRippleEffect = (): any => {
        const targetEl = rippleParentRef.value;
        const rippleEl = rippleRef.value;
        rippleEl!.classList.remove('active');
        const { width } = targetEl!.getBoundingClientRect();
        position.value = {
          width: `${width * 2}px`,
          height: `${width * 2}px`,
          marginLeft: `-${width}px`,
          marginTop: `-${width}px`
        };
        rippleEl!.classList.add('active');
      };
      return { onToggle, position,rippleParentRef, rippleRef};
    },
  };
</script>
<style lang="scss" scoped>
  @import "../../style/_var.scss";
  .switch-wrap {
    display: inline-flex;
    vertical-align: middle;
    width: 40px;
    height: 14px;
    border-radius: 8px;
    background: rgba($color, 0.14);
    cursor: pointer;
    position: relative;
    transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    &.active {
      background: rgba(#2196f3, 0.6);
    }
    &.disabled {
      opacity: 0.45;
    }
    .core {
      position: absolute;
      top: 50%;
      margin-top: -10px;
      width: 20px;
      height: 20px;
      box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
      border-radius: 50%;
      background: #fff;
      transform: translateX(0%);
      transition: all 0.2s linear;
      &.active {
        background: $blue;
        transform: translateX(100%);
      }
      .ripple {
        position: absolute;
        border-radius: 50%;
        left: 50%;
        top: 50%;
        transform: scale(0);
        pointer-events: none;
        opacity: 1;
        background: inherit;
        &.active {
          @include ripple;
        }
      }
    }
  }
</style>