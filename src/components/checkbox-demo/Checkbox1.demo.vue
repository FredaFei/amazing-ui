<demo>
  基础应用
</demo>
<template>
  <div>
    <Checkbox v-model:checked="checked" name="fruit" value="apple">apple</Checkbox>
  </div>
</template>

<script lang="ts">
  import { Checkbox } from 'amazing-ui-vue3';
  import { ref } from 'vue';

  export default {
    components: {
      Checkbox
    },
    setup() {
      const checked = ref(false);
      return { checked };
    },
  };
</script>