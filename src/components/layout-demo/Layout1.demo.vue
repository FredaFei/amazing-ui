<demo>
  常规使用
</demo>
<template>
  <p>上中下布局</p>
  <Layout class="custom-layout">
    <Header>Header</Header>
    <Main>Content</Main>
    <Footer>Footer</Footer>
  </Layout>
</template>

<script lang="ts">
  import { Layout, Header, Main, Footer } from '../../lib/layout/index';

  export default {
    components: {
      Layout, Header, Main, Footer
    },
    setup() {
      const onClick = () => {
        console.log('click');
      };
      return { onClick };
    }
  };
</script>
<style lang="scss">
  @import "./index.scss";
</style>