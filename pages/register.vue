<template>
  <div class="flex h-screen">
    <div class="relative flex-1 w-0 lg:block">
      <img class="absolute inset-0 object-cover w-full h-full"
        src="https://images.unsplash.com/photo-1516226415502-d6624544376b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1439&q=80"
      />
    </div>
    <div
      class="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
    >
      <div class="flex items-center w-full h-full max-w-sm mx-auto lg:w-96">
        <auth-register />
      </div>
    </div>
  </div>
</template>

<script setup>

</script>
