<demo>
  常规使用
</demo>
<template>
  <div>
    <Button @click="onClick">点我</Button>
    <Dialog></Dialog>
  </div>
</template>

<script lang="ts">
  import Button from '../../lib/button/Button.vue';
  import Dialog from '../../lib/dialog/Dialog.vue';

  export default {
    components: {
      Button,Dialog
    },
    setup() {
      const onClick = () => {
        console.log('click');
      };
      return { onClick };
    }
  };
</script>