# 介绍

一套轻量的web component，基于typeScript、Vue3.0 开发。
组件的功能和测试用例待完善，将持续更新中，所以强烈不建议将此UI库用于生产环境中。该库的源代码值得一看，
欢迎讨论交流，如果你觉得还不错，求给个 [star](https://github.com/FredaFei/amazing-ui) 吧~

# 快速开始

一套轻量的web component，基于typeScript、Vue3.0 开发。

### 引入 Amazing UI

Vue 单文件组件

``` javascript
import { Button } from 'amazing-ui-vue3'
import 'amazing-ui-vue3/dist/lib/index.css';

<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import { Button } from "amazing-ui-vue3"
export default {
  components: { Button }
}
</script>

```
安装 使用本框架前，请在 CSS 中开启 border-box

``` css
*,*::before,*::after{box-sizing: border-box;}
```

下一节: [安装](#/doc/install)