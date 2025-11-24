<script lang="ts" setup>
  import {ref, nextTick} from 'vue';
  
  interface SubMenu {
    name: string;
    href: string;
  }
  
  interface MenuItem {
    title: string;
    isOpen: boolean;
    scrollHeight: number;
    el: HTMLElement | null;
    submenus: SubMenu[];
  }
  
  const menuItems = ref<MenuItem[]>([
    {
      title: '工具',
      isOpen: false,
      scrollHeight: 0,
      el: null,
      submenus: [{name: '魔法', href: '/magic_internet'}]
    },
    {
      title: '杂项',
      isOpen: false,
      scrollHeight: 0,
      el: null,
      submenus: [{name: '编程范式', href: '#'}]
    },
    {
      title: '算法',
      isOpen: false,
      scrollHeight: 0,
      el: null,
      submenus: []
    },
    {
      title: 'C++',
      isOpen: false,
      scrollHeight: 0,
      el: null,
      submenus: [
        {name: '如何从C++代码到可执行文件', href: 'compilationprocess.html'},
        {name: 'CMake教程', href: 'cmake.html'},
        {name: 'STL', href: 'stl.html'}
      ]
    },
    {
      title: 'Python',
      isOpen: false,
      scrollHeight: 0,
      el: null,
      submenus: [
        {name: '基础', href: 'python-basic.html'},
        {name: '进阶', href: 'python-advanced.html'}
      ]
    }
  ]);
  
  // 正确的类型写法
  const toggleMenu = async (item: MenuItem) => {
    item.isOpen = !item.isOpen;
    if (item.isOpen) {
      await nextTick();
      if (item.el) {
        item.scrollHeight = item.el.scrollHeight;
      }
    }
  };
</script>

<template>
  
  
  <div class="home">
    <div class="container">
      <div class="box Personal-Information">
        <img src="./assets/tx.jpg" alt="头像">
        <a class="github" href="https://github.com/DreamDonghao" target="_blank">
          <img style="margin-bottom: 0" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub"
               class="icon">
          <span>Github</span>
        </a>
      </div>
      
      <div class="box notice">
        公告: 无
      </div>
      
      <div class="box content">
        <ul class="menu">
          <li v-for="item in menuItems" :key="item.title">
            <span
                class="menu-title"
                :class="{ open: item.isOpen }"
                @click="toggleMenu(item)"
            >
              {{ item.title }}
            </span>
            
            <ul
                class="submenu"
                :style="{ maxHeight: item.isOpen ? item.scrollHeight + 'px' : '0' }"
                :ref="(el) => item.el = el as HTMLElement | null"
            >
              <li v-for="sub in item.submenus" :key="sub.name">
                <router-link :to="sub.href">{{ sub.name }}</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      
      <div class="box text">
        <router-view/>
      </div>
    </div>
  </div>
</template>


<style>
  
  /* 为了替换掉原始的 <body> 样式，我们使用一个包装 div */
  .home {
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Microsoft YaHei", sans-serif;
  }
  
  /* 原始样式开始 */
  .container {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr 2fr;
    gap: 20px;
    width: 80%;
    max-width: 1200px;
    height: 80vh;
    padding: 20px;
    border-radius: 20px;
    
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
  
  /* 滚动条整体 */
  .content::-webkit-scrollbar {
    width: 10px;
  }
  
  /* 滑块（可以拖动的部分） */
  .content::-webkit-scrollbar-thumb {
    background: rgba(100, 100, 100, 0.5);
    border-radius: 15px;
  }
  
  /* 滑块悬停时 */
  .content::-webkit-scrollbar-thumb:hover {
    background: rgba(100, 100, 100, 0.8);
  }
  
  /* 滚动条轨道（滑块后面的背景） */
  .content::-webkit-scrollbar-track {
    background: transparent;
  }
  
  .box {
    border-radius: 15px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #333;
    font-size: 1.1em;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
  
  /* 左上：个人信息区域（头像+GitHub 链接） */
  .Personal-Information img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 15px;
    display: block;
  }
  
  /* GitHub 样式：图标+文字 */
  .github {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 28px;
    transition: background 0.3s;
    color: #6900cc;
    text-decoration: none;
    font-weight: bold;
    width: 60%;
  }
  
  .github .icon {
    width: 24px;
    height: 24px;
  }
  
  .github:hover {
    background: rgb(240, 255, 251);
    border-radius: 8px;
  }
  
  
  /* 公告区域样式 */
  .notice {
    font-weight: bold;
  }
  
  
  /* 网格布局位置：左上（个人信息） */
  .Personal-Information {
    grid-column: 1;
    grid-row: 1;
  }
  
  /* 网格布局位置：左下（公告） */
  .notice {
    grid-column: 1;
    grid-row: 2;
  }
  
  /* 网格布局位置：右边（内容区，占两行） */
  .content {
    grid-column: 1;
    group-reset: 3;
  }
  
  .text {
    grid-column: 2;
    grid-row: 1 / 4;
    overflow-y: auto;
  }
  
  .menu, .submenu {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .menu > li {
    margin: 10px 0;
  }
  
  .menu-title {
    font-weight: bold;
    cursor: pointer;
    display: block;
    padding: 8px;
    border-radius: 6px;
    transition: background 0.3s;
  }
  
  .menu-title:hover {
    background: rgb(240, 255, 251);
  }
  
  .menu-title::before {
    content: "▶";
    display: inline-block;
    margin-right: 5px;
    transition: transform 0.3s ease;
  }
  
  .menu-title.open::before {
    transform: rotate(90deg);
  }
  
  .submenu {
    margin-left: 15px;
    max-height: 0; /* 初始收起 */
    overflow: hidden;
    transition: max-height 0.4s ease; /* 展开/收起动画 */
  }
  
  /* Vue 中，子菜单的高度是通过 v-bind:style 动态设置的，
     但子菜单的内部链接样式仍然需要保留 */
  .submenu li a {
    display: block;
    padding: 6px 10px;
    margin: 5px 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 6px;
    color: #333;
    text-decoration: none;
    transition: background 0.3s;
  }
  
  .submenu li a:hover {
    background: rgb(240, 255, 251);
  }
  
  @media (max-width: 768px) {
    .container {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto auto;
      width: 95%;
      height: auto;
    }
    
    .content {
      grid-column: 1;
      grid-row: 3;
      max-height: 50vh;
    }
  }
</style>