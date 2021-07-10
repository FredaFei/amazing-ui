<template>
  <div class="exp-content">
    <Demo :component="Pager1Demo"/>
    <Demo :component="Pager2Demo"/>
  </div>
</template>

<script lang="ts">
  import Pager1Demo from './Pager1.demo.vue';
  import Pager2Demo from './Pager2.demo.vue';
  import Demo from '../Demo.vue';

  export default {
    components: { Demo },
    setup() {return { Pager1Demo, Pager2Demo };}
  };
</script>
<style lang="scss" scoped>
</style>
