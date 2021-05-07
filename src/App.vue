<template>
  <router-view/>
</template>

<script language="ts">
  import { ref, provide } from "vue";
  import { router } from "./router";
  export default {
    name: 'App',
    setup() {
      const width = document.documentElement.clientWidth;
      const visibleMenu = ref(width <= 500 ? false : true);
      provide("visibleMenu", visibleMenu); // set
      router.afterEach(() => {
        if (width <= 500) {
          visibleMenu.value = false;
        }
      });
    },
  };
</script>
