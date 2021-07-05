<demo>
  disabled 状态
</demo>
<template>
  <div>
    <Checkbox :value="false" disabled="true"/>
    <Checkbox :value="true" disabled="true" style="margin-left: 20px"/>
  </div>
</template>

<script lang="ts">
  import Checkbox from '../../lib/checkbox/Checkbox.vue';
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