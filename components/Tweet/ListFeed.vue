<template>
    <div v-if='tweetExist' class='p-4'>
        <p class='text-center text-gray-500 capitalize'>
            sorry there are no tweets, please create one
        </p>
    </div>
    <div
        v-else
        class='pb-4 border-b hover:bg-gray-100 cursor-pointer dark:hover:bg-dim-300'
        :class='[twitterBorderColor, defaultTransition]'
        v-for='tweet in props.tweets'
        :key='tweet.id'
    >
        <TweetItems :tweet='tweet'/>
    </div>
</template>

<script setup>
import useTailwindDefaults from '../../composables/useTailwindDefaults'

const { twitterBorderColor, defaultTransition } = useTailwindDefaults()
const props = defineProps({
    tweets: {
        type: Array,
        required: true
    }
})

const tweetExist = computed(() => props.tweets && props.tweets.length === 0)
</script>