<template>
  <div
    @click.stop.prevent="emits('onClick')"
    class="flex items-center text-gray-800 cursor-pointer group mt-4 bg-gray-100 rounded-md px-6 hover:bg-gray-200"
  >
    <div :class="`p-2 rounded-full bg-${props.color}-800 group-hover:text-${props.color}-600 ${defaultTransition}`">
        <slot name="icon" :classes="`w-${props.size} h-${props.size}`" />
    </div>

    <span :class="`ml-1 group-hover:text-${props.color}-200`">
      Add Comment 
    </span>

    <span class="ml-6">
      <slot></slot>
    </span>
  </div>
</template>

<script setup>
const { defaultTransition } = useTailwindConfig();

const emits = defineEmits(["onClick"]);

const props = defineProps({
  color: {
    type: String,
    required: false,
  },
  size: {
    type: Number,
    default: 5,
  },
});
</script>
