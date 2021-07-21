<demo>
  disabled 状态
</demo>
<template>
  <div>
    <Input v-model="count" disabled/>
    <p>readonly</p>
    <Input v-model="count" readonly/>
  </div>
</template>

<script lang="ts">
  import { Input } from 'amazing-ui-vue3';
  import { ref } from 'vue';

  export default {
    components: {
      Input
    },
    setup() {
      const count = ref(1);
      return { count };
    },
  };
</script>