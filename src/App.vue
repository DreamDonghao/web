<script lang="ts" setup>
  import BusinessCard from "./components/home/BusinessCard.vue";
  import Announcement from "./components/home/Announcement.vue";
  import Contents from "./components/home/Contents.vue";
</script>

<template>
  <div class="container">
    <div class="home">
      <BusinessCard/>
      <Announcement/>
      <Contents/>
      <div class="box text">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>


<style>
  .container {
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Microsoft YaHei", sans-serif;
  }
  
  /* 为了替换掉原始的 <body> 样式，我们使用一个包装 div */
  .home {
    display: grid;
    grid-template-columns: 24% 75%;
    grid-template-rows: 31% 20% 45%;
    gap: 1%;
    width: 80%;
    height: 90vh;
    padding: 20px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
  
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
  
  
  .text {
    grid-column: 2;
    grid-row: 1 / 4;
    overflow-y: auto; /* 主内容区也应支持滚动 */
  }
  

  
  @media (max-width: 600px) {
    .container {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto auto auto;
      width: 95%;
      height: auto;
    }
    
    .text {
      grid-column: 1;
      grid-row: 4; /* 移动端在目录下方 */
    }
  }
</style>