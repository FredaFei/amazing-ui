<template>
  <div class="am-pager-wrapper">
    <span class="am-pager-item prev" @click="goPage(current-1)" :class="{disabled:current===1}">上一页</span>
    <template v-for="(page,i) in pages()">
      <template v-if="page===-1">
        <span :class="['am-pager-item separator']" @click="goPage(jumpPages(i))">...</span>
      </template>
      <template v-else>
        <span :class="['am-pager-item',{ active:index===page}]" @click="goPage(page)">{{page}}</span>
      </template>
    </template>
    <span class="am-pager-item next" @click="goPage(current+1)" :class="{disabled:current===total}">下一页</span>
    <template v-if="visibleQuickJumper">
      <span class="am-pager-quick-jump">跳至
        <Input class="am-pager-input-page" type="text" placeholder="页码" @keyup="onKeyUp"/>页
      </span>
    </template>
  </div>
</template>
<script lang="ts">
  import { ref, onMounted } from 'vue';
  import { range, } from '../utils/range';
  import Input from '../input/Input.vue';

  export default {
    name: 'AmPager',
    components: { Input },
    props: {
      current: {
        type: Number,
        default: 1,
      },
      total: {
        type: Number,
        default: 10
      },
      visibleQuickJumper: {
        type: Boolean,
      }
    },
    setup(props, context) {
      const index = ref<number>(1);
      onMounted(() => {
        const defaultValue = props.hasOwnProperty('current') ? props.current : 1;
        index.value = defaultValue;
      });

      const jumpPages = (index: number): number => {
        const prev = index - 5 <= 0 ? 1 : index - 5;
        const next = index + 5 >= props.total ? props.total : index + 5;
        return index === 1 ? prev : next;
      };
      const pages = () => {
        return range(1, props.total)
          .filter(i => i === 1 || i === props.total || Math.abs(i - index.value) <= 2)
          .reduce(
            (prev, next) => {
              const last = prev[prev.length - 1];
              const x = last !== -1 && last - next < -1;
              return prev.concat(x ? [-1, next] : [next]);
            },
            [] as number[]
          );

      };
      const goPage = (n) => {
        if (n >= 1 && n <= props.total) {
          index.value = n;
          context.emit('update:current', n);
        }
      };
      const onKeyUp = (e) => {
        if (e.keyCode === 13) {
          const page = e.target.value;
          if (!/^\d+$/.test(page)) {return;}
          index.value = parseInt(page) > props.total ? props.total : parseInt(page);
        }
      };
      return { pages, goPage, jumpPages, index, onKeyUp };
    }
  };
</script>

<style lang="scss">
  @import '../../style/_var.scss';
  .am-pager {
    $font-size: 14px;
    $width: 32px;
    $line-height: 1.8;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    &.hide {
      display: none;
    }
    &-quick-jump {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin-left: 1em;
    }
    &-input-page {
      width: 5em;
      line-height: $line-height;
      margin-left: 0.5em;
      margin-right: 0.5em;
    }
    &-item {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0 4px;
      font-size: $font-size;
      text-align: center;
      color: $color;
      min-width: $width;
      line-height: $line-height;
      margin: 0 4px;
      border-radius: $border-radius;
      border: 1px solid $border-color;
      cursor: pointer;
      user-select: none;
      transition: all 0.25s;
      &.separator {
        border: none;
      }
      &.active,
      &:hover {
        border-color: $blue;
      }
      &.disabled {
        border-color: darken($gray, 10%);
        cursor: not-allowed;
        &:hover {
          border-color: $gray;
        }
        svg {
          fill: darken($gray, 30%);
        }
      }
    }
  }
</style>