<demo>
  disabled 状态
</demo>
<template>
  <div>
    <Checkbox :value="false" disabled="true">apple</Checkbox>
    <Checkbox :value="true" disabled="true" style="margin-left: 20px">orange</Checkbox>
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
      const disabled = ref(true);
      return { checked, disabled };
    },
  };
</script>