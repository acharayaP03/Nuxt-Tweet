<template>
    <div :class="{'dark': darkMode}">
      <h1 class="text-red-500 dark:text-dim-600">Twitter clone</h1>
    </div>
  </template>
  <script setup lang="ts">
  const title = ref('');
  const darkMode = ref(true)

  </script>