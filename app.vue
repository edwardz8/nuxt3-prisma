<script setup>
const darkMode = ref(false)
</script>

<template>
  <div class="{'dark': darkMode }">
    <div class="bg-white dark:bg-dim-900">
      <div class="min-h-full">

        <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-6 lg:gap-5">

          <!-- left sidebar -->
          <div class="md:block xs-col-span-1 xl:col-span-2">
            <div class="sticky top-0">
              <sidebar-left />
            </div>
          </div>

          <!-- main content -->
          <main class="col-span-12 bg-gray-800 md:col-span-10 xl:col-span-8">
            dkjfk
          </main>


          <!-- right sidebar -->
          <div class="hidden md:block xl:col-span-2">
            <div class="sticky top-0">
              <!-- <sidebar-left /> -->
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
