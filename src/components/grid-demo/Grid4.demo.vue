<demo>
  自定义Flex对齐
</demo>
<template>
  <Row>
    <Button @click="onToggle({align: 'center',verticalAlign:'left'})">vertical + align = top + center</Button>
  </Row>
  <Row>
    <Button @click="onToggle({align: 'spaceAround',verticalAlign:'center'})">vertical + align = center + center</Button>
  </Row>
  <Row>
    <Button @click="onToggle({align: 'right',verticalAlign:'center'})">vertical + align = top + right</Button>
  </Row>
  <Row>
    <Button @click="onToggle({align: 'spaceAround',verticalAlign:'bottom'})">vertical + align = bottom + center</Button>
  </Row>
  <Row>
    <Button @click="onToggle({align: 'spaceBetween',verticalAlign:'center'})">vertical + align = center + spaceBetween</Button>
  </Row>
  <div class="custom-grid">
    <Row :align="align" :verticalAlign="verticalAlign">
      <Col span="4">
        <div style="height: 100px">col-4-1</div>
      </Col>
      <Col span="4">
        <div style="height: 50px">col-4-2</div>
      </Col>
      <Col span="4">
        <div style="height: 120px">col-4-3</div>
      </Col>
      <Col span="4">
        <div style="height: 80px">col-4-4</div>
      </Col>
    </Row>
  </div>
</template>

<script lang="ts">
  import { Row, Col, Button } from 'amazing-ui-vue3';
  import { ref } from 'vue';

  export default {
    components: {
      Row, Col, Button
    },
    setup(props, context) {
      const align = ref('center');
      const verticalAlign = ref('left');
      const onToggle = (obj) => {
        if (obj.align) {
          align.value = obj.align;
        }
        if (obj.verticalAlign) {
          verticalAlign.value = obj.verticalAlign;
        }
      };
      return { align, verticalAlign, onToggle };
    }
  };
</script>
<style lang="scss" scoped>
  .am-row {padding: 10px 0;}
  @import "./index.scss";
</style>