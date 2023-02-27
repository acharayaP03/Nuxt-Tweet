<template>
    <div>
         <div class="flex items-center flex-shrink-0 p-4 pb-0">
            <div class="flex w-12 items-top">
                <img :src="user?.profileImage" alt="Profile image" class="inline-block w-10 h-10 rounded-full">
            </div>
            <div class="w-full p-2">
                <textarea 
                    class="w-full h-12 text-lg text-gray-900 placeholder:text-gray-400 bg-transparent border-0 dark:text.white focus:ring-0"
                    v-model="text"
                ></textarea>
            </div>
         </div>
         <div>
            <button @click="handleTweet">Tweet</button>
         </div>
    </div>
</template>

<script setup>
const text = ref('')
const user = inject('user');
const emits = defineEmits(['onSubmit'])

const handleTweet = () =>{
    emits('onSubmit', {
        text: text.value
    })
}
</script>