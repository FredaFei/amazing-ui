<demo>
  基础应用
</demo>
<template>
  <div>
    <Tabs>
      <TabsPanel title="tabs 1">panel 1</TabsPanel>
      <TabsPanel title="tabs 2">panel 2</TabsPanel>
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
    },
  };
</script>