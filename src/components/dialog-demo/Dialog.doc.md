### API

| 参数         |说明        |类型 |默认值 |可选值 |
| ------------ | :----------------|:------- | :----- | :----- |
| visible   |对话框是否可见 |Boolean |false|true|
| mask         |是否设置遮罩 |Boolean |false |true |
| maskClosable      |是否可以通过点击 mask 关闭对话框  |String |—— |—— |
| customFooter      |自定义footer样式  |—— |—— |—— |
| confirmButtonText      |确定按钮文案  |String |—— |—— |
| cancelButtonText      |取消按钮文案  |String |—— |—— |

### Events

| 事件名称 |      说明      | 类型 |
| -------- | :------------: | -------: |
| on-update:visible   | 当 visible 改变时触发的回调函数 | (visible: Boolean) => void |
| onYes    | 点击确认按钮时的回调 | () => void  |—— |
| onNo    | 点击取消按钮时的回调 |  () => void |—— |
