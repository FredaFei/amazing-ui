<demo>
  常规使用
</demo>
<template>
  <div>
    <Button @click="onClick">按钮1</Button>
    <Button @focus="onClick">设置</Button>
    <Button theme="primary">下载APP</Button>
    <Button theme="danger">好看</Button>
  </div>
</template>

<script lang="ts">
  import { Button } from 'amazing-ui-vue3';

  export default {
    components: {
      Button
    },
    setup() {
      const onClick = () => {
        console.log('click');
      };
      return { onClick };
    }
  };
</script>