import Dialog from './Dialog.vue';
import { createApp, h } from 'vue';

function createDialog(options) {
  const { title, content, footer, ...rest } = options;
  const div = document.createElement('div');
  document.body.appendChild(div);
  const app = createApp({
    render() {
      return h(Dialog, {
        visible: true,
        'onUpdate:visible': (value) => {
          if (value === false) {
            app.unmount(div);
            div.remove();
          }
        },
        ...rest
      }, { title, content, footer });
    }
  });
  app.mount(div);
}

export const openDialog = createDialog;
export const confirm = (options) => {
  const { title, content, onNo, onYes } = options;
  openDialog({
    title, content, onNo, onYes
  });
};
export const alert = (options) => {
  const { title, content, onYes } = options;
  openDialog({
    title, content, onYes, cancelButtonText: ''
  });
};

export const info = (options) => {
  const { title, content, } = options;
  openDialog({
    title, content, cancelButtonText: '', confirmButtonText: ''
  });
};