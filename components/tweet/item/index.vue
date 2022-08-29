<template>
    <nuxt-link :to="'/status/'+props.tweet.id">
        <tweet-item-header :tweet="props.tweet" />

        <div :class="tweetBodyWrapper">
            <p class="w-auto font-medium text-gray-800 dark:text-white text-center" :class="textSize">
                {{ props.tweet.text }}
            </p>

            <div v-for="image in tweet?.mediaFiles" :key="image.id" class="flex justify-center my-3 mr-2 rounded-2xl pt-2"
                :class="twitterBorderColor">
                <img :src="image.url" class="w-full max-w-sm rounded-2xl" />
            </div>

            <!-- <div class="mt-2" v-if="!props.hideActions">
                <tweet-item-actions :tweet="props.tweet" :compact="props.compact"
                    @on-comment-click="handleCommentClick" />
            </div> -->
        </div>
    </nuxt-link>
</template>

<script setup>
const { twitterBorderColor } = useTailwindConfig()

const emitter = useEmitter()

const props = defineProps({
    tweet: {
        type: null,
        required: true
    },
    compact: {
        type: Boolean,
        default: false
    },
    hideActions: {
        type: Boolean,
        default: false
    }
})

const tweetBodyWrapper = computed(() => props.compact ? 'ml-2' : 'ml-2 mt-6')

const textSize = computed(() => props.compact ? 'text-base' : 'text-2xl')

function handleCommentClick() {
    emitter.$emit('replyTweet', props.tweet)
}
</script>