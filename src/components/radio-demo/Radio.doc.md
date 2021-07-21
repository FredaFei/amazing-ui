### API

| 参数         |说明        |类型 |默认值 |可选值 |
| ------------ | :----------------|:------- | :----- | :----- |
| checked |设置选中项的值 |String、 Number、 Boolean |false |—— |
| value |单选按钮 radio 元素的 value 属性 |String、 Number、 Boolean |false |—— |
| disabled      |设置失效状态  |Boolean |false |true |
| name      |单选按钮 radio 元素的 name 属性  |String |—— |—— |

### Events

| 事件名称 |      说明      | 类型 |
| -------- | :------------: | -------: |
| on-update:checked   | 当 checked 改变时触发的回调函数 | (checked: String、 Number、 Boolean) => void |
