<demo>
  disable
</demo>
<template>
  <div>
    <Button :style="{color:'red'}" name="error"/>
  </div>
</template>

<script lang="ts">
  import Button from '../../lib/button/Button.vue';

  export default {
    components: {
      Button
    }
  };
</script>