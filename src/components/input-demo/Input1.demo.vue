<demo>
  基础应用
</demo>
<template>
  <div>
    <p>基础的Input框</p>
    <Input/>
  </div>
  <div>
    <p>基础的Textarea</p>
    <Input type="textarea" :rows="4"/>
  </div>
</template>

<script lang="ts">
  import { Input } from 'amazing-ui-vue3';

  export default {
    components: {
      Input
    },
  };
</script>