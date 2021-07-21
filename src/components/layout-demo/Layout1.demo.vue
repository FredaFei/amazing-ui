<demo>
  上中下布局
</demo>
<template>
  <Layout class="custom-layout">
    <Header>Header</Header>
    <Main>Content</Main>
    <Footer>Footer</Footer>
  </Layout>
</template>

<script lang="ts">
  import { Layout, Header, Main, Footer } from 'amazing-ui-vue3';

  export default {
    components: {
      Layout, Header, Main, Footer
    },
  };
</script>
<style lang="scss">
  @import "./index.scss";
</style>