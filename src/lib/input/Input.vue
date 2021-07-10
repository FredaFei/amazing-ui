<template>
  <div class="am-input-wrapper" @mouseenter="hovering=true" @mouseleave="hovering=false" ref="gInput">
    <template v-if="type=='textarea'">
      <textarea :rows="rows" :value="nativeValue" :placeholder="placeholder" :disabled="disabled" :readonly="readonly" ref="textarea" @input="onInput" @focus="onFocus" @change="onChange" @blur="onBlur"></textarea>
    </template>
    <template v-else>
      <input type="text" class="inputbox" :value="nativeValue" :placeholder="placeholder" :disabled="disabled" :readonly="readonly" ref="input" @input="onInput" @keyup.enter="onKeyup" @focus="onFocus" @change="onChange" @blur="onBlur">
    </template>
  </div>
</template>
<script lang="ts">
  import { ref, computed } from 'vue';

  const props = {
    value: {
      type: [String, Number]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '请输入内容'
    },
    prefix: {
      type: String,
      default: ''
    },
    suffix: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text',
      validator(val) {
        return ['text', 'textarea'].indexOf(val) > -1;
      }
    },
    rows: {
      type: Number,
      default: 2
    }
  };
  export default {
    name: 'AmInput',
    props,
    setup(props, context) {
      const inputRef = ref<HTMLInputElement | null>();
      const focused = ref<boolean>(false);
      const hovering = ref<boolean>(false);
      const visibleClear = computed(() => {
        return (
          props.clearable &&
          !props.disabled &&
          !props.readonly &&
          !!props.nativeValue &&
          (hovering.value || focused.value)
        );
      });
      const nativeValue = computed(() => {
        return !props.value ? '' : props.value;
      });
      const setRawValue = (value) => {
        inputRef.value.value = value;
      };
      const onInput = (event) => {
        focused.value = true;
        context.emit('input', event.target.value);
      };
      const onKeyup = (event) => {
        focused.value = false;
        context.emit('keyup-enter', event);
      };
      const onChange = (event) => {
        focused.value = true;
        context.emit('change', event);
      };
      const onBlur = (event) => {
        focused.value = false;
        context.emit('blur', event);
      };
      const onFocus = (event) => {
        focused.value = true;
        context.emit('focus', event);
      };
      const onClear = () => {
        context.emit('input', '');
        context.emit('change', '');
        context.emit('clear');
      };
      return { focused, hovering, nativeValue, visibleClear, setRawValue, onKeyup, onInput, onChange, onBlur, onFocus, onClear };
    }
  };
</script>
<style lang="scss">
  @import '../../style/_var.scss';
  .am-input-wrapper {
    display: inline-flex;
    align-items: center;
    font-size: $input-font-size;
    width: 100%;
    position: relative;
    .prefix,
    .suffix {
      position: absolute;
      top: 50%;
      z-index: 2;
      color: #bbb;
      fill: #bbb;
      line-height: 0;
      transform: translateY(-50%);
    }
    .prefix {
      left: 0.8em;
    }
    .suffix {
      right: 0.3em;
    }
    > .inputbox:not(:first-child) {
      padding-left: 30px;
    }
    > .inputbox:not(:last-child) {
      padding-right: 22px;
    }
    > textarea,
    > .inputbox {
      width: 100%;
      padding: 2px 8px;
      line-height: 28px;
      font-size: inherit;
      border: 1px solid $input-border-color;
      border-radius: $border-radius;
      &:hover {
        border-color: $input-border-color-hover;
      }
      &:focus {
        outline: none;
        box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
      }
      &[disabled],
      &[readonly] {
        color: #bbb;
        background: #fff;
        border-color: #bbb;
        cursor: not-allowed;
      }
    }
    > textarea {
      height: auto;
      line-height: 1.5;
    }
  }
</style>
