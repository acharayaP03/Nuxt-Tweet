<template>
    <div class="p-3 hover:bg-gray-100 cursor-pointer dark:hover:bg-dim-300" :class="wrapperClasses">
        <slot />
    </div>
</template>

<script setup lang="ts">
const { twitterBorderColor, defaultTransition } = useTailwindDefaults();
const wrapperClasses = computed(() => `${defaultTransition} ${twitterBorderColor}`)
</script>

<style scoped></style>