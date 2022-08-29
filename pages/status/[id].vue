<template>
  <div>
    <MainSection title="post" :loading="loading">
      <head>
        <Title>Post</Title>
      </head>

      <div v-if="tweet">
        <tweet-details :user="user" :tweet="tweet" @populate-reply="populateReply" />
      </div>
    </MainSection>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const loading = ref(false);

    const tweet = ref(null);
    const { getTweetById } = useTweets();

    const { useAuthUser } = useAuth();
    const user = useAuthUser();

    /* watch(() => useRoute().fullPath, () => getTweet())
        function getTweetIdFromRoute() {
            return useRoute().params.id
        } */

    async function getTweet(tweetId) {
      loading.value = true;
      try {
        if (tweetId) {
          const response = await getTweetById(tweetId);
          tweet.value = response.tweet;
        }
        // let tweetId = getTweetIdFromRoute()
        // let tweetId = useRoute().params.id
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    }

    function populateReply(reply) {
      tweet.value.replies.unshift({ ...reply });
    }

    onBeforeMount(async () => {
      await getTweet(useRoute().params.id);
    });

    return {
      loading,
      tweet,
      user,
      getTweet,
      populateReply,
    };
  },

  async beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.getTweet(to.params.id);
    });
  },
});
</script>
