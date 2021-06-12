<demo>
  基础应用
</demo>
<template>
  <div>
    <Switch v-model:value="checked"/>
  </div>
</template>

<script lang="ts">
  import Switch from '../../lib/switch/Switch.vue';
  import { ref } from 'vue';

  export default {
    components: {
      Switch
    },
    setup() {
      const checked = ref(false);
      return { checked };
    },
  };
</script>