<demo>
  disabled 状态
</demo>
<template>
  <div>
    <Switch :value="false" disabled="true"/>
    <Switch :value="true" disabled="true" style="margin-left: 20px"/>
  </div>
</template>

<script lang="ts">
  import { Switch } from 'amazing-ui-vue3';
  import { ref } from 'vue';

  export default {
    components: {
      Switch
    },
    setup() {
      const checked = ref(false);
      const disabled = ref(true);
      return { checked, disabled };
    },
  };
</script>