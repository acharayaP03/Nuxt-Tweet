<template>
    <div>
        <MainSection title="Tweet" :loading="loading">
            <Head>
                <Title></Title>
            </Head>
        </MainSection>
    </div>
</template>

<script setup>

const loading = ref(false);

//get id from route params
function getTweetIdFromRoute() {
    return useRoute().params.id;
}

// async function getTweets () {
//     loading.value = true;
//     try{
//         const response = await getTweetById(getTweetIdFromRoute());
//
//         console.log(response)
//     }catch(error){
//         console.log(error);
//     } finally {
//         loading.value = false
//     }
// }


</script>