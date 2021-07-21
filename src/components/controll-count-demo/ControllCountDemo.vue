<template>
  <div class="exp-content">
    <Demo :component="ControllCount1Demo"/>
    <Demo :component="ControllCount2Demo"/>
    <Demo :component="ControllCount3Demo"/>
    <Markdown v-bind:content="Doc"/>
  </div>
</template>

<script lang="ts">
  import ControllCount1Demo from './ControllCount1.demo.vue';
  import ControllCount2Demo from './ControllCount2.demo.vue';
  import ControllCount3Demo from './ControllCount3.demo.vue';
  import Demo from '../Demo.vue';
  import Doc from './ControllCount.doc.md';

  export default {
    components: { Demo },
    setup() {return { ControllCount1Demo, ControllCount2Demo, ControllCount3Demo, Doc };}
  };
</script>
<style lang="scss" scoped>
</style>
