<template>
  <div class="exp-content">
    <Demo :component="Icon1Demo"/>
    <Demo :component="Icon2Demo"/>
  </div>
</template>

<script lang="ts">
  import Icon1Demo from './Icon1.demo.vue';
  import Icon2Demo from './Icon2.demo.vue';
  import Demo from '../Demo.vue';

  export default {
    components: { Demo },
    setup() {return { Icon1Demo, Icon2Demo };}
  };
</script>
<style lang="scss" scoped>
</style>
