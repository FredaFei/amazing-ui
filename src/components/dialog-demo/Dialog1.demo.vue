<demo>
  常规使用
</demo>
<template>
  <div>
    <Button @click="open('visible1')">Open Dialog</Button>
    <Button @click="open('visible2')">Open Dialog with customized footer</Button>
    <Dialog v-model:visible="visible1" @onYes="onYes('visible1')" @onNo="onNo('visible1')">
      <template v-slot:title>
        <span>温馨提示</span>
      </template>
      <template v-slot:content>
        <div>打雷啦...</div>
        <div>下雨啦...</div>
        <div>收衣服啦...</div>
        <div>Some contents...</div>
        <div>Some contents...</div>
      </template>
    </Dialog>
    <Dialog v-model:visible="visible2" custom-footer="true">
      <template v-slot:title>
        <span>温馨提示</span>
      </template>
      <template v-slot:content>
        <div>打雷啦...</div>
        <div>下雨啦...</div>
        <div>收衣服啦...</div>
        <div>Some contents...</div>
        <div>Some contents...</div>
      </template>
      <template v-slot:footer>
        <Button @click="onNo('visible2')">no</Button>
        <Button @click="onYes('visible2')" theme="primary">yes</Button>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
  import Button from '../../lib/button/Button.vue';
  import Dialog from '../../lib/dialog/Dialog.vue';
  import { ref } from 'vue';

  export default {
    components: {
      Button, Dialog
    },
    setup() {
      const visible1 = ref(false);
      const visible2 = ref(false);
      const map = {
        'visible1': visible1,
        'visible2': visible2,
      };
      const onYes = (key: string) => {
        console.log('click yes');
        close(key);
        return true;
      };
      const onNo = (key: string) => {
        console.log('click no');
        close(key);
      };
      const open = (key: string) => {
        map[key].value = true;
      };
      const close = (key: string) => {
        map[key].value = false;
      };
      return { open, close, onYes, onNo, visible1, visible2, };
    }
  };
</script>