<demo>
  左右布局-2
</demo>
<template>
  <Layout class="custom-layout">
    <Header>Header</Header>
    <Layout class="custom-layout" hasAside>
      <Main>Content</Main>
      <Aside>Aside</Aside>
    </Layout>
    <Footer>Footer</Footer>
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