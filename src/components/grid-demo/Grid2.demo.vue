<demo>
  区块间隔
</demo>
<template>
  <div class="custom-grid">
    <Row gutter="10">
      <Col span="6">
        <div>col-6</div>
      </Col>
      <Col span="6">
        <div>col-6</div>
      </Col>
      <Col span="6">
        <div>col-6</div>
      </Col>
      <Col span="6">
        <div>col-6</div>
      </Col>
    </Row>
  </div>
</template>

<script lang="ts">
  import { Row, Col } from 'amazing-ui-vue3';

  export default {
    components: {
      Row, Col
    },
  };
</script>
<style lang="scss">
  @import "./index.scss";
</style>