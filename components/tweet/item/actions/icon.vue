<template>
    <div @click.stop.prevent="emits('onClick')" class="flex items-center text-gray-800 cursor-pointer group">

        <div :class="`p-2 rounded-full bg-${props.color}-800 group-hover:text-${props.color}-600 ${defaultTransition}`">
            <slot name="icon" :classes="`w-${props.size} h-${props.size}`" />
        </div>

        <span :class="`ml-1 group-hover:text-${props.color}-400`">
            <slot></slot>
        </span>

    </div>
</template>

<script setup>
const { defaultTransition } = useTailwindConfig()

const emits = defineEmits(['onClick'])

const props = defineProps({
    color: {
        type: String,
        required: false
    },
    size: {
        type: Number,
        default: 5
    }
})
</script>