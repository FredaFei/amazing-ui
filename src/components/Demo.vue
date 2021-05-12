<template>
  <div class="exp-box">
    <h3>disable</h3>
    <div class="exp-section">
      <component :is="component"/>
      <div class="code-box">
        <div class="code-title" @click="toggleCode">
          <!--        <Icon name={visible ? 'code-open' : 'code-close'}/>-->
          <span>查看代码</span>
        </div>
        <pre v-if="visibleCode" class="language-html" v-html="html"></pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { ref, computed } from 'vue';
  import 'prismjs';
  import 'prismjs/themes/prism.css';

  const Prism = (window as any).Prism;

  export default {
    props: { component: Object },
    setup(props) {
      const visibleCode = ref(false);
      const toggleCode = () => visibleCode.value = !visibleCode.value;
      const html = computed(() => {
        return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html');
      });
      return {
        Prism, toggleCode, visibleCode, html
      };
    }
  };
</script>
<style lang="scss" scoped>
  $site-color: #314659;
  $focus-color: #1890ff;
  $site-border-color: #e8e8e8;
  $light-color: #666;
  .exp-box {
    &.custom-icon {
      .am-icon {font-size: 28px;}
    }
  }
  .exp-section {
    padding: 10px 20px 0;
    border-radius: 4px;
    background: white;
    border: 1px solid #d6d6d6;
    box-shadow: 1px 1px 0px #bababa;
    overflow-x: auto;
    p {padding-bottom: 10px;}
    & + .exp-section {
      margin-top: 20px;
      font-size: 15px;
    }
    &-btn {
      background: #66e2d5;
      border-color: #000;
      color: #000;
      &:hover {
        border-color: #000;
        background: rgba(#66e2d5, 0.9);
      }
    }
  }
  .code-box {
    color: $light-color;
    margin-top: 20px;
    padding: 10px 0;
    border-top: 1px solid $site-border-color;
    .code-title {
      display: flex;
      align-items: center;
      color: $focus-color;
      font-size: 16px;
      cursor: pointer;
    }
    .am-icon {font-size: 30px;margin-right: 6px;}
  }
</style>