<template>
    <div>
        <!--Tweet header -->
        <div class='flex p-4'>

            <div>
                <img class='w-10 h-10 rounded-full' :src='tweet.author.profileImage' alt=''>
            </div>
            <div class='ml-3'>
                <span class='font-medium text-gray-800 dark:text-white'>{{ tweet.author.name}}</span>
                <span class='ml-3 text-sm font-medium text-gray-400'>
                    <NuxtLink to='#'>{{tweet.author.handle }}</NuxtLink>
                    . {{ tweet.postedAtHuman}}
                </span>

                <p v-if='tweet.replyTo'>
                    <span class='text-gray-500'>
                        Replying to
                    </span>
                    <NuxtLink :to='`/status/${props.tweet.replyTo.author.id}`' class='text-blue-500'>{{ tweet.replyTo.author.handle }}</NuxtLink>
                </p>
            </div>
        </div>
        <!--Tweet List-->
        <div class='ml-16'>
            <p class='flex-shrink font-medium text-gray-800 dark:text-white'>
                {{ props.tweet.text }}
            </p>
            <div v-for='image in tweet.medaiFiles' :key='image.id' class='flex my-3 mr-2 border-2 rounded-2xl'>
                <img :src='image.url' alt='uploaded image' class='w-full object-cover rounded-2xl'>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { PropType } from '@vue/runtime-core'
import { computed } from '#imports'


const props = defineProps({
    tweet: {
        type: Object as PropType<object>,
        required: true
    }
})

const replyToTweetUrl = computed(() => `/status/${props.tweet.replyTo.author.handle}`)
</script>
