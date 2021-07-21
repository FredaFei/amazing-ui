### API

| 参数         |说明        |类型 |默认值 |可选值 |
| ------------ | :----------------|:------- | :----- | :----- |
| count         |当前数量 |Number |1 |—— |
| maxCount |最大数量 |Number|10 |—— |
| minCount |最小数量|Number |1 |—— |
| readOnly |输入框是否只读|Boolean |false|`true` |
### Events

| 事件名称 |      说明      | 类型 |
| -------- | :------------: | -------: |
| on-update:count   | 当 count 改变时触发的回调函数 | (count:Number) => void |
