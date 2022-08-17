<template>
  <div class="w-full">
    <div class="flex justify-center">
      <!-- <div class="w-10 h-10">
                <logo-brand />
            </div> -->
    </div>

    <div class="pt-5 space-y-6">
      <ui-input v-model="data.username" label="username" placeholder="username" />

      <ui-input
        label="password"
        placeholder="********"
        type="password"
        v-model="data.password"
      />

      <ui-button @click="handleLogin" liquid :disabled="isButtonDisabled">
        Login
      </ui-button>
    </div>
  </div>
</template>

<script setup>
const data = reactive({
  username: "",
  password: "",
  loading: false,
});
async function handleLogin() {
  const { login } = useAuth();
  data.loading = true;
  try {
    await login({
      username: data.username,
      password: data.password,
    });
  } catch (error) {
    console.log(error);
  } finally {
    data.loading = false;
  }
}
const isButtonDisabled = computed(() => {
  return !data.username || !data.password || data.loading;
});
</script>
