<demo>
  基础应用
</demo>
<template>
  <div style="width: 140px">
    <Pager/>
  </div>
</template>

<script lang="ts">
  import Pager from '../../lib/pager/Pager.vue';
  import { ref } from 'vue';

  export default {
    components: {
      Pager
    },
    setup() {
      const count = ref(1);
      return { count };
    },
  };
</script>