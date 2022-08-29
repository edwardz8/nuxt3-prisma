<template>
    <div class="columns-1 sm:columns-3 md:columns-3 lg:columns-4 xl:columns-5">
        <div v-if="isEmptyArray" class="p-4">
            <p class="text-center text-gray-500">
                No posts
            </p>
        </div>
        <div v-if="!isEmptyArray" class="text-center bg-gray-200 rounded-md my-2 pb-4 cursor-pointer"
            :class="[twitterBorderColor, defaultTransition]" v-for="tweet in props.tweets" :key="tweet.id"
            @click.native="redirect(tweet)">

            <tweet-item :tweet="tweet" compact />
        </div>
    </div>
</template>

<script setup>
const { twitterBorderColor, defaultTransition } = useTailwindConfig()

const props = defineProps({
    tweets: {
        type: Array,
        required: true
    }
})

const isEmptyArray = computed(() => props.tweets.length === 0)

/* function redirect(tweet) {
    navigateTo(`/status/${tweet.id}`)
} */
</script>