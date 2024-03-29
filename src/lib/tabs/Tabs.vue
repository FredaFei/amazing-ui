<template>
  <div class="am-tabs-wrapper" :class="tabsClass">
    <div class="am-tabs-nav-wrapper">
      <div class="am-tabs-nav" ref="container">
        <div class="am-tabs-nav-item" v-for="(t,index) in titles" :key="t.name" :class="{'am-tabs-active':t.name===selected}"
             :ref="el => { if (el) navsItem[index] = el }"
             @click="onToggle(t.name)">{{t.title}}
        </div>
        <div class="am-tabs-nav-line" ref="indicator"/>
      </div>
    </div>
    <ul class="am-tabs-pane-body">
      <component :is="current" :key="current.props.name"/>
    </ul>
  </div>
</template>
<script lang="ts" setup="props, context">
  import TabsPanel from './TabsPanel.vue';
  import { ref, computed, onMounted, onUpdated, SetupContext, defineComponent } from 'vue';
  import { checkChildren } from '../utils/CheckChildren';

  declare const props: {
    selected: string
    direction?: 'horizontal' | 'vertical'
    lineWidthOrHeight?: number
  };
  defineComponent;
  export default {
    name: 'AmTabs',
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
  };

  declare const context: SetupContext;
  export const defaults = context.slots.default();
  checkChildren(defaults, TabsPanel);

  const calculateLineStyle = () => {
    const { direction = 'horizontal', } = props;
    selectedItem.value = navsItem.value.filter((el, index) => {
      return el.classList.contains('am-tabs-active');
    })[0];
    const { left: left1, top: top1 } = container.value.getBoundingClientRect();
    const { width, left: left2, height, top: top2 } = selectedItem.value.getBoundingClientRect();
    const lineWidth = props.lineWidthOrHeight || width;
    const lineHeight = props.lineWidthOrHeight || height;

    if (direction === 'horizontal') {
      indicator.value.style.width = lineWidth + 'px';
      const x = left2 - left1 + (width - lineWidth) / 2;
      indicator.value.style.transform = `translate3d(${x}px, 0, 0)`;
    } else {
      indicator.value.style.height = lineHeight + 'px';
      const y = top2 - top1 + (height - lineHeight) / 2;
      indicator.value.style.transform = `translate3d(0, ${y}px, 0)`;
    }
  };
  onMounted(calculateLineStyle);
  onUpdated(calculateLineStyle);
  export const selectedItem = ref<HTMLDivElement>(null);
  export const navsItem = ref<HTMLDivElement[]>([]);
  export const indicator = ref<HTMLDivElement>(null);
  export const container = ref<HTMLDivElement>(null);

  export const titles = defaults.map(tag => ({ title: tag.props.title, name: tag.props.name }));
  export const current = computed(() => defaults.filter(tag => tag.props.name === props.selected)[0]);
  export const tabsClass = computed(() => ([`am-tabs-${props.direction || 'horizontal'}`]));

  export const onToggle = (value) => {
    context.emit('update:selected', value);
  };

</script>
<style lang="scss">
  @import '../../style/_var.scss';
  #{component(tabs)} {
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
      transition: transform 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      &-line {
        position: absolute;
        box-sizing: border-box;
        transition: transform 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
    }
    &-horizontal {
      #{component(tabs)} {
        &-nav-wrapper {
          width: 100%;
        }
        &-nav-line {
          left: 0;
          bottom: -1px;
          border-right: none;
          border-bottom: 2px solid #1890ff;
        }
      }
    }
    &-vertical {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      #{component(tabs)} {
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
        &-nav-line {
          top: 0;
          right: -1px;
          border-bottom: none;
          border-right: 2px solid #1890ff;
        }
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
      & + .am-tabs-item {
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
    &-pane-body {
      padding: 8px;
    }
  }
  #{component(tabPane)} {
    &-pane-item {
      padding: 8px;
      display: none;
    }
    &-active {
      display: block;
    }
  }
</style>