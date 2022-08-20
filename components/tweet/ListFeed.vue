<template>
    <div class="columns-1 md:columns-2 lg:columns-2 xl:columns-3">
        <!-- <div v-if="isEmptyArray" class="p-4">
            <p class="text-center text-gray-500">
                No posts
            </p>
        </div> -->
        <div v-if="tweets" class="mb-2 mt-2 ml-2 mr-2 pb-4 border-b cursor-pointer"
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

function redirect(tweet) {
    navigateTo(`/status/${tweet.id}`)
}
</script>