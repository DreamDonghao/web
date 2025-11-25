<script setup lang="ts">
  // 2. 像导入普通 Vue 组件一样导入 .md 文件
  import IntroToVue from '../../articles/stl.md';
</script>

<template>
  <div class="article-wrapper">
    <IntroToVue/>
  </div>
</template>


<style scoped>
  /* 3. 样式调整：为 Markdown 渲染的 HTML 元素提供样式 */
  .article-wrapper {
    max-width: 1000px;
    margin: 1% auto;
    padding:1%;
    border-radius: 8px;
  }
  
  /* 4. 使用 :deep() 或 ::v-deep() 穿透样式，美化代码块 */
  :deep(h1) {
    border-bottom: 2px solid #42b883;
    padding-bottom: 10px;
  }
  
  :deep(h2){
    border-bottom: 2px solid #e18b8b;
    padding-bottom: 10px;
  }
  :deep(code) {
    background: rgba(176, 176, 176, 0.39);
    color: #000000;
    padding: 0 0;
    border-radius: 4px;
    font-family: Consolas, monospace;
    font-size: 0.95em;
    border: 1px solid rgba(255,255,255,0.1);
  }

  :deep(pre) {
    /* 确保代码块样式正确应用 */
    border-radius: 4px;
    overflow-x: auto;
    padding: 1em;
    font-family: monospace;
  }
</style>