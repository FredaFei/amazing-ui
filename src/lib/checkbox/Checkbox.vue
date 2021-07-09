<template>
  <label class="am-checkbox-wrapper" :class="classes" @click="onToggle">
      <span class="am-checkbox-input" :class="{'am-checkbox-indeterminate': indeterminate}">
        <input type="checkbox" class="am-checkbox" v-bind="attrs"/>
      </span>
    <span class="am-checkbox-label"><slot></slot></span>
  </label>
</template>
<script lang="ts">
  import { defineComponent, computed } from 'vue';

  const CheckboxProps = {
    indeterminate: {
      type: Boolean,
      default: false
    },
    checked: {
      type: [Boolean, String, Number, Array],
      required: true,
    },
    value: {
      type: [String, Number],
    },
    disabled: Boolean,
    name: String
  };
  defineComponent;
  export default {
    name: 'AmCheckbox',
    props: CheckboxProps,
    setup(props, context) {
      const isCheckedArray = () => {
        return Array.isArray(props.checked);
      };
      const hasValue = () => {
        return props.hasOwnProperty(props.value);
      };
      const isSelected = () => {
        if (isCheckedArray()) {
          return props.checked.includes(props.value);
        }
        return props.checked === props.value;
      };
      console.log('context.slots', context);
      const classes = computed(() => {
        const { disabled, checked } = props;
        return [
          { 'am-checkbox-disabled': disabled },
          { 'am-checkbox-checked': isSelected() },
        ];
      });
      const attrs = computed(() => ({
        name: props.name, value: props.value, checked: isSelected(), disabled: props.disabled
      }));
      const onMultilCheck = () => {
        const newModel = [...props.checked];
        if (!isSelected()) {
          newModel.push(props.value);
        } else {
          const index = newModel.indexOf(props.value);
          index >= 0 && newModel.splice(index, 1);
        }
        context.emit('update:checked', newModel);
      };
      const onSingleCheck = () => {
        context.emit('update:checked', isSelected() ? '' : props.value);
      };
      const onSimpleCheck = () => {
        console.log('onSimpleCheck', isSelected());
        context.emit('update:checked', isSelected() ? '' : props.value);
      };
      const onToggle = (e) => {
        if (props.disabled) {
          return false;
        }
        e.preventDefault();
        console.log('isCheckedArray', isCheckedArray());
        if (isCheckedArray()) {
          onMultilCheck();
          console.log('2');
        } else if (hasValue()) {
          console.log('hasvalue');
          onSingleCheck();
        } else {
          onSimpleCheck();
        }
      };
      const onClick = (e) => {
        console.log('222');
        if (props.disabled) {return; }
        e.preventDefault();
        context.emit('update:checked', props.value);
      };
      return { classes, attrs, onToggle };
    }
  };
</script>
<style lang="scss">
  @import "../../style/var.scss";
  #{component(checkbox)} {
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
      & + .am-checkbox-wrapper {
        margin-left: 1em;
      }
    }
    &-input {
      position: relative;
      width: 16px;
      height: 16px;
      border: 1px solid $border-color;
      &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 8px;
        height: 8px;
        transform: translate(-50%, -50%);
      }
    }
    &-checked {
      #{component(checkbox)} {
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