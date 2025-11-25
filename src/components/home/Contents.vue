<script setup lang="ts">
  
  import {ref} from "vue";
  
  interface SubMenu {
    name: string;
    href: string;
  }
  
  interface MenuItem {
    title: string;
    isOpen: boolean;
    submenus: SubMenu[];
  }
  
  const menuItems = ref<MenuItem[]>([
    {
      title: '工具',
      isOpen: false,
      submenus: [{name: '魔法', href: '/magic_internet'}]
    },
    {
      title: '杂项',
      isOpen: false,
      submenus: [{name: '编程范式', href: '#'}]
    },
    {
      title: '算法',
      isOpen: false,
      submenus: []
    },
    {
      title: 'C++',
      isOpen: false,
      submenus: [
        {name: '如何从C++代码到可执行文件', href: 'compilationprocess.html'},
        {name: 'CMake教程', href: 'cmake.html'},
        {name: 'STL', href: 'stl'}
      ]
    },
    {
      title: 'Python',
      isOpen: false,
      submenus: [
        {name: '基础', href: 'python-basic.html'},
        {name: '进阶', href: 'python-advanced.html'}
      ]
    },
    // 增加更多内容以触发滚动条 (模拟内容过多)
    {
      title: '前端',
      isOpen: false,
      submenus: [
        {name: 'Vue 3', href: '#'},
        {name: 'TypeScript', href: '#'}
      ]
    },
    {
      title: '数据库',
      isOpen: false,
      submenus: [
        {name: 'MySQL 基础', href: '#'},
        {name: 'Redis', href: '#'}
      ]
    },
    {
      title: '网络',
      isOpen: false,
      submenus: [
        {name: 'TCP/IP', href: '#'},
      ]
    }
  ]);
  
  const submenuRefs = ref<HTMLElement[]>([]);
  const setSubmenuRef = (el: any) => {
    if (el instanceof HTMLElement) {
      submenuRefs.value.push(el);
    }
  };
  
  const toggleMenu = (item: MenuItem, index: number) => {
    item.isOpen = !item.isOpen;
    
    const el = submenuRefs.value[index];
    
    if (el) {
      if (item.isOpen) {
        requestAnimationFrame(() => {
          el.style.maxHeight = `${el.scrollHeight}px`;
        });
      } else {
        el.style.maxHeight = '0';
      }
    }
  };
</script>

<template>
  <div class="box Contents">
    <ul class="menu">
      <li v-for="(item, index) in menuItems" :key="item.title">
            <span
                class="menu-title"
                :class="{ open: item.isOpen }"
                @click="toggleMenu(item, index)"
            >
              {{ item.title }}
            </span>
        
        <ul
            class="submenu"
            :ref="(el) => setSubmenuRef(el as HTMLElement)"
            :style="{ maxHeight: item.isOpen ? 'auto' : '0' }"
        >
          <li v-for="sub in item.submenus" :key="sub.name">
            <router-link :to="sub.href">{{ sub.name }}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  /* ... (菜单和子菜单样式保持不变) ... */
  .menu, .submenu {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .menu > li {
    margin: 10px 0;
  }
  
  /* Vue 中，子菜单的高度是通过 v-bind:style 动态设置的 */
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
  
  /* **目录滚动设置** */
  .Contents {
    grid-column: 1;
    grid-row: 3;
    /* 允许垂直滚动条出现 */
    overflow-y: auto;
  }
  
  /* 滚动条整体 */
  .Contents::-webkit-scrollbar {
    width: 10px;
  }
  
  /* 滑块（可以拖动的部分） */
  .Contents::-webkit-scrollbar-thumb {
    background: rgba(100, 100, 100, 0.5);
    border-radius: 15px;
  }
  
  /* 滑块悬停时 */
  .Contents::-webkit-scrollbar-thumb:hover {
    background: rgba(100, 100, 100, 0.8);
  }
  
  /* 滚动条轨道（滑块后面的背景） */
  .Contents::-webkit-scrollbar-track {
    background: transparent;
  }
  
  @media (max-width: 600px) {
    .Contents {
      grid-column: 1;
      grid-row: 3;
      max-height: 50vh; /* 移动端限制目录高度，强制滚动 */
    }
    
    .github {
      width: 100%; /* 移动端占满宽度 */
    }
  }
</style>