<template>
    <MainSection title="Home" :loading="loading">
        <TweetForm />
    </MainSection>
</template>

<script setup lang="ts">
const loading = ref(false)
const { useAuthUser } = useAuth();

const user = useAuthUser()
provide('user', user)
</script>