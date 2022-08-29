<template>
  <div>

    <!-- <MainSection title="Home" :loading="loading"> -->
    <MainSection :loading="loading">
      <Head>
        <Title>Home</Title>
      </Head>

      <div :class="twitterBorderColor">
        <tweet-form :user="user" @on-success="handleFormSuccess" />
      </div>

      <tweet-list-feed :tweets="homeTweets" />
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
  homeTweets.value.unshift({...tweet})
  navigateTo({
    path: '/',
  });
}
</script>
