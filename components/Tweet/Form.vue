<template>
    <div>
       <TweetInput @onSubmit="handleFormSubmit"/>
    </div>
</template>

<script setup>
// data comes from child component emitter ..
const handleFormSubmit = (data) => {
    alert(JSON.stringify(data))
}
</script>