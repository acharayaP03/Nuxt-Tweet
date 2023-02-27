<template>
    <div>
       <TweetInput @onSubmit="handleFormSubmit"/>
    </div>
</template>

<script setup>
import useTweets from '../../composables/useTweets'

const { postTweet } = useTweets();
// data comes from child component emitter ..
const handleFormSubmit = async ({ text, mediaFiles }) => {
    try {
        const responseTweet = await postTweet({
            text,
            mediaFiles
        });

        console.log(responseTweet);

    } catch (error) {
        console.log(error);
    }
}
</script>