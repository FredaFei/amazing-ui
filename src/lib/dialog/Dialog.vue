<template>
  <template v-if="visible">
    <div v-if="mask" class="am-dialog-mask" @click={onClickMask}></div>
    <div class="am-dialog">
      <div class="am-dialog-close" @click="onClose">
        <Icon name="close"/>
      </div>
      <div class="am-dialog-header">
        <slot name="title"></slot>
      </div>
      <div class="am-dialog-body">
        <slot name="body"/>
      </div>
      <div class="am-dialog-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </template>
</template>
<script lang="ts">
  import Icon from '../icon/Icon.vue';

  export default {
    components: { Icon },
    props: {
      visible: {
        type: Boolean,
        required: true,
        default: false,
      },
      mask: {
        type: Boolean,
        default: true
      },
      maskClosable: Boolean,
      onYes: Function,
      onNo: Function,
    },
    setup(props, context) {
      const onClickMask = () => {
        if (props.maskClosable) {props.onNo();}
      };
      const onClose = () => {
        props.onNo();
      };
      return { onClickMask, onClose };
    }
  };
</script>

<style lang="scss">
  @import '../../style/_var.scss';
  %padding {
    padding: 8px 24px;
  }
  #{component(dialog)} {
    &-mask {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      z-index: 9;
    }
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 360px;
    border-radius: $border-radius;
    background: #fff;
    z-index: 100;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    &-close {
      position: absolute;
      bottom: 100%;
      left: 100%;
      transform: translate(-50%, 50%);
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      font-size: 16px;
      color: $light-color;
      border-radius: 50%;
      border: 1px solid $gray;
      background: #fff;
      cursor: pointer;
      transition: transform 0.25s;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      &:hover {
        color: $color;
        border-color: $light-color;
        transform: translate(-50%, 50%) scale(1.3);
      }
      > svg {
        transition: transform 250ms;
        &:hover {
          transform: rotate(90deg);
        }
      }
    }
    &-btn-confirm {
      background: $blue;
      border-color: transparent;
      color: #fff;
      &:hover {
        border-color: transparent;
        background: rgba($blue, .9);
      }
    }
    &-header {
      @extend %padding;
      line-height: 1.8;
      border-bottom: 1px solid $gray;
    }
    &-body {
      padding: 24px;
      font-size: 14px;
      line-height: 1.5;
      word-wrap: break-word;
    }
    &-footer {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      @extend %padding;
      border-top: 1px solid $gray;
    }
  }
</style>