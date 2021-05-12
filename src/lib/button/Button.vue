<template>
  <h1>this is a {{name}}</h1>
</template>

<script lang="ts">
  export default {
    props: {
      name: String
    }
  };
</script>
