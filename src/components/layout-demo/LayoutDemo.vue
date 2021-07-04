<template>
  <div class="exp-content">
    <Demo :component="Layout1Demo"/>
  </div>
</template>

<script lang="ts">
  import Layout1Demo from './Layout1.demo.vue';
  import Demo from '../Demo.vue';

  export default {
    components: { Demo },
    setup() {return { Layout1Demo };}
  };
</script>
<style lang="scss" scoped>
</style>
