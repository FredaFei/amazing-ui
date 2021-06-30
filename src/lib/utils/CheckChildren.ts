import { Component } from 'vue';

const equal = (tag, Child) => {
  if ((tag.type as Component).name !== Child.name) {
    throw new Error(`${tag.type.name} 子节点必须为 ${Child}`);
  }
};

export function checkChildren(defaults, Child) {
  defaults.forEach((tag) => {
    if ((tag.type as Component).name !== Child.name) {
      if (tag.children.length > 0) {
        tag.children.forEach(it => {
          equal(it, Child);
        });
      } else {
        equal(tag, Child);
      }
    }
  });
}
