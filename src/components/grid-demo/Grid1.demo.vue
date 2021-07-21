<demo>
  基础栅格
</demo>
<template>
  <div class="custom-grid">
    <Row>
      <Col span="12">col-12</Col>
      <Col span="12">col-12</Col>
    </Row>
    <Row>
      <Col span="8">col-8</Col>
      <Col span="8">col-8</Col>
      <Col span="8">col-8</Col>
    </Row>
    <Row>
      <Col span="6">col-6</Col>
      <Col span="6">col-6</Col>
      <Col span="6">col-6</Col>
      <Col span="6">col-6</Col>
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