<template>
  <div class="exp-content">
    <Demo :component="Button1Demo"/>
    <Demo :component="Button2Demo"/>
    <Demo :component="Button3Demo"/>
    <Markdown v-bind:content="Doc"/>
  </div>
</template>

<script lang="ts">
  import Button1Demo from './Button1.demo.vue';
  import Button2Demo from './Button2.demo.vue';
  import Button3Demo from './Button3.demo.vue';
  import Demo from '../Demo.vue';
  import Doc from './Button.doc.md';

  export default {
    components: { Demo },
    setup() {return { Button1Demo, Button2Demo, Button3Demo, Doc };}
  };
</script>
<style lang="scss" scoped>
</style>
