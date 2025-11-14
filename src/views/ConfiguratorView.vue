<template>
  <section class="config-page">
    <div class="config-layout">
      <div class="config-main">
        <header class="config-header">
          <h1>Personalizza la tua bottiglia</h1>
          <p>
            Scegli i colori di tappo, corpo e fondo. L’anteprima sulla destra si aggiorna
            in tempo reale ad ogni scelta.
          </p>
        </header>

        <div class="config-card">
          <ColorStep
            v-model="currentColorId"
            :step-number="currentStep + 1"
            :title="currentStepConfig.title"
            :subtitle="currentStepConfig.subtitle"
            :colors="palette"
          />

          <div class="config-footer">
            <button
              type="button"
              class="secondary-btn"
              :disabled="currentStep === 0"
              @click="goPrev"
            >
              Indietro
            </button>

            <div class="config-footer-right">
              <div class="step-indicator">
                <div
                  v-for="(step, index) in 3"
                  :key="index"
                  class="step-dot"
                  :class="{
                    'step-dot--active': index === currentStep,
                    'step-dot--done': index < currentStep
                  }"
                ></div>
              </div>

              <button
                v-if="currentStep < 2"
                type="button"
                class="primary-btn"
                :disabled="!currentColorId"
                @click="goNext"
              >
                Avanti
              </button>

              <button
                v-else
                type="button"
                class="primary-btn"
                :disabled="!canSubmit"
                @click="submitConfig"
              >
                Invia
              </button>
            </div>
          </div>
        </div>
      </div>

      <BottlePreview :colors="previewColors" />
    </div>
  </section>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import BottlePreview from '../components/BottlePreview.vue'
import ColorStep from '../components/ColorStep.vue'

const router = useRouter()

// 10 colori disponibili
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

// ordine degli step: tappo, corpo, fondo
const stepKeys = ['cap', 'body', 'base']

const stepConfigs = [
  {
    key: 'cap',
    title: 'Scegli il colore del tappo',
    subtitle: 'Il tappo è il primo dettaglio che si nota: rendilo iconico e riconoscibile.'
  },
  {
    key: 'body',
    title: 'Scegli il colore del corpo',
    subtitle: 'Il corpo racconta il carattere del brand: neutro, vivace o intenso?'
  },
  {
    key: 'base',
    title: 'Scegli il colore del fondo',
    subtitle: 'Il fondo chiude la bottiglia e ne definisce la stabilità, visivamente e fisicamente.'
  }
]

const currentStep = ref(0)

const selections = reactive({
  cap: null,
  body: null,
  base: null
})

const currentStepConfig = computed(() => stepConfigs[currentStep.value])

const currentColorId = computed({
  get() {
    const key = stepKeys[currentStep.value]
    return selections[key]
  },
  set(val) {
    const key = stepKeys[currentStep.value]
    selections[key] = val
  }
})

const getHexById = (id) => {
  if (!id) return null
  const color = palette.find((c) => c.id === id)
  return color ? color.hex : null
}

const previewColors = computed(() => ({
  cap: getHexById(selections.cap),
  body: getHexById(selections.body),
  base: getHexById(selections.base)
}))

const canSubmit = computed(() => selections.cap && selections.body && selections.base)

function goNext() {
  if (currentStep.value < 2 && currentColorId.value) {
    currentStep.value++
  }
}

function goPrev() {
  if (currentStep.value > 0) {
    currentStep.value--
  }
}

function submitConfig() {
  if (!canSubmit.value) return

  router.push({
    name: 'thankYou',
    query: {
      cap: selections.cap,
      body: selections.body,
      base: selections.base
    }
  })
}
</script>


