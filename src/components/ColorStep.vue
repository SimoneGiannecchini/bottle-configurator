<template>
  <div class="color-step">
    <header class="step-header">
      <p class="step-number">Step {{ stepNumber }} di 3</p>
      <h2>{{ title }}</h2>
      <p class="subtitle">{{ subtitle }}</p>
    </header>

    <div class="color-grid">
      <button
        v-for="c in colors"
        :key="c.id"
        class="color-swatch"
        :style="{ backgroundColor: c.hex }"
        :class="{ active: modelValue === c.id }"
        @click="$emit('update:modelValue', c.id)"
      >
        <span class="swatch-name">{{ c.name }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  modelValue: String,
  title: String,
  subtitle: String,
  stepNumber: Number,
  colors: Array
})

defineEmits(['update:modelValue'])
</script>


