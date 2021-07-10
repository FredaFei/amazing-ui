<demo>
  全选
</demo>
<template>
  <div>
    <div>
      <Checkbox v-model:checked="checkedAll" @change="onChange" :indeterminate="indeterminate">全选水果</Checkbox>
    </div>
    <Checkbox v-model:checked="checkedNames" @change="onChange" :name="i.name" :value="i.value" v-for="i in options">{{i.value}}</Checkbox>
  </div>
</template>

<script lang="ts">
  import Checkbox from '../../lib/checkbox/Checkbox.vue';
  import { ref, computed, } from 'vue';

  export default {
    components: {
      Checkbox
    },
    setup() {
      const options = [
        { name: 'fruit', value: 'apple' },
        { name: 'fruit', value: 'peach' },
        { name: 'fruit', value: 'orange' },
        { name: 'fruit', value: 'pear' },
        { name: 'fruit', value: 'banana' }
      ];
      const checkedNames = ref([]);
      const checkedAll = computed({
        get() {
          return checkedNames.value.length === options.length;
        },
        set(value) {
          checkedNames.value = value ? options.map(it => it.value) : [];
        }
      });
      const indeterminate = computed(() => {
        const doneLength = checkedNames.value.length;
        return doneLength > 0 && (options.length > doneLength);
      });
      const onChange = (value) => {
        console.log('onchange ', value);
      };
      return { checkedNames, options, checkedAll, indeterminate, onChange };
    }
  };
</script>