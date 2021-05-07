<template>
  <div>
    <p><strong>基础用法</strong></p>
    <am-table :data-source="dataSource" :border="true" :compact="true" :number-visiable="false">
      <am-table-column text="姓名" field="name" :width="200">
        <template slot-scope="props">
          <a :href="`/user/${props.value}`">{{props.value}}</a>
        </template>
      </am-table-column>
      <am-table-column text="班级" field="class" :width="200">
        <template slot-scope="props">
          <h1>{{props.value}}</h1>
        </template>
      </am-table-column>
      <am-table-column text="体重" field="weigth">
        <template slot-scope="props">
          <h1>{{props.value}}</h1>
        </template>
      </am-table-column>
      <am-table-column text="身高" field="height" :width="200">
        <template slot-scope="props">
          <h1>{{props.value}}</h1>
        </template>
      </am-table-column>
      <template slot-scope="slotProps">
        <button @click="onEdit(slotProps.data)">编辑</button>
        <button @click="onRemove(slotProps.data)">删除</button>
      </template>
    </am-table>
    <!-- <am-table :data-source="dataSource"> -->
       <!-- <am-table-column text="姓名" field="name" ></am-table-column>
       <am-table-column text="年龄" field="age" ></am-table-column>
       <am-table-column text="手机" field="phone" ></am-table-column>
       <am-table-column text="地址" field="address" ></am-table-column> -->
     <!-- <template v-for="(column,index) in columns">
       <am-table-column :field="column.field" :text="column.text" :key="column.field"></am-table-column>
     </template> -->
    <!-- </am-table> -->
  </div>
</template>
<script>
  import AmTable from "../../../src/table/index";
  import AmTableColumn from "../../../src/table/tableColumn";

  export default {
    components: {
      AmTable, AmTableColumn
    },
    data() {
    return {
      selectedItems: [],
      columns: [
        {
          text: "姓名",
          field: "name",
          width: 200
        },
        {
          text: "班级",
          field: "class",
          width: 200
        },
        {
          text: "体重",
          field: "weigth",
          width: 200
        },
        {
          text: "身高",
          field: "height"
        }
      ],
      dataSource: [
        {
          id: 1,
          name: "李三",
          class: "十二班",
          weigth: "130",
          height: "170cm"
        },
        {
          id: 2,
          name: "张三",
          class: "二班",
          weigth: "140",
          height: "180cm",
          description: "这里是说明备注哦~"
        },
        {
          id: 3,
          name: "吴三",
          class: "三班",
          weigth: "120",
          height: "180cm",
          description: "这里是说明备注哦~"
        },
        {
          id: 5,
          name: "李莉",
          class: "八班",
          weigth: "100",
          height: "180cm",
          description: "这里是说明备注哦~"
        },
        {
          id: 7,
          name: "张三",
          class: "二班",
          weigth: "140",
          height: "180cm",
          description: "这里是说明备注哦~"
        },
        {
          id: 8,
          name: "吴三",
          class: "三班",
          weigth: "120",
          height: "180cm",
          description: "这里是说明备注哦~"
        },
        {
          id: 9,
          name: "刘三",
          class: "五班",
          weigth: "120",
          height: "180cm",
          description: "这里是说明备注哦~"
        },
        {
          id: 10,
          name: "李莉",
          class: "八班",
          weigth: "100",
          height: "180cm",
          description: "这里是说明备注哦~"
        },
        {
          id: 2000,
          name: "张三",
          class: "二班",
          weigth: "140",
          height: "180cm",
          description: "这里是说明备注哦~"
        }
      ],
      dataSource2: [
        {
          id: 30000,
          name: "李三",
          class: "十二班",
          weigth: "130",
          height: "170cm"
        },
        {
          id: 40000,
          name: "张三",
          class: "二班",
          weigth: "140",
          height: "180cm"
        }
      ],
      height: 50,
      loading: false,
      orderBy: {
        weigth: "desc",
        height: "asc"
      }
    };
  },
  methods: {
    xx() {
      this.loading = true;
      setTimeout(() => {
        this.dataSource = this.dataSource.sort((a, b) => a.weigth < b.weigth);
        this.loading = false;
      }, 500);
    }
  }
    // data() {
    //   return {
    //     columns: [
    //       {text: '姓名', field: 'name', width: '80'},
    //       {text: '年龄', field: 'age'},
    //       {text: '手机', field: 'phone'},
    //       {text: '地址', field: 'address'}
    //     ],
    //     tableData: [
    //       {id: 1, name: '王小虎', age: 2, phone: '12345678919', address: '上海市普陀区金沙江路 1518 弄'},
    //       {id: 2, name: '李小', age: 10, phone: '12345678929', address: '上海市普陀区金沙江路 1518 弄'},
    //       {id: 3, name: '刘虎', age: 6, phone: '12345678939', address: '上海市普陀区金沙江路 1518 弄'},
    //       {id: 4, name: '高丽', age: 4, phone: '12345678949', address: '上海市普陀区金沙江路 1518 弄'},
    //     ],
    //   }
    // }
  };
</script>
