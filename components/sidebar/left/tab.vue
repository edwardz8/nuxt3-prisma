<template>
    <nuxt-link to="/"
        class="flex items-center p-3 text-black rounded-full w-min bg-gray-200"
        :class="defaultTransition">

        <div class="w-6 h-6 text-dark">
            <slot name="icon"></slot>
        </div>

        <div class="ml-2 mt-1 px-2 text-lg hidden" :class="textClasses">
            <slot name="name"></slot>
        </div>

    </nuxt-link>
</template>
<script setup>
const { defaultTransition } = useTailwindConfig()

const props = defineProps({
    active: {
        type: Boolean,
        default: false
    }
})

const textClasses = computed(() => props.active ? 'font-semibold' : 'font-normal')
</script>