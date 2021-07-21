<demo>
  可跳转
</demo>
<template>
  <div>
    <Pager visible-quick-jumper/>
  </div>
</template>

<script lang="ts">
  import { Pager } from 'amazing-ui-vue3';
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