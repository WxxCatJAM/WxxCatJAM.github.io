<template>
    <div id="app">
      <button id="toggle-sidebar" @click="toggleSidebar">
        {{ isSidebarOpen ? '隐藏侧边栏' : '显示侧边栏' }}
      </button>
      <Sidebar />
      <Content />
    </div>
  </template>
  