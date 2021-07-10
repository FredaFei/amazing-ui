<template>
  <div class="am-controllCount">
    <button :class="['am-controllCount-btn', 'am-controllCount-next',{disabled: count<=minCount}]" @click="changeCount(-1)">-</button>
    <input type="text" ref="inputRef" @blur="onBlur" :readOnly="readOnly"/>
    <button :class="['am-controllCount-btn', 'am-controllCount-next',{disabled: count>=maxCount}]" @click="changeCount(+1)">+</button>
  </div>
</template>
<script lang="ts">
  import { ref, onMounted } from 'vue';

  export default {
    name: 'AmControllCount',
    props: {
      count: {
        type: Number,
        default: 1
      },
      maxCount: {
        type: Number,
        default: 10
      },
      minCount: {
        type: Number,
        default: 0
      },
      readOnly: Boolean,
    },
    setup(props, context) {
      const currentCount = ref();
      const inputRef = ref<HTMLInputElement | null>(null);
      onMounted(() => {
        const defaultValue = props.hasOwnProperty('count') ? props.count : 1;
        currentCount.value = defaultValue;
        inputRef.value.value = defaultValue + '';
      });
      const validateCount = (val: number, isBtnClick?: boolean): boolean => {
        const { minCount, maxCount } = props;
        if (isBtnClick) {
          if (val < 0 && currentCount.value === minCount) {return false;}
          if (val > 0 && currentCount.value >= maxCount!) {return false;}
        } else {
          if (val < minCount!) {return false;}
          if (val > maxCount!) {return false;}
        }
        return true;
      };
      const changeCount = (val: number) => {
        if (!validateCount(props.count, true)) {return;}
        const newCount = currentCount.value + val;
        currentCount.value = newCount;
        inputRef.value.value = newCount + '';
        context.emit('update:count', newCount);
      };
      const onBlur = (e) => {
        const value = +(e.target as HTMLInputElement).value;
        if (!/^\d+$/.test(value.toString())) {
          inputRef.value.value = currentCount.value + '';
          return;
        }
        if (!validateCount(value)) {
          inputRef.value.value = currentCount.value + '';
          return;
        }
        currentCount.value = value;
        context.emit('update:count', value);
      };
      return { changeCount, onBlur, inputRef };
    }
  };
</script>
<style lang="scss">
  @import '../../style/_var.scss';
  #{component(controllCount)} {
    display: flex;
    align-items: center;
    width: 100%;
    input,
    &-btn {
      text-align: center;
      line-height: 30px;
      color: #666;
      background: #ffffff;
      outline: none;
      box-sizing: border-box;
    }
    &-btn {
      border: 1px solid #ebebeb;
      flex: 0 0 34px;
      width: 32px;
      font-size: 20px;
      cursor: pointer;
      &:nth-child(1) {
        border-radius: $border-radius 0 0 $border-radius;
      }
      &:nth-child(3) {
        border-radius: 0 $border-radius $border-radius 0;
      }
    }
    input {
      flex: 1;
      min-width: 34px;
      color: #333;
      font-size: 16px;
      border: none;
      border-top: 1px solid #ebebeb;
      border-bottom: 1px solid #ebebeb;
      border-radius: 0;
      -webkit-appearance: none;
    }
    .disabled {
      color: #aaa;
      background: #ebebeb;
    }
  }
</style>