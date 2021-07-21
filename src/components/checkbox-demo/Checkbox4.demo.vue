<demo>
  @update:checked事件，手动更新
</demo>
<template>
  <div>
    <Checkbox :checked="checked" @update:checked="onChange" name="fruit" value="orange">orange</Checkbox>
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
      const onChange = (value) => {
        checked.value = value;
      };
      return { checked, onChange };
    },
  };
</script>