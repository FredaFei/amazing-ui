<demo>
  disabled 状态
</demo>
<template>
  <div>
    <Radio v-model:checked="checkedValue" name="fruit" value="apple">apple</Radio>
    <Radio v-model:checked="checkedValue" name="fruit" value="orange">orange</Radio>
    <Radio v-model:checked="checkedValue" name="fruit" value="banana" disabled>banana</Radio>
  </div>
</template>

<script lang="ts">
  import { ref } from 'vue';
  import { Radio } from 'amazing-ui-vue3';

  export default {
    components: {
      Radio
    },
    setup() {
      const checkedValue = ref('apple');
      return { checkedValue };
    }
  };
</script>