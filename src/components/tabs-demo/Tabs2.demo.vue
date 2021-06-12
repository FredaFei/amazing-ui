<demo>
  垂直布局
</demo>
<template>
  <div>
    <Tabs v-model:selected="current" direction="vertical">
      <TabsPanel title="tabs 1" name="1">panel 1</TabsPanel>
      <TabsPanel title="tabs 1000" name="2">panel 2</TabsPanel>
    </Tabs>
  </div>
</template>

<script lang="ts">
  import Tabs from '../../lib/tabs/Tabs.vue';
  import TabsPanel from '../../lib/tabs/TabsPanel.vue';
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