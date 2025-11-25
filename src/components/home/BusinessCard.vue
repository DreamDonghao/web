<script setup lang="ts">

</script>

<template>
  <div class="box BusinessCard">
    <img src="../../assets/tx.jpg" alt="头像">
    <a class="github" href="https://github.com/DreamDonghao" target="_blank">
      <img style="margin-bottom: 0" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub"
           class="icon">
      <div class="github-info">
        <h5 class="github-title">Github:</h5>
        <span class="github-url">github.com/DreamDonghao</span>
      </div>
    </a>
  </div>
</template>

<style scoped>
  .box {
    border-radius: 15px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #333;
    font-size: 1.1em;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
  .BusinessCard {
    grid-column: 1;
    grid-row: 1;
    display: flex; /* 使用 flex 布局居中内容 */
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  
  .BusinessCard img {
    width: 10vh;
    height: 10vh;
    border-radius: 50%;
    margin-bottom: 10%; /* 增加头像和 GitHub 链接的间距 */
    display: block;
  }
  
  /* GitHub 链接容器样式 */
  .github {
    /* 优化点 */
    display: flex;
    align-items: center; /* 垂直居中图标和文字 */
    gap: 8px;
    transition: background 0.3s;
    color: #333; /* 链接颜色改为深色，让 icon 突出 */
    text-decoration: none;
    padding: 1%; /* 增加点击区域 */
    border-radius: 8px;
    width: 95%;
  }
  
  .github:hover {
    background: rgba(0, 0, 0, 0.05); /* 悬停背景颜色调整 */
    /* color: #000; */
  }
  
  .github .icon {
    width: 3vh; /* 增大图标 */
    height: 3vh;
    flex-shrink: 0; /* 防止图标被压缩 */
  }
  
  /* Github 文字信息容器 */
  .github-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 1.2; /* 调整行高 */
    min-width: 0; /* 允许文本内容被截断 */
  }
  
  /* Github 标题 */
  .github-title {
    font-size: 1em; /* 标题大小 */
    font-weight: bold;
    color: #333;
    margin: 0;
  }
  
  /* Github URL */
  .github-url {
    font-size: 0.70em; /* URL 字体更小 */
    color: #6900cc; /* 保持链接紫色 */
    word-break: break-all; /* 确保长 URL 能够换行或截断 */
    overflow: hidden;
    text-overflow: ellipsis; /* 如果溢出显示省略号 */
    white-space: nowrap;
  }
</style>