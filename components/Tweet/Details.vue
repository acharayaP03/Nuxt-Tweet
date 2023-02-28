<template>
    <div>
        <TweetItems :tweet='props.tweet.tweet'/>
        <TweetForm :tweet='props.tweet.tweet' :user='props.user'/>
        <TweetItem :tweet='props.tweet.tweet'/>
    </div>
</template>

<script setup lang='ts'>
import { computed } from '#imports'

const props = defineProps({
    tweet: {
        type: Object,
        required: true
    },
    user: {
        type: Object,
        required: true
    }
})

const replies = computed(() => props.tweet.tweet.replies || [])

</script>