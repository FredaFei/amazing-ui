<demo>
  动态调用
</demo>
<template>
  <div>
    <Button @click="openConfirm">confirm</Button>
    <Button @click="openAlert">alert</Button>
    <Button @click="openInfo">info</Button>
    <Button @click="openDialog">openDialog</Button>
  </div>
</template>

<script lang="ts">
  import { Button, Dialog, openDialog as createDialog, alert, confirm, info } from 'amazing-ui-vue3';

  export default {
    components: {
      Button
    },
    setup() {
      const openAlert = () => {
        alert({
          title: 'title',
          content: 'this is a content',
          onYes: () => {
            console.log('alert yes');
            return true;
          }
        });
      };
      const openConfirm = () => {
        confirm({
          title: 'title',
          content: 'this is a content',
          onYes: () => {
            console.log('confirm yes');
            return true;
          }
        });
      };
      const openInfo = () => {
        info({
          title: 'title',
          content: 'this is a content'
        });
      };
      const openDialog = () => {
        createDialog({
          title: 'title',
          content: 'this is a content',
          cancelButtonText: 'leave',
          onYes: () => {
            console.log('confirm yes');
            return true;
          }
        });
      };
      return { openConfirm, openAlert, openInfo, openDialog };
    }
  };
</script>