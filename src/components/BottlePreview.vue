<template>
  <aside class="preview">
    <div class="preview-card">
      <p class="preview-label">Anteprima bottiglia</p>

      <div class="preview-bottle-wrapper">
        <div class="bottle-shadow"></div>

        <div class="bottle">

          <!-- tappo -->
          <div
            class="bottle-cap"
            :style="{ backgroundColor: colors.cap || '#e5e7eb' }"
          ></div>

          <!-- corpo unico: collo + corpo insieme -->
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

      <div class="preview-legend">
        <div class="preview-chip">
          <span class="chip-dot" :style="{ backgroundColor: colors.cap }"></span>
          <span>Tappo</span>
        </div>

        <div class="preview-chip">
          <span class="chip-dot" :style="{ backgroundColor: colors.body }"></span>
          <span>Corpo</span>
        </div>

        <div class="preview-chip">
          <span class="chip-dot" :style="{ backgroundColor: colors.base }"></span>
          <span>Fondo</span>
        </div>
      </div>

      <p class="preview-note">
        I colori sono indicativi e possono variare leggermente rispetto al prodotto reale.
      </p>

    </div>
  </aside>
</template>

<script setup>
defineProps({
  colors: {
    type: Object,
    default: () => ({
      cap: null,
      body: null,
      base: null
    })
  }
})
</script>

<style scoped src="../styles/BottlePreview.css"></style>


