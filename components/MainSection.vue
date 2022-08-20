<template>
    <div :class="twitterBorderColor">
        <div class="sticky top-0 px-4 py-3">
            <h2 class="text-xl font-bold text-gray-800 text-gray-100">{{ props.title }}</h2>
        </div>
        <div v-if="props.loading" class="flex items-center justify-center p-4" :class="twitterBorderColor">
            <ui-spinner />
        </div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
const { twitterBorderColor } = useTailwindConfig()

const props = defineProps({
    title: {
        type: String,
        required: false
    },
    loading: {
        type: Boolean,
        required: true
    }
})

</script>