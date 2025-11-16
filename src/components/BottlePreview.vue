<template>
  <aside class="preview">
    <div class="preview-card">
      <p class="preview-label">ANTEPRIMA BOTTIGLIA</p>

      <!-- BOTTIGLIA -->
      <div class="preview-bottle-wrapper">
        <div class="bottle-shadow"></div>

        <div class="bottle">
          <!-- tappo -->
          <div
            class="bottle-cap"
            :style="{ backgroundColor: colors.cap || '#e5e7eb' }"
          ></div>

          <!-- corpo -->
          <div
            class="bottle-body"
            :style="{ backgroundColor: colors.body || '#f9fafb' }"
          ></div>

          <!-- fondo -->
          <div
            class="bottle-base"
            :style="{ backgroundColor: colors.base || '#e5e7eb' }"
          ></div>
        </div>
      </div>

      <!-- LEGENDA STEP -->
      <div class="preview-legend">
        <div class="legend-dots">
          <span class="dot" :class="{ 'is-active': Number(activeStep) === 1 }"></span>
          <span class="dot" :class="{ 'is-active': Number(activeStep) === 2 }"></span>
          <span class="dot" :class="{ 'is-active': Number(activeStep) === 3 }"></span>
        </div>
        <div class="legend-labels">
          <span :class="{ 'is-active': Number(activeStep) === 1 }">Tappo</span>
          <span :class="{ 'is-active': Number(activeStep) === 2 }">Corpo</span>
          <span :class="{ 'is-active': Number(activeStep) === 3 }">Fondo</span>
        </div>
      </div>

      <p class="preview-note">
        I colori sono indicativi e possono variare leggermente rispetto al prodotto reale.
      </p>
    </div>
  </aside>
</template>

<script setup>
const { colors, activeStep } = defineProps({
  colors: {
    type: Object,
    default: () => ({
      cap: '#e5e7eb',
      body: '#f9fafb',
      base: '#e5e7eb'
    })
  },
  activeStep: {
    type: [Number, String],
    default: 1
  }
})
</script>


<style scoped src="../styles/BottlePreview.css"></style>
