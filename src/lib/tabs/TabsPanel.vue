<template>
  <div><slot/></div>
</template>
<script lang="ts">
  export default {
    props:{
      name: {
        type: String,
        required: true
      },
    }
  }
</script>
<style lang="scss" scoped></style>