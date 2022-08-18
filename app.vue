<script setup>
const darkMode = ref(false);

const { useAuthUser, initAuth, useAuthLoading } = useAuth();

const user = useAuthUser();
const isAuthLoading = useAuthLoading();

onBeforeMount(() => {
  initAuth();
});
</script>

<template>
  <div class="{'dark': darkMode }">
    <div class="bg-white dark:bg-dim-900">
      <loading v-if="isAuthLoading" />

      <div v-else-if="user" class="min-h-full">
        <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-6 lg:gap-5">
          <!-- left sidebar -->
          <div class="md:block xs-col-span-1 xl:col-span-2">
            <div class="sticky top-0">
              <sidebar-left />
            </div>
          </div>
          <!-- main content -->
          <main class="col-span-12 bg-gray-600 md:col-span-10 xl:col-span-8">
            <router-view />
          </main>
          <!-- right sidebar -->
          <div class="hidden md:block xl:col-span-2">
            <div class="sticky top-0">
              <!-- <sidebar-left /> -->
            </div>
          </div>
        </div>
      </div>

      <auth-page v-else />
    </div>
  </div>
</template>
