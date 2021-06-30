<demo>
  基础应用
</demo>
<template>
  <div>
    <Tabs v-model:selected="current">
      <TabsPanel title="tabs 1" name="1">panel 1</TabsPanel>
      <TabsPanel title="tabs 1000" name="2">panel 2</TabsPanel>
    </Tabs>
  </div>
</template>

<script lang="ts">
  import { Tabs, TabsPanel } from 'amazing-ui-vue3';
  import { ref } from 'vue';

  export default {
    components: {
      Tabs, TabsPanel
    },
    setup() {
      const current = ref('1');
      return { current };
    },
  };
</script>