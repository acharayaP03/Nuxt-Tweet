<template>
    <button
        class='flex justify-center text-white bg-blue-400 rounded-full hover:bg-blue-500 font-sm disabled:bg-blue-300 disabled:cursor-not-allowed'
        :disabled='props.disabled'
        :class='classes'
        @click='handleClick'
    >
        <span :class='textFontSize'>
            <slot/>
        </span>
    </button>
</template>

<script setup lang='ts'>
import { defineEmits, PropType } from '@vue/runtime-core'

const emits = defineEmits(['onTweet'])

const props = defineProps({
    disabled: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    size: {
        type: String as PropType<string>,
        default: 'md'
    },
    liquid: {
        type: Boolean as PropType<boolean>,
        default: false
    }
});

const paddingClasses = computed(() => {
    switch (props.size){
        case 'sm':
            return 'px-4 py-2';
        case 'lg':
            return 'px-4 py-3';
        default:
            return 'px-3 py-3'
    }
});

const textFontSize = computed(() => {
    switch (props.size){
        case 'lg':
            return 'text-md';
        default:
            return 'text-sm'
    }
})

const defaultWidth = computed(() => {
    switch (props.size){
        default:
            return 'w-min'
    }
})
const classes = computed(() => `${paddingClasses.value} ${props.liquid ? 'w-full': defaultWidth.value}`);

const handleClick = (event: Event) => {
    emits('onTweet', event)
}
</script>
