<demo>
  指定下标线尺寸
</demo>
<template>
  <div>
    <Space/>
    <Tabs v-model:selected="current" :lineWidthOrHeight="lineWidthOrHeight">
      <TabsPanel title="tabs 1" name="1">panel 1</TabsPanel>
      <TabsPanel title="tabs 1000" name="2">panel 2</TabsPanel>
    </Tabs>
  </div>
</template>

<script lang="ts">
  import { Tabs, TabsPanel, Button, ButtonGroup } from 'amazing-ui-vue3';
  import { ref } from 'vue';

  export default {
    components: {
      Tabs, TabsPanel, Button, ButtonGroup
    },
    setup() {
      const lineWidthOrHeight = ref(20);
      const current = ref('1');
      return { current, lineWidthOrHeight };
    },
  };
</script>