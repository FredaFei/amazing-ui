<template>
  <div class="exp-content">
    <Demo :component="Checkbox1Demo"/>
    <Demo :component="Checkbox2Demo"/>
    <Demo :component="Checkbox3Demo"/>
    <Demo :component="Checkbox4Demo"/>
    <Markdown v-bind:content="Doc"/>
  </div>
</template>

<script lang="ts">
  import Checkbox1Demo from './Checkbox1.demo.vue';
  import Checkbox2Demo from './Checkbox2.demo.vue';
  import Checkbox3Demo from './Checkbox3.demo.vue';
  import Checkbox4Demo from './Checkbox4.demo.vue';
  import Demo from '../Demo.vue';
  import Doc from './Checkbox.doc.md';

  export default {
    components: { Demo },
    setup() {return { Checkbox1Demo, Checkbox2Demo, Checkbox3Demo, Checkbox4Demo, Doc };}
  };
</script>
<style lang="scss" scoped>
</style>
