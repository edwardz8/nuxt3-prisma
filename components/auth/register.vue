<template>
  <div class="w-full">
    <div class="pt-5 space-y-6">
      <ui-input v-model="data.name" label="name" placeholder="name" />
      <ui-input v-model="data.username" label="username" placeholder="username" />
      <ui-input v-model="data.email" label="name" placeholder="email" />

      <ui-input
        label="password"
        placeholder="********"
        type="password"
        v-model="data.password"
      />

      <ui-input
        label="repeat password"
        placeholder="********"
        type="password"
        v-model="data.repeatPassword"
      />

      <ui-button @click="handleRegistration" liquid :disabled="isButtonDisabled">
        Register
      </ui-button>
    </div>
  </div>
</template>

<script setup>
const data = reactive({
  name: "",
  username: "",
  email: "",
  password: "",
  repeatPassword: "",
  loading: false,
});

async function handleRegistration() {
  const { register } = useAuth();
  data.loading = true;
  try {
    await register({
      name: data.name,
      username: data.username,
      email: data.email,
      password: data.password,
      repeatPassword: data.repeatPassword,
    });
  } catch (error) {
    console.log(error);
  } finally {
    data.loading = false;
  }
}

const isButtonDisabled = computed(() => {
  return !data.name || !data.username || !data.email || !data.password || !data.repeatPassword || data.loading;
});
</script>