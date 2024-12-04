<template>
  <div class="layout">
    <!-- 左上角的按钮 -->
    <button class="sidebar-toggle-btn" @click="toggleSidebar">
      {{ isSidebarOpen ? '关闭侧边栏' : '打开侧边栏' }}
    </button>

    <!-- 侧边栏 -->
    <aside :class="{ 'sidebar-hidden': !isSidebarOpen }">
      <slot name="sidebar" />
    </aside>

    <!-- 主内容区域 -->
    <main>
      <Content />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSidebarOpen: true, // 侧边栏默认显示
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
};
</script>

<style>
/* 整体布局 */
.layout {
  display: flex;
}

/* 侧边栏样式 */
aside {
  width: 300px;
  transition: transform 0.3s ease;
}

.sidebar-hidden {
  transform: translateX(-100%);
}

/* 内容区域样式 */
main {
  flex: 1;
  padding: 20px;
}

/* 按钮样式 */
.sidebar-toggle-btn {
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 1000;
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.sidebar-toggle-btn:hover {
  background-color: #339966;
}
</style>