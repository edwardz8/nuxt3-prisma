<template>
  <div class="columns-1 sm:columns-3 md:columns-3 lg:columns-4 xl:columns-5 ml-2 mr-2">
    <div v-if="isEmptyArray" class="p-4">
      <p class="text-center text-gray-500">No posts</p>
    </div>
    <template v-if="!isEmptyArray">
      <div
        class="text-center bg-gray-200 rounded-md my-2 pb-4 cursor-pointer overflow-hidden"
        :class="[twitterBorderColor, defaultTransition]"
        v-for="tweet in props.tweets"
        :key="tweet.id"
      >
        <tweet-item :tweet="tweet" compact />
      </div>
    </template>
  </div>
</template>

<script setup>
const { twitterBorderColor, defaultTransition } = useTailwindConfig();

const props = defineProps({
  tweets: {
    type: Array,
    required: true,
  },
});

const isEmptyArray = computed(() => props.tweets.length === 0);

/* function redirect(tweet) {
    navigateTo(`/status/${tweet.id}`)
} */
</script>
