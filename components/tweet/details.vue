<template>
    <div>
        <tweet-item :tweet="props.tweet" />

        <tweet-form placeholder="Tweet your reply" :reply-to="props?.tweet" :user="props.user"
            @on-success="handleFormSuccess" />

        <tweet-list-feed :tweets="replies" />
    </div>
</template>

<script setup>
const emits = defineEmits(["populateReply"])

const props = defineProps({
    tweet: {
        type: Object,
        required: false
    },
    user: {
        type: Object,
        required: true
    }
})

const replies = computed(() => props.tweet?.replies || [])

function handleFormSuccess(tweet) {
    emits("populateReply", tweet)

    navigateTo({
        path: `/status/${tweet.id}`
    })
}
</script>