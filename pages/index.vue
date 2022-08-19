<template>
  <div>
    <MainSection title="Home" :loading="loading">
      <Head>
        <Title>Home / Twitter</Title>
      </Head>
      <!-- {{ user }} -->
      <div class="border-b" :class="twitterBorderColor">
        <tweet-form :user="user" @on-success="handleFormSuccess" />
      </div>
    </MainSection>
  </div>
</template>

<script setup>
const { twitterBorderColor } = useTailwindConfig();

const { getTweets } = useTweets();
const loading = ref(false);
const homeTweets = ref([]);
const { useAuthUser } = useAuth();
const user = useAuthUser();

onBeforeMount(async () => {
  loading.value = true;
  try {
    const { tweets } = await getTweets();
    homeTweets.value = tweets;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
});

function handleFormSuccess(tweet) {
  navigateTo({
    path: `/status/${tweet.id}`,
  });
}
</script>
