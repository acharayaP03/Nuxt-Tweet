<template>
    <div class="h-screen flex flex-col">
        <div class="p-2 my-2 hover:bg-blue-50 rounded-full w-min dark:hover:bg-white/20" :class="defaultTransition">
            <NuxtLink to="/">
                <div class="w-8 h-8">
                    <LogoTwiter />
                </div>
            </NuxtLink>
        </div>
        <div class="mt-2 space-y-3">
            <Sidebar active>
                <template #icon>
                    <HomeIcon />
                </template>
                <template #name>
                    Home
                </template>
            </Sidebar>
            <Sidebar>
                <template #icon>
                    <HashtagIcon />
                </template>
                <template #name>
                    Explore
                </template>
            </Sidebar>
            <Sidebar>
                <template #icon>
                    <BellIcon />
                </template>
                <template #name>
                    Notifications
                </template>
            </Sidebar>
            <Sidebar>
                <template #icon>
                    <InboxIcon />
                </template>
                <template #name>
                    Messages
                </template>
            </Sidebar>
            <Sidebar>
                <template #icon>
                    <BookmarkIcon />
                </template>
                <template #name>
                    Bookmarks
                </template>
            </Sidebar>
            <Sidebar>
                <template #icon>
                    <DocumentTextIcon />
                </template>
                <template #name>
                    Lists
                </template>
            </Sidebar>

            <Sidebar>
                <template #icon>
                    <UserIcon />
                </template>
                <template #name>
                    Profile
                </template>
            </Sidebar>

            <Sidebar>
                <template #icon>
                    <EllipsisHorizontalCircleIcon />
                </template>
                <template #name>
                    More
                </template>
            </Sidebar>
        </div>
    </div>
</template>
<script setup lang="ts">
import { HomeIcon } from '@heroicons/vue/24/solid';
import { HashtagIcon, BellIcon, InboxIcon, BookmarkIcon, DocumentTextIcon, UserIcon, EllipsisHorizontalCircleIcon } from '@heroicons/vue/24/outline'
const { defaultTransition } = useTailwindDefaults()
</script>