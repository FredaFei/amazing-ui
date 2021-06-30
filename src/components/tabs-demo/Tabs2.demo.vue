<demo>
  垂直布局
</demo>
<template>
  <div>
    <ButtonGroup>
      <Button v-for="it in directions" :key="it" @click="onToggle(it)" :theme="theme(it)">{{it}}</Button>
    </ButtonGroup>
    <Space/>
    <Tabs v-model:selected="current" :direction="currentDirection">
      <TabsPanel title="tabs 1" name="1">panel 1</TabsPanel>
      <TabsPanel title="tabs 1000" name="2">panel 2</TabsPanel>
    </Tabs>
  </div>
</template>

<script lang="ts">
  import { Tabs, TabsPanel, Button, ButtonGroup } from 'amazing-ui-vue3';
  import { ref } from 'vue';

  const directions = ['horizontal', 'vertical'];
  export default {
    components: {
      Tabs, TabsPanel, Button, ButtonGroup
    },
    setup() {
      const currentDirection = ref('horizontal');
      const onToggle = (value: string) => {
        currentDirection.value = value;
      };
      const theme = (value: string) => {
        return currentDirection.value === value ? 'primary' : 'default';
      };
      const current = ref('1');
      return { current, currentDirection, onToggle, directions, theme };
    },
  };
</script>