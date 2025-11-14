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
  { id: 'bianco-ghiaccio', name: 'Bianco Ghiaccio', hex: '#f5f7fb' },
  { id: 'sabbia', name: 'Sabbia', hex: '#e4d4c8' },
  { id: 'ambra', name: 'Ambra', hex: '#d97757' },
  { id: 'rosso-coral', name: 'Rosso Coral', hex: '#f97373' },
  { id: 'terracotta', name: 'Terracotta', hex: '#b45337' },
  { id: 'verde-salvia', name: 'Verde Salvia', hex: '#a3b18a' },
  { id: 'verde-foresta', name: 'Verde Foresta', hex: '#2f5d46' },
  { id: 'blu-oceano', name: 'Blu Oceano', hex: '#2563eb' },
  { id: 'blu-petrolio', name: 'Blu Petrolio', hex: '#1e3a5f' },
  { id: 'grafite', name: 'Grafite', hex: '#111827' }
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
