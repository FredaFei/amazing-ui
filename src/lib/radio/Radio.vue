<template>
  <label :class="classes" @click="onClick">
      <span class="am-radio-input">
        <input type="radio" class="am-radio" v-bind="attrs"/>
      </span>
    <span class="am-radio-label"><slot/></span>
  </label>
</template>
<script lang="ts">
  import { computed } from 'vue';

  export default {
    name: 'AmRadio',
    props: {
      value: {
        required: true,
        type: [Boolean, String, Number]
      },
      checked: [Boolean, String, Number],
      disabled: Boolean,
      name: String
    },
    setup(props, context) {
      const isChecked = () => {
        return props.checked === props.value;
      };
      const classes = computed(() => {
        return [
          'am-radio-wrapper',
          {
            'am-radio-disabled': props.disabled,
            'am-radio-checked': isChecked()
          }
        ];
      });
      const attrs = computed(() => ({
        name: props.name, value: props.value, checked: isChecked(), disabled: props.disabled
      }));
      const onClick = (e) => {
        if (props.disabled) {return; }
        e.preventDefault();
        context.emit('update:checked', props.value);
      };
      return { classes, onClick, attrs };
    }
  };
</script>
<style lang="scss">
  @import "../../style/_var.scss";
  #{component(radio)} {
    border: none;
    outline: none;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    &-wrapper {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      & + .am-radio-wrapper {
        margin-left: 1em;
      }
    }
    &-input {
      position: relative;
      width: 16px;
      height: 16px;
      border: 1px solid $border-color;
      border-radius: 50%;
      &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 8px;
        height: 8px;
        transform: translate(-50%, -50%);
        border-radius: 50%;
      }
    }
    &-checked {
      #{component(radio)} {
        &-input {
          &:before {
            background: darken($gray, 50%);
          }
        }
      }
    }
    &-indeterminate {
      &:before {
        border: 1px solid $border-color;
        background: none;
      }
    }
    &-disabled {
      cursor: not-allowed;
      opacity: 0.48;
    }
    &-label {
      margin-left: 0.5em;
    }
  }
</style>