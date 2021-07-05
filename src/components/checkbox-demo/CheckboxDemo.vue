<template>
  <div class="exp-content">
    <Demo :component="Checkbox1Demo"/>
    <Demo :component="Checkbox2Demo"/>
  </div>
</template>

<script lang="ts">
  import Checkbox1Demo from './Checkbox1.demo.vue';
  import Checkbox2Demo from './Checkbox2.demo.vue';
  import Demo from '../Demo.vue';

  export default {
    components: { Demo },
    setup() {return { Checkbox1Demo, Checkbox2Demo };}
  };
</script>
<style lang="scss" scoped>
</style>
