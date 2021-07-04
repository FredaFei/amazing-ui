<demo>
  左右布局-2
</demo>
<template>
  <Layout class="custom-layout" hasAside>
    <Aside>Aside</Aside>
    <Layout class="custom-layout">
      <Header>Header</Header>
      <Main>Content</Main>
      <Footer>Footer</Footer>
    </Layout>
  </Layout>
</template>

<script lang="ts">
  import { Layout, Header, Main, Footer, Aside } from '../../lib/layout/index';

  export default {
    components: {
      Layout, Header, Main, Footer, Aside
    },
  };
</script>
<style lang="scss">
  @import "./index.scss";
</style>