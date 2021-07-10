<demo>
  基础应用
</demo>
<template>
  <div>
    <ControllCount></ControllCount>
  </div>
</template>

<script lang="ts">
  import ControllCount from '../../lib/controll-count/ControllCount.vue';
  import { ref } from 'vue';

  export default {
    components: {
      ControllCount
    },
    setup() {
      const checked = ref(false);
      return { checked };
    },
  };
</script>