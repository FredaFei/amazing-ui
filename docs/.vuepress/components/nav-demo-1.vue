<template>
  <div class="example-box">
    <p><strong>垂直菜单，可内嵌子菜单</strong></p>
    <am-nav :selected.sync="selected" @update:selected="clickFn" vertical style="width:200px; margin-bottom:50px">
      <am-nav-item name="music">
        <div>nav 1</div>
      </am-nav-item>
      <am-sub-nav name="book">
        <template slot="title">nav 2</template>
        <am-nav-item name="faction">小说</am-nav-item>
        <am-nav-item name="comic">动漫</am-nav-item>
        <am-sub-nav name="classis">
          <template slot="title">杂志期刊</template>
          <am-nav-item name="technology">科技</am-nav-item>
          <am-nav-item name="fashion">时尚</am-nav-item>
          <am-sub-nav name="social">
            <template slot="title">社会</template>
            <am-nav-item name="11">社会 1</am-nav-item>
            <am-nav-item name="22">社会 2</am-nav-item>
            <am-nav-item name="33">社会 3</am-nav-item>
          </am-sub-nav>
        </am-sub-nav>
      </am-sub-nav>
      <am-nav-item name="sport">
        <div>nav 3</div>
      </am-nav-item>
    </am-nav>
    <p><strong>水平的顶部导航菜单</strong></p>
    <am-nav :selected.sync="selected" style="width:260px;">
      <am-nav-item name="music">
        <div>nav 1</div>
      </am-nav-item>
      <am-sub-nav name="book">
        <template slot="title">nav 2</template>
        <am-nav-item name="faction">小说</am-nav-item>
        <am-nav-item name="comic">动漫</am-nav-item>
        <am-sub-nav name="classis">
          <template slot="title">杂志期刊</template>
          <am-nav-item name="technology">科技</am-nav-item>
          <am-nav-item name="fashion">时尚</am-nav-item>
          <am-sub-nav name="social">
            <template slot="title">社会</template>
            <am-nav-item name="11">社会 1</am-nav-item>
            <am-nav-item name="22">社会 2</am-nav-item>
            <am-nav-item name="33">社会 3</am-nav-item>
          </am-sub-nav>
        </am-sub-nav>
      </am-sub-nav>
      <am-nav-item name="sport">
        <div>nav 3</div>
      </am-nav-item>
    </am-nav>
  </div>
</template>
<script>
import { AmNav, AmSubNav, AmNavItem } from '../../../src/index'

export default {
  components: { AmNav, AmSubNav, AmNavItem },
  data() {
    return {
      selected: 'sport'
    }
  },
  watch: {
    selected(newValue) {
      if (newValue === 'sport') {
        alert(newValue)
      }
    }
  },
  methods: {
    clickFn(name) {
      if (name === 'music') {
        alert(name)
      }
    }
  }
}
</script>
