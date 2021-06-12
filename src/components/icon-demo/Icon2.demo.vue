<demo>
  自定义样式
</demo>
<template>
  <div style="font-size:28px">
    <Icon name="left" rotate="90"/>
    <Icon name="left" spin/>
  </div>
</template>

<script lang="ts">
  import Icon from '../../lib/icon/Icon.vue';

  export default {
    components: {
      Icon
    }
  };
</script>