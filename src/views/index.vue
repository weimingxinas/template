<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

import {
  menus
} from '@/router';

export default {
  components: {
  },

  data() {
    return {
      menus: menus[0].children,
      siteMapList: []
    };
  },

  computed: {
    title() {
      return this.$route.meta.layoutTitle;
    }
  },

  methods: {
  }
};
</script>
