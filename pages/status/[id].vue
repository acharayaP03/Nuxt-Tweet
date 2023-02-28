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
const loading = ref(false)
</script>