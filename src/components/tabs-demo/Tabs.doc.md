### API

| 参数         |说明        |类型 |默认值 |可选值 |
| ------------ | :----------------|:------- | :----- | :----- |
| activeKey         |当前激活tab面板的key |String |—— |—— |
| direction |tab面板排序样式 |String |horizontal |`vertical` |
| lineWidthOrHeight |tab 选中时下线条宽/高 |String/Number |—— |—— |

### Events

| 事件名称 |      说明      | 类型 |
| -------- | :------------: | -------: |
| on-update:activeKey    | 切换面板的回调 |       (activeKey:String) => void |
