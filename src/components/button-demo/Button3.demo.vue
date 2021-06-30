<demo>
  disable 状态
</demo>
<template>
  <div>
    <Button disabled>编辑</Button>
    <Button disabled theme="primary">编辑</Button>
    <Button theme="danger" disabled>编辑</Button>
  </div>
</template>

<script lang="ts">
  import { Button } from 'amazing-ui-vue3';

  export default {
    components: {
      Button
    }
  };
</script>