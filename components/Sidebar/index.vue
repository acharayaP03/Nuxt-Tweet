<template>
    <NuxtLink to="#"
        class="flex items-center p-3 text-black rounded-full w-min hover:bg-gray-200 dark:hover:bg-dim-200 dark:text-white">
        <div class="w-6 h-6 text-dark">
            <slot name="icon" />
        </div>
        <div class="hidden ml-4 text-xl xl:block" :class="defaultTransition">
            <slot name="name" />
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
const { defaultTransition } = useTailwindDefaults();

const props = defineProps({
    active: {
        type: Boolean,
        default: false
    }
})
</script>

<style scoped></style>