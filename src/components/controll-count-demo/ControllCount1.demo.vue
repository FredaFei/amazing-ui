<demo>
  基础应用
</demo>
<template>
  <div style="width: 140px">
    <ControllCount v-model:count="count"/>
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
      const count = ref(1);
      return { count };
    },
  };
</script>