<template>
  <div class="app-container">
    <el-table
      v-loading="loading"
      :data="list"
      border
    >
      <el-table-colum
        prop="id"
        label="id"
      />
      <el-table-colum
        prop="roleName"
        label="角色名称"
      />
      <el-table-colum
        prop="roleCode"
        label="角色编码"
      />
      <el-table-colum
        prop="description"
        label="描述"
      />
    </el-table>
  </div>
</template>

<script>
export default {

  components: {},
  data() {
    return {
      list: [],
      loading: false,
      url: {
        getList: '/sys/role/getRoleList',
        save: '/sys/role/save',
        update: '/sys/role/update'
      }
    }
  },

  computed: {
  },

  mounted() {
    this.getList1()
  },

  methods: {
    getList1() {
      this.loading = true
      const param = {
        pageSize: '10',
        pageNo: '1'
      }
      this.$http.get(this.url.getList, param).then(data => {
        console.log(data)
      })
    }
  }
}

</script>
<style lang='scss' scoped>
</style>
