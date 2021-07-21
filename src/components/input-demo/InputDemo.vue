<template>
  <div class="exp-content">
    <Demo :component="Pager1Demo"/>
    <Demo :component="Pager2Demo"/>
    <Markdown v-bind:content="Doc"/>
  </div>
</template>

<script lang="ts">
  import Pager1Demo from './Input1.demo.vue';
  import Pager2Demo from './Input2.demo.vue';
  import Demo from '../Demo.vue';
  import Doc from './Input.doc.md';

  export default {
    components: { Demo },
    setup() {return { Pager1Demo, Pager2Demo, Doc };}
  };
</script>
<style lang="scss" scoped>
</style>
