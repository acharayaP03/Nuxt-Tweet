<template>
    <div>
       <TweetInput @onSubmit="handleFormSubmit"/>
    </div>
</template>

<script setup>
const { postTweet } = useTweets();
// data comes from child component emitter ..
const handleFormSubmit = async (data) => {
    try {
        const responseTweet = await postTweet(data);

        console.log(responseTweet);
    } catch (error) {
        console.log(error);
    }
}
</script>