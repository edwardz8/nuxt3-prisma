<script setup>
const darkMode = ref(false);

const { useAuthUser, initAuth, useAuthLoading, logout } = useAuth();
const isAuthLoading = useAuthLoading();
const user = useAuthUser();

const { closePostTweetModal, usePostTweetModal, openPostTweetModal, useReplyTweet } = useTweets()

const postTweetModal = usePostTweetModal()

const emitter = useEmitter()

const replyTweet = useReplyTweet()

emitter.$on('replyTweet', (tweet) => {
  openPostTweetModal(tweet)
})

emitter.$on('toggleDarkMode', () => {
  darkMode.value = !darkMode.value 
})

onBeforeMount(() => {
  initAuth();
});

function handleFormSuccess(tweet) {
  closePostTweetModal()

  navigateTo({
    path: `/status/${tweet.id}`
  })
}

function handleModalClose() {
  closePostTweetModal()
}

function handleOpenTweetModal() {
  openPostTweetModal(null)
}

function handleUserLogout() {
  logout()
}
</script>

<template>
  <div class="{'dark': darkMode }">
    <div class="bg-white dark:bg-dim-900">

      <loading v-if="isAuthLoading" />

      <div v-else-if="user" class="min-h-full">
          <!-- left sidebar / now top navigation -->
          <div>
            <div class="sticky top-0">
              <navigation :user="user" @on-tweet="handleOpenTweetModal" @on-logout="handleUserLogout" />
            </div>
          </div>

        <!-- post grid -->
        <div class="grid grid-cols-12 mx-auto">
          <!-- main content -->
          <main class="col-span-12 justify-center">
            <router-view />
          </main>
          <!-- right sidebar -->
          <!-- <div class="hidden md:block xl:col-span-2">
            <div class="sticky top-0">
               <sidebar-left />
            </div>
          </div> -->
        </div>
      </div>

      <auth-page v-else />

      <ui-modal :isOpen="postTweetModal" @on-close="handleModalClose">
        <tweet-form :replyTo="replyTweet" showReply :user="user" @onSuccess="handleFormSuccess" />
      </ui-modal>
    </div>
  </div>
</template>
