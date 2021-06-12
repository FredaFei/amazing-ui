<demo>
  常规使用
</demo>
<template>
  <div>
    <Button @click="onClick">按钮1</Button>
    <Button icon="settings" @focus="onClick">设置</Button>
    <Button icon="upload" theme="primary">下载APP</Button>
    <Button icon="thumbs-up" theme="danger">好看</Button>
  </div>
</template>

<script lang="ts">
  import Button from '../../lib/button/Button.vue';

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