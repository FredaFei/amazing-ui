<template>
  <div>
    tabs
    <div v-for="t in titles" :key="t">{{t}}</div>
    <component v-for="c in defaults" :is="c" :key="c"/>
  </div>
</template>
<script lang="ts">
  import TabsPanel from './TabsPanel.vue';

  export default {
    setup(props, context) {
      const defaults = context.slots.default();
      console.log(...defaults);
      defaults.forEach(tag => {
        if (tag.type !== TabsPanel) {
          throw new Error('tabs 子节点必须为 TabsPanel');
        }
        return tag;
      });
      const titles = defaults.forEach(tag => tag.props.title);
      return { titles, defaults };
    }
  };
</script>
<style lang="scss" scoped></style>