<template>
  <div class="exp-content">
    <Demo :component="Grid1Demo"/>
    <Demo :component="Grid2Demo"/>
    <Demo :component="Grid3Demo"/>
    <Demo :component="Grid4Demo"/>
    <Markdown v-bind:content="Doc"/>
  </div>
</template>

<script lang="ts">
  import Grid1Demo from './Grid1.demo.vue';
  import Grid2Demo from './Grid2.demo.vue';
  import Grid3Demo from './Grid3.demo.vue';
  import Grid4Demo from './Grid4.demo.vue';
  import Demo from '../Demo.vue';
  import Doc from './Grid.doc.md';

  export default {
    components: { Demo },
    setup() {return { Grid1Demo, Grid2Demo, Grid3Demo, Grid4Demo, Doc };}
  };
</script>
<style lang="scss" scoped>
  @import "index.scss";
</style>
