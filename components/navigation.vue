<template>
  <ul class="flex justify-center">

    <li class="mr-6 mt-auto mb-5">
      <div>
        <ui-button @on-click="emits('onTweet')">
          <div class="w-6 h-6 font-bold"><PencilIcon /></div>
        </ui-button>
      </div>
    </li>
    
    <li class="mr-6 mt-auto mb-8">
      <nuxt-link to="/">
        <div class="w-8 h-8">
          <HomeIcon />
        </div>
      </nuxt-link>
    </li>


    <li class="mr-6">
      <div
        class="flex flex-row items-center px-2 py-2 mx-auto mt-auto mb-4 rounded-full cursor-pointer w-18 hover:bg-gray-100 dark:hover:bg-dim-800"
        :class="defaultTransition"
        @click="emits('onLogout')"
      >
        <div class="flex flex-row">
          <img :src="props.user.profileImage" class="w-10 h-10 rounded-full" />
          <div class="flex-col ml-4">
           <!--  <h1 class="text-sm font-bold text-gray-800 dark:text-white">
              {{ user.name }}
            </h1> -->
            <p class="mt-2 text-sm font-bold text-gray-800 dark:text-white">
              {{ user.handle }}
            </p>
          </div>
        </div>

        <!-- ICON -->
       <!--  <div class="ml-6">
          <div class="w-6 h-6 mr-3">
            <ChevronDownIcon />
          </div>
        </div> -->
      </div>
    </li>
  </ul>
</template>

<script setup>
import { HomeIcon } from "@heroicons/vue/solid";
import {
  UserIcon,
  PencilIcon,
  ChevronDownIcon,
} from "@heroicons/vue/outline";
const { defaultTransition } = useTailwindConfig();

const emits = defineEmits(["onTweet", "onLogout"]);

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});
</script>
