<template>
  <div class="am-options-item" :data-name="value" :class="{active,disabled}" @click="onClick">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "amOption",
  inject: ["root", "selected"],
  props: {
    value: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      active: false
    };
  },
  created() {
    this.root.addItem(this);
  },
  methods: {
    onClick() {
      if(this.disabled){
        return false
      }
      this.$emit("update:selected", this.value);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "var";
.am-options-item {
  padding: 4px 8px;
  transition: background 0.2s;
  cursor: pointer;
  &:not(.disabled):hover {
    background: rgba($blue, 0.1);
  }
  &.active {
    background: rgba($blue, 0.3);
  }
  &.disabled{
    color: #bbb;
    cursor: not-allowed;
  }
}
</style>