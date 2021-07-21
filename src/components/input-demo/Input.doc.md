### API

| 参数         |说明        |类型 |默认值 |可选值 |
| ------------ | :----------------|:------- | :----- | :----- |
| value |                 绑定值                 | String/ Number |         —— |       —— |
| readonly        |              是否只读状态              |        Boolean |      false |     true |
| disabled        |              是否禁用状态              |        Boolean |      false |     true |
| placeholder     |             输入框占位文本             |         String | 请输入内容 |       —— |
| type            |                  类型                  |         String |       text | textarea |
| rows            | 输入框行数，只对 type 为 textarea 有效 |         Number |          2 |       —— |
### Events

| 事件名称 |      说明      | 类型 |
| -------- | :------------: | -------: |
| input    |             在 Input 输入时触发             |                (value: string | number) |
| change   |            在 Input 值改变时触发            | (event: Event)/(value: string | number) |
| focus    |           在 Input 获得焦点时触发           |                (event: Event) |
| blur     |           在 Input 失去焦点时触发           |                (event: Event) |
| clear    | 在点击由 clearable 属性生成的清空按钮时触发 |                            —— |