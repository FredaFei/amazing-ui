<template>
  <div class="exp-content">
    <Demo :component="Switch1Demo"/>
  </div>
</template>

<script lang="ts">
  import Switch1Demo from './Switch1.demo.vue';
  import Demo from '../Demo.vue';

  export default {
    components: { Demo },
    setup() {return { Switch1Demo, };}
  };
</script>
<style lang="scss" scoped>
</style>
