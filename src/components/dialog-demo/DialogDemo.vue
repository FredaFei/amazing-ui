<template>
  <div class="exp-content">
    <Demo :component="Dialog1Demo"/>
  </div>
</template>

<script lang="ts">
  import Dialog1Demo from './Dialog1.demo.vue';
  import Demo from '../Demo.vue';

  export default {
    components: { Demo },
    setup() {return { Dialog1Demo };}
  };
</script>
<style lang="scss" scoped>
</style>
