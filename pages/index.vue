<template>
    <MainSection title="Home" :loading="loading">
        <Head>
            <Title>Home / Twitter</Title>
        </Head>
        <div class='border-b' :class='twitterBorderColor'>
            <TweetForm />
        </div>

        <TweetListFeed :tweets='allTweets'/>

    </MainSection>
</template>

<script setup lang="ts">
import { TweetListFeed } from '#components';
import { useAuth, useTailwindDefaults, useTweets } from '#imports'

const { getAllTweets } = useTweets();

const { twitterBorderColor } = useTailwindDefaults();

const loading = ref(false)
const { useAuthUser } = useAuth();
const allTweets = ref([])

const user = useAuthUser()
provide('user', user)

onBeforeMount(async () => {
    loading.value = true;
    try{
        const { tweet: response } = await getAllTweets();

        allTweets.value = response
    }catch (error){
        console.log(error)
    }finally {
        loading.value = false
    }
})
</script>