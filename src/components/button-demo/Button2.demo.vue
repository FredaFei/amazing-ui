<demo>
  按钮组合
</demo>
<template>
  <div>
    <ButtonGroup>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
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