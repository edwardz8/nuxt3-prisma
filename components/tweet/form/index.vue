<template>
  <div>
    <div v-if="loading" class="flex items-center justify-center py-6">
      <ui-spinner />
    </div>

    <div v-if="props.user">
    <tweet-item :tweet="props.replyTo" v-if="props.replyTo && props.showReply" hideActions />
    <tweet-form-input
      :user="props.user"
      placeholder="Share your betting ideas..."
      @onSubmit="handleFormSubmit"
    />
    </div>

  </div>
</template>

<script setup>
const emits = defineEmits(["onSuccess"]);

const loading = ref(false);

const { postTweet } = useTweets();

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
  placeholder: {
    type: String,
    required: false,
  },
  replyTo: {
    type: Object,
    default: null,
  },
  showReply: {
    type: Boolean,
    default: false,
  },
});

async function handleFormSubmit(data) {
  loading.value = true;
  try {
    const response = await postTweet({
      text: data.text,
      mediaFiles: data.mediaFiles,
      replyTo: props.replyTo?.id,
    });
    emits("onSuccess", response.tweet);
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
}
</script>
