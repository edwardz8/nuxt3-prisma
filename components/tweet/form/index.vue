<template>
  <div>
    <div v-if="loading" class="flex items-center justify-center py-6">
      <ui-spinner />
    </div>

    <tweet-form-input
      :user="props.user"
      :placeholder="props?.placeholder"
      @onSubmit="handleFormSubmit"
    />
  </div>
</template>

<script setup>
const { postTweet } = useTweets();
const loading = ref(false);
const emits = defineEmits(["onSuccess"]);

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
