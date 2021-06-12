<template>
  <div class="exp-content">
    <Demo :component="Tabs1Demo"/>
    <Demo :component="Tabs2Demo"/>
  </div>
</template>

<script lang="ts">
  import Tabs1Demo from './Tabs1.demo.vue';
  import Tabs2Demo from './Tabs2.demo.vue';
  import Demo from '../Demo.vue';

  export default {
    components: { Demo },
    setup() {return { Tabs1Demo ,Tabs2Demo};}
  };
</script>
<style lang="scss" scoped>
</style>
