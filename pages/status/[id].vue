<template>
    <div>
        <MainSection title="Tweet" :loading="loading">
            <Head>
                <Title></Title>
            </Head>

            <p>
                {{ tweet }}
            </p>
        </MainSection>
    </div>
</template>

<script setup>
import useTweets from '../../composables/useTweets'
import { useRoute } from 'vue-router'
const { useGetTweetById } = useTweets()
const loading = ref(false);
const tweet = ref(null)
//get id from route params
const id = useRoute().params.id;

async function getTweets () {
    loading.value = true;

    try{
        const response = await useGetTweetById(id);

        tweet.value  = response
    }catch(error){
        console.log(error);
    } finally {
        loading.value = false
    }
}

getTweets();
</script>