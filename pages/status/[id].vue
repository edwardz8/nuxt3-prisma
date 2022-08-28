<template>
    <div>
        <MainSection title="post" :loading="loading">

            <head>
                <Title>Post</Title>
            </head>

            <div v-if="tweet">
            <tweet-details :user="user" :tweet="tweet" />
            </div>

        </MainSection>
    </div>
</template>

<script setup>
const loading = ref(false)

const tweet = ref(null)
const { getTweetById } = useTweets()

const { useAuthUser } = useAuth()
const user = useAuthUser()

watch(() => useRoute().fullPath, () => getTweet())
function getTweetIdFromRoute() {
    return useRoute().params.id
}

async function getTweet() {
    loading.value = true
    try {
        // let tweetId = getTweetIdFromRoute()
        let tweetId = useRoute().params.id 
        if (tweetId) {
            const response = await getTweetById(tweetId)
            tweet.value = response.tweet 
        }
    } catch (error) {
        console.log(error);
    } finally {
        loading.value = false
    }
}

onMounted(async () => {
    await getTweet()
})
</script>