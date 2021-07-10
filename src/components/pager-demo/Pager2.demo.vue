<demo>
  可跳转
</demo>
<template>
  <div>
    <Pager visible-quick-jumper/>
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