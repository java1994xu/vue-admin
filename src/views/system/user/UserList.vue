<!--  -->
<template>
  <div class="">
    <el-form :model="queryParams" inline>
      <el-form-item label="用户名" style="width:40%">
        <el-input v-model="queryParams.username" placeholder="用户名" />
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="queryParams.status">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="medium" @click="getList">搜索</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="list">
      <el-table-column type="selection" header-align="center" align="center" width="50" />
      <el-table-column label="名字" prop="realname" header-align="center" align="center" width="80" />
      <el-table-column label="用户名" prop="username" header-align="center" align="center" />
      <el-table-column label="性別" prop="sex" />
      <el-table-column label="状态" prop="status" />
    </el-table>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    return {
      queryParams: {
        username: null,
        status: null
      },
      options: [{
        value: '0',
        label: '禁用'
      }, {
        value: '1',
        label: '正常'
      }],
      list: [],
      url: {
        list: '/sys/user/getUserList',
        add: '/sys/user/add'
      }
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getList()
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() { },
  beforeCreate() { }, // 生命周期 - 创建之前
  beforeMount() { }, // 生命周期 - 挂载之前
  beforeUpdate() { }, // 生命周期 - 更新之前
  updated() { }, // 生命周期 - 更新之后
  beforeDestroy() { }, // 生命周期 - 销毁之前
  destroyed() { }, // 生命周期 - 销毁完成
  activated() { },
  methods: {
    getList() {
      const param = this.queryParams
      this.$http.get(this.url.list, param).then((data) => {
        console.log('data===')
        console.log(data.result.records)
        this.list = data.result.records
      }).catch((err) => {
        console.log(err)
        this.$message('error')
      })
    }
  } // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>
/**@import url(); 引入公共css类 **/
</style>
