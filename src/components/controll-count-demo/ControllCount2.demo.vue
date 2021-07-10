<demo>
  input 不可输入
</demo>
<template>
  <div style="width: 140px">
    <ControllCount v-model:count="count" read-only/>
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
      const count = ref(2);
      return { count };
    },
  };
</script>