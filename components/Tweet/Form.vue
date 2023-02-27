<template>
    <div v-if='loading' class='flex items-center justify-center py-6'>
        <UISpinner />
    </div>
    <div v-else>
       <TweetInput @onSubmit="handleFormSubmit"/>
    </div>
</template>

<script setup>
import useTweets from '../../composables/useTweets'

const { postTweet } = useTweets();
const loading = ref(false)
// data comes from child component emitter ..
const handleFormSubmit = async ({ text, mediaFiles }) => {
    loading.value = true;
    try {
        const responseTweet = await postTweet({
            text,
            mediaFiles
        });

        console.log(responseTweet);

    } catch (error) {
        console.log(error);
    } finally {
        loading.value = false
    }
}
</script>