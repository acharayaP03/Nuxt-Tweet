<template>
    <div class="flex flex-col">
        <!--Preview card: Whats happening... -->
        <PreviewCard title="What's happening">
            <CardItems v-for="     items      in whatsHappeningItems">
                <div>
                    <h2 class="font-bold text-gray-800 text-md dark:text-white">{{ items.title }}</h2>
                    <p class="text-xs text-gray-400">{{ items.count }}</p>
                </div>
            </CardItems>
        </PreviewCard>
        <!--Preview card: Who to follow...-->
        <PreviewCard title="Who to follow">
            <CardItems v-for="     items      in whoToFollow">
                <div class="flex flex-row items-center justify-between p-2">
                    <div class="flex flex-row">
                        <img class="w-10 h-10 rounded-full" :src="items.image" :alt="items.name">
                        <div class="flex flex-col ml-2">
                            <h1 class="text-sm font-bold text-gray-900 dark:text-white">{{ items.name }}</h1>
                            <p class="text-xs text-gray-400">{{ items.handle }}</p>
                        </div>
                    </div>
                    <div class="flex h-full">
                        <button
                            class="px-4 py-2 text-xs font-bold text-white bg-black rounded-full dark:text-black dark:bg-white">Follow</button>
                    </div>
                </div>
            </CardItems>
        </PreviewCard>
    </div>
</template>

<script setup lang="ts">
import CardItems from './CardItems.vue'
import PreviewCard from './PreviewCard.vue';

const whatsHappeningItems = ref([
    {
        title: 'SpaceX',
        count: '18.8k Tweets'
    },
    {
        title: '#CodingIsFun',
        count: '8.1k Tweets'
    },
    {
        title: 'GuitarWorld',
        count: '3.8k Tweets'
    }
])

const whoToFollow = ref([
    {
        name: 'Joe Satriani',
        handle: '@ProfessorSatch',
        image: 'https://picsum.photos/200/200'
    },
    {
        name: 'CryptoWorld',
        handle: '@CryptoWorld',
        image: 'https://picsum.photos/200/200'
    }
])
</script>

<style scoped></style>