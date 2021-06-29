<template>
  <button class="am-button-wrapper" :class="themeClasses">
    <slot/>
  </button>
</template>

<script lang="ts" setup="props">
  import { computed } from 'vue';

  declare const props: { theme?: 'default' | 'primary' | 'danger' };

  export default {
    name: 'AmButton',
    props: {
      theme: {
        type: String,
        default: 'default',
        validator(value) {
          return ['default', 'primary', 'danger'].includes(value);
        }
      }
    }
  };
  const { theme = 'default' } = props;
  export const themeClasses = computed(() => {
    return {
      [`am-button-${theme}`]: theme,
    };
  });
</script>
<style lang="scss">
  @import '../../style/_var.scss';
  .am-button {
    &-wrapper {
      vertical-align: middle;
      font-size: $button-fontSize;
      line-height: $button-height;
      padding: 0 1em;
      outline: none;
      overflow: hidden;
      cursor: pointer;
      border-radius: $border-radius;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      position: relative;
      &:disabled {
        cursor: not-allowed;
      }
      &:active {
        background-color: $border-active-bg;
      }
      &:focus {
        outline: none;
      }
      &::-moz-focus-inner {
        border: none;
      }
      & + .am-button-wrapper {
        margin-left: 0.5em;
      }
      > .ripple {
        position: absolute;
        background: rgba(0, 0, 0, 0.15);
        border-radius: 50%;
        transform: scale(0);
        pointer-events: none;
        opacity: 1;
        &.active {
          @include ripple;
        }
      }
    }
    &-default, &-wrapper {
      border: 1px solid $border-color;
      background: $button-bg;
      &:hover, &:focus {
        border-color: $border-color-hover;
      }
      &:disabled {
        color: $light-color;
        background-color: #f5f5f5;
        border-color: #d9d9d9;
        &:hover {
          border-color: #d9d9d9;
        }
      }
    }
    &-primary {
      color: $white;
      background: $darkblue;
      border: 1px solid $darkblue;
      &:hover, &:focus, &:disabled {
        background: $blue;
        border-color: $blue;
      }
    }
    &-danger {
      color: $white;
      background: $error-color;
      border: 1px solid $error-color;
      &:hover, &:focus, &:disabled {
        background: $error-color-hover;
        border-color: $error-color-hover;
      }
    }
    &-body {
      position: relative;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      &.icon-left {
        > .icon-name {
          order: 1;
          margin-right: 0.2em;
        }
        > .am-button-content {
          order: 2;
        }
      }
      &.icon-right {
        > .icon-name {
          order: 2;
          margin-left: 0.2em;
        }
        > .am-button-content {
          order: 1;
        }
      }
      > .am-button-content {
        line-height: 1em;
      }
    }
  }
</style>
