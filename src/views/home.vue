<template>
  <div>
    <button @click="queryInfo">发送请求</button>
    <button @click="goRoute">路由跳转login</button>
  </div>
</template>

<script setup lang="ts">
import { getList } from '@/apis/user';
import router from '@/router/index';

const goRoute = () => {
  router.push('/login');
};

const queryInfo = () => {
  getList({});
};
</script>
