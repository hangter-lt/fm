<template>
  <a-layout class="layout" style="height: 100%;">
    <a-layout-header>
      <div class="logo" />
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1"><RouterLink to="/">实时</RouterLink></a-menu-item>
        <a-menu-item key="2"><RouterLink to="/edit">编辑</RouterLink></a-menu-item>
        <a-menu-item key="3"><RouterLink to="/edit/1">编辑编辑</RouterLink></a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <RouterView></RouterView>
    </a-layout-content>
  </a-layout>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const selectedKeys = ref<string[]>(['2']);
</script>
<style scoped>
.site-layout-content {
  min-height: 280px;
  padding: 24px;
  background: #fff;
}
#components-layout-demo-top .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}
.ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

[data-theme='dark'] .site-layout-content {
  background: #141414;
}
</style>
