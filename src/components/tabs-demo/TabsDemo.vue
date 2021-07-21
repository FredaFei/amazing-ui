<template>
  <div class="exp-content">
    <Demo :component="Tabs1Demo"/>
    <Demo :component="Tabs2Demo"/>
    <Demo :component="Tabs3Demo"/>
    <Markdown v-bind:content="Doc"/>
  </div>
</template>

<script lang="ts">
  import Tabs1Demo from './Tabs1.demo.vue';
  import Tabs2Demo from './Tabs2.demo.vue';
  import Tabs3Demo from './Tabs3.demo.vue';
  import Demo from '../Demo.vue';
  import Doc from './Tabs.doc.md';

  export default {
    components: { Demo },
    setup() {return { Tabs1Demo, Tabs2Demo, Tabs3Demo, Doc };}
  };
</script>
<style lang="scss" scoped>
</style>
