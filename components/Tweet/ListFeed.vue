<template>
    <h1> List feed</h1>

    <ul>
        <li v-for='tweet in tweets'>{{ tweet.text }}</li>
    </ul>
</template>

<script setup>
const props = defineProps({
    tweets: {
        type: Array,
        required: true
    }
})
</script>