<template>
    <div class="h-screen flex flex-col ml-2">
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
            <!-- second sidebar item -->
            <sidebar-left-tab active>
                <template v-slot:icon>
                    <UserIcon />
                </template>
                <template v-slot:name>
                    Profile
                </template>
            </sidebar-left-tab>
            <!-- third sidebar item -->
            <sidebar-left-tab active>
                <template v-slot:icon>
                    <BookmarkIcon />
                </template>
                <template v-slot:name>
                    Favorites
                </template>
            </sidebar-left-tab>
        </div>

    </div>
</template>

<script setup>
import { HomeIcon } from "@heroicons/vue/solid"
import { UserIcon, BookmarkIcon } from '@heroicons/vue/outline'
const { defaultTransition } = useTailwindConfig()


</script>