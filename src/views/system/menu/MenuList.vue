<template>
  <div class="app-container">
    <el-form>
      <el-form-item label="菜单名称">
        <el-input v-model="queryParams.menuName" placeholder="" />
      </el-form-item>
      <el-form-item label="菜单状态">
        <el-select v-model="queryParams.status" placeholder="状态">
          <el-option label="正常" value="1" />
          <el-option label="停用" value="0" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="search">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button type="primary" icon="el-icon-plus" size="mini" @click="save">新增</el-button>
      </el-col>
    </el-row>

    <el-table :data="menuList">
      <el-table-column label="" />
    </el-table>
  </div>
</template>

<script>
import { MessageBox } from 'element-ui'
export default {

  components: {},
  data() {
    return {
      queryParams: {
        menuName: null,
        status: null
      },
      menuList: [],
      url: {
        list: '/sys/menu/getMenuList',
        save: '',
        update: ''
      }
    }
  },
  computed() {

  },

  created() {
    this.getList()
  },

  mounted: {},

  methods: {
    getList() {
      const params = this.queryParams
      params.userId = 'admin'
      this.$http.get(this.url.list, params).then((data) => {
        console.log(data.result)
        this.$message(data.result)
      })
      this.$message('xx')
    },
    search() {

    },
    reset() {

    },
    save() {

    }
  }
}

</script>
<style lang='scss' scoped>
</style>
