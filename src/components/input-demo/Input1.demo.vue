<demo>
  基础应用
</demo>
<template>
  <div>
    <Input/>
  </div>
</template>

<script lang="ts">
  import Input from '../../lib/input/Input.vue';
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