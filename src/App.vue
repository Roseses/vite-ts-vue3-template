<template>
  <el-config-provider :locale="locale">
    <router-view v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </router-view>
  </el-config-provider>

</template>

<script setup>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
let locale = zhCn
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter-from,
.fade-leave-active {
  opacity: 0;
}
</style>

<style>
/*
  调整加载条颜色
*/
/*#nprogress .bar {*/
/*  background: pink !important;*/
/*}*/
</style>
<script setup lang="ts">
</script>