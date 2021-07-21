<template>
  <div class="exp-content">
    <Demo :component="Dialog1Demo"/>
    <Demo :component="Dialog2Demo"/>
    <Markdown v-bind:content="Doc"/>
  </div>
</template>

<script lang="ts">
  import Dialog1Demo from './Dialog1.demo.vue';
  import Dialog2Demo from './Dialog2.demo.vue';
  import Demo from '../Demo.vue';
  import Doc from './Dialog.doc.md';

  export default {
    components: { Demo },
    setup() {return { Dialog1Demo, Dialog2Demo, Doc };}
  };
</script>
<style lang="scss" scoped>
</style>
