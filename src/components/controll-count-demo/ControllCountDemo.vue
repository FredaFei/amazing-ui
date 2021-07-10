<template>
  <div class="exp-content">
    <Demo :component="Checkbox1Demo"/>
  </div>
</template>

<script lang="ts">
  import ControllCount1Demo from './ControllCount1.demo';
  import Demo from '../Demo.vue';

  export default {
    components: { Demo },
    setup() {return { ControllCount1Demo, };}
  };
</script>
<style lang="scss" scoped>
</style>
