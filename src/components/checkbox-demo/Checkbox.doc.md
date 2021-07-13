### API

| 参数         |        说明        |     类型 | 默认值 | 可选值 |
| ------------ | :----------------: | -------: | -----: | -----: |
| v-model       |     绑定值     | String, Number, Boolean, Array |     —— |     —— |
| value         |   复选框的值   |        String, Number |     —— |     —— |
| indeterminate |  设置半选状态  |                        Boolean |  false |   true |
| disabled      |    是否禁用    |                        Boolean |  false |   true |
| name          | 原生 name 属性 |                         String |     —— |     —— |

### Events

| 事件名称 |      说明      | 类型 |
| -------- | :------------: | -------: |
| on-update:checked   | 当 checked 改变时触发的回调函数 | (checked: String、 Number、 Boolean、 Array) => void |
