<template>
  <router-view/>
</template>

<script lang="ts">
  import { ref, provide } from 'vue';
  import { router } from './router';

  export default {
    name: 'App',
    setup() {
      const width = document.documentElement.clientWidth;
      const visibleMenu = ref(false);
      provide('visibleMenu', visibleMenu);
      router.afterEach(() => {
        if (width <= 500) {
          visibleMenu.value = false;
        }
      });
    },
  };
</script>
