<template>
  <div class="exp-content">
    <Demo :component="Radio1Demo"/>
    <Demo :component="Radio2Demo"/>
    <Markdown v-bind:content="Doc"/>
  </div>
</template>

<script lang="ts">
  import Radio1Demo from './Radio1.demo.vue';
  import Radio2Demo from './Radio2.demo.vue';
  import Demo from '../Demo.vue';
  import Doc from './Radio.doc.md';

  export default {
    components: { Demo },
    setup() {return { Radio1Demo, Radio2Demo, Doc };}
  };
</script>
<style lang="scss" scoped>
</style>
