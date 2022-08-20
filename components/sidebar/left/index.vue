<template>
    <div class="ml-2">
        <!-- <div class="p-2 my-2 w-min rounded-full bg-blue-900 rounded-full" :class="defaultTransition">
            <nuxt-link to="/">
                <div class="w-8 h-8">
                    <logo-brand />
                </div>
            </nuxt-link>
        </div> -->

        <div class="mt-2 space-y-3">
            <sidebar-left-tab active>
                <template v-slot:icon>
                    <HomeIcon />
                </template>
                <template v-slot:name>
                    Home
                </template>
            </sidebar-left-tab>

            <div class="block">
                <ui-button @on-click="emits('onTweet')">
                    <div class="w-6 h-6 font-bold"><PencilIcon /></div>
                </ui-button>
            </div>

        </div>

        <div class="flex flex-row items-center justify-center px-2 py-2 mx-auto mt-auto mb-5 rounded-full cursor-pointer w-14 xl:w-full hover:bg-gray-100 dark:hover:bg-dim-800"
            :class="defaultTransition" @click="emits('onLogout')">

            <div class="flex flex-row">
                <img :src="props.user.profileImage" class="w-10 h-10 rounded-full">
                <div class="flex-col hidden ml-2 xl:block">
                    <h1 class="text-sm font-bold text-gray-800 dark:text-white">
                        {{ user.name }}
                    </h1>
                    <p class="text-sm text-gray-400">
                        {{ user.handle }}
                    </p>
                </div>
            </div>

            <!-- ICON -->
            <div class="hidden ml-auto xl:block">
                <div class="w-6 h-6">
                    <ChevronDownIcon />
                </div>
            </div>

        </div>

    </div>
</template>

<script setup>
import { HomeIcon } from "@heroicons/vue/solid"
import { UserIcon, PencilIcon, ChevronDownIcon } from '@heroicons/vue/outline'
const { defaultTransition } = useTailwindConfig()

const emits = defineEmits(['onTweet', 'onLogout'])

const props = defineProps({
    user: {
        type: Object,
        required: true
    }
})
</script>