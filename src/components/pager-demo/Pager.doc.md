### API

| 参数         |说明        |类型 |默认值 |可选值 |
| ------------ | :----------------|:------- | :----- | :----- |
| current         |设置当前页数 |Number |—— |—— |
| total |数据总数 |Number |—— |—— |
| visibleQuickJumper      |是否可以快速跳转至某页  |Boolean |false |true |

### Events

| 事件名称 |      说明      | 类型 |
| -------- | :------------: | -------: |
| on-update:current   | 页码改变的回调，参数是改变后的页码 | (page:Number) => void |
