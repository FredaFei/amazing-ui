<demo>
  左右布局-1
</demo>
<template>
  <Layout class="custom-layout">
    <Header>Header</Header>
    <Layout class="custom-layout" hasAside>
      <Aside>Aside</Aside>
      <Main>Content</Main>
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