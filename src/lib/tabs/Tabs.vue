<template>
  <div class="tabs-wrapper" :class="tabsClass">
    <div class="tabs-nav-wrapper">
      <div class="tabs-nav" ref="container">
        <div class="tabs-nav-item" v-for="(t,index) in titles" :key="t.name" :class="{'tabs-active':t.name===selected}"
             :ref="el => { if (el) navsItem[index] = el }"
             @click="onToggle(t.name)">{{t.title}}
        </div>
        <div class="line" ref="indicator"/>
      </div>
    </div>
    <ul class="tabs-pane-body">
      <component :is="current" :key="current.props.name"/>
    </ul>
  </div>
</template>
<script lang="ts">
  import TabsPanel from './TabsPanel.vue';
  import { ref, computed, onMounted, onUpdated, watchEffect } from 'vue';

  export default {
    props: {
      selected: {
        type: String,
        required: true
      },
      direction: {
        type: String,
        default: 'horizontal',
        validator(val) {
          return ['horizontal', 'vertical'].indexOf(val) > -1;
        }
      },
      lineWidthOrHeight: Number
    },
    setup(props, context) {
      const selectedItem = ref<HTMLDivElement>(null);
      const navsItem = ref<HTMLDivElement[]>([]);
      const indicator = ref<HTMLDivElement>(null);
      const container = ref<HTMLDivElement>(null);

      const calculateLineStyle = () => {
        selectedItem.value = navsItem.value.filter((el, index) => {
          console.log('index', index);
          return el.classList.contains('tabs-active');
        })[0];
        let { left: left1, top: top1 } = container.value.getBoundingClientRect();
        let { width, left: left2, height, top: top2 } = selectedItem.value.getBoundingClientRect();
        const lineWidth = props.lineWidthOrHeight || width;
        const lineHeight = props.lineWidthOrHeight || height;
        if (props.direction === 'horizontal') {
          indicator.value.style.width = width + 'px';
          const x = left2 - left1 + (width - lineWidth) / 2;
          indicator.value.style.transform = `translate3d(${x}px, 0, 0)`;
        } else {
          indicator.value.style.height = height + 'px';
          const y = top2 - top1 + (height - lineHeight) / 2;
          indicator.value.style.transform = `translate3d(${y}px, 0, 0)`;
        }
      };
      onMounted(() => {
        console.log('mount');
        calculateLineStyle();
      });
      onUpdated(() => {
        console.log('update');
        calculateLineStyle();
      });
      const defaults = context.slots.default();
      console.log(...defaults);

      defaults.forEach(tag => {
        console.log('tag', tag);
        if (tag.type !== TabsPanel) {
          throw new Error('tabs 子节点必须为 TabsPanel');
        }
      });

      const titles = defaults.map(tag => ({ title: tag.props.title, name: tag.props.name }));
      const current = computed(() => defaults.filter(tag => tag.props.name === props.selected)[0]);
      const tabsClass = computed(() => ([`tabs-${props.direction}`]));

      const onToggle = (value) => {
        context.emit('update:selected', value);
      };
      return { titles, defaults, onToggle, current, indicator, tabsClass, container, selectedItem, navsItem };
    }
  };
</script>
<style lang="scss" scoped>
  @import '../../style/_var.scss';
  .tabs {
    &-wrapper {
      position: relative;
    }
    &-nav-wrapper {
      display: flex;
      margin-bottom: 0;
      margin-left: 0;
      overflow: hidden;
    }
    &-nav {
      position: relative;
      display: flex;
      justify-content: flex-start;
      flex-shrink: 0;
      border-bottom: 1px solid #ddd;
      transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      .line {
        position: absolute;
        box-sizing: border-box;
        transition: transform 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
    }
    &-horizontal {
      &-nav-wrapper {
        width: 100%;
      }
      .line {
        left: 0;
        bottom: -1px;
        border-right: none;
        border-bottom: 2px solid #1890ff;
      }
    }
    &-vertical {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      &-nav {
        border-bottom: none;
        flex-direction: column;
        border-right: 1px solid #ddd;
        &-wrapper {
          height: 100%;
          flex-direction: column;
        }
      }
      &-nav-item {text-align: right;}
      .line {
        top: 0;
        right: -1px;
        border-bottom: none;
        border-right: 2px solid #1890ff;
      }
    }
    &-nav-item {
      padding: 12px 16px;
      height: 100%;
      white-space: nowrap;
      box-sizing: border-box;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      &:hover {
        color: $blue;
      }
      & + .tabs-nav-item {
        margin-left: 10px;
      }
    }
    &-active {
      color: $darkblue;
      font-weight: 700;
    }
    &-disabled {
      color: #ccc;
      &:hover {
        color: #ccc;
      }
    }
  }
</style>