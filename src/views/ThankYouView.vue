<template>
  <section class="thankyou">
    <div class="thankyou-card">
      <h1>Grazie per la tua configurazione ✨</h1>
      <p class="lead">
        Abbiamo registrato la combinazione di colori che hai scelto. Il team prodotto
        potrà ora valutare la resa visiva della bottiglia.
      </p>

      <div v-if="summaryColors" class="summary">
        <h2>Riepilogo colori</h2>
        <div class="summary-row">
          <div class="summary-item">
            <span class="summary-label">Tappo</span>
            <div class="summary-chip">
              <span class="summary-dot" :style="{ backgroundColor: summaryColors.cap.hex }"></span>
              <span>{{ summaryColors.cap.name }}</span>
              <span class="summary-code">{{ summaryColors.cap.hex }}</span>
            </div>
          </div>

          <div class="summary-item">
            <span class="summary-label">Corpo</span>
            <div class="summary-chip">
              <span class="summary-dot" :style="{ backgroundColor: summaryColors.body.hex }"></span>
              <span>{{ summaryColors.body.name }}</span>
              <span class="summary-code">{{ summaryColors.body.hex }}</span>
            </div>
          </div>

          <div class="summary-item">
            <span class="summary-label">Fondo</span>
            <div class="summary-chip">
              <span class="summary-dot" :style="{ backgroundColor: summaryColors.base.hex }"></span>
              <span>{{ summaryColors.base.name }}</span>
              <span class="summary-code">{{ summaryColors.base.hex }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="actions">
        <RouterLink to="/configura" class="primary-btn">
          Crea una nuova configurazione
        </RouterLink>
        <RouterLink to="/" class="ghost-btn">
          Torna alla home
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const palette = [
  {
    id: 'neon-lime',
    name: 'Neon Lime',
    hex: '#C6FF00',
    bg: 'linear-gradient(135deg, #C6FF00, #76FF03)'
  },
  {
    id: 'electric-blue',
    name: 'Electric Blue',
    hex: '#2979FF',
    bg: 'linear-gradient(135deg, #2979FF, #00B0FF)'
  },
  {
    id: 'coral-punch',
    name: 'Coral Punch',
    hex: '#FF5A7A',
    bg: 'linear-gradient(135deg, #FF5A7A, #FF2D55)'
  },
  {
    id: 'aqua-fresh',
    name: 'Aqua Fresh',
    hex: '#00E5FF',
    bg: 'linear-gradient(135deg, #00E5FF, #1DE9B6)'
  },
  {
    id: 'purple-vibe',
    name: 'Purple Vibe',
    hex: '#9C27B0',
    bg: 'linear-gradient(135deg, #9C27B0, #E040FB)'
  },
  {
    id: 'sunset-orange',
    name: 'Sunset Orange',
    hex: '#FF9100',
    bg: 'linear-gradient(135deg, #FF9100, #FF6D00)'
  },
  {
    id: 'mint-sport',
    name: 'Mint Sport',
    hex: '#69F0AE',
    bg: 'linear-gradient(135deg, #B9F6CA, #69F0AE)'
  },
  {
    id: 'cyber-yellow',
    name: 'Cyber Yellow',
    hex: '#FFD600',
    bg: 'linear-gradient(135deg, #FFEA00, #FFD600)'
  },
  {
    id: 'magenta-pop',
    name: 'Magenta Pop',
    hex: '#FF4081',
    bg: 'linear-gradient(135deg, #FF4081, #F50057)'
  },
  {
    id: 'graphite',
    name: 'Graphite',
    hex: '#263238',
    bg: 'linear-gradient(135deg, #263238, #000000)'
  }
]


const route = useRoute()

const summaryColors = computed(() => {
  const cap = palette.find((c) => c.id === route.query.cap)
  const body = palette.find((c) => c.id === route.query.body)
  const base = palette.find((c) => c.id === route.query.base)

  if (!cap || !body || !base) return null

  return { cap, body, base }
})
</script>

<style scoped src="../styles/ThankYouView.css"></style>
