<demo>
  按钮组合
</demo>
<template>
  <div>
    <ButtonGroup>
      <Button icon="left"></Button>
      <Button>1</Button>
      <Button>2</Button>
      <Button icon="loading"></Button>
      <Button icon="right"></Button>
    </ButtonGroup>
  </div>
</template>

<script lang="ts">
  import ButtonGroup from '../../lib/button/ButtonGroup.vue';
  import Button from '../../lib/button/Button.vue';

  export default {
    components: {
      Button, ButtonGroup
    }
  };
</script>