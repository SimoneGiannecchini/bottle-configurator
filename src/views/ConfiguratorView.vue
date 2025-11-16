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

      
      <BottlePreview
        :colors="previewColors"
        :active-step="currentStep + 1"  
      />
    </div>
  </section>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import BottlePreview from '../components/BottlePreview.vue'
import ColorStep from '../components/ColorStep.vue'

const router = useRouter()


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

// ordine degli step: 0 = tappo, 1 = corpo, 2 = fondo
const stepKeys = ['cap', 'body', 'base']

const stepConfigs = [
  {
    key: 'cap',
    title: 'Scegli il colore del tappo',
    subtitle:
      'Il tappo è il primo dettaglio che si nota: rendilo iconico e riconoscibile.'
  },
  {
    key: 'body',
    title: 'Scegli il colore del corpo',
    subtitle:
      'Il corpo racconta il carattere del brand: neutro, vivace o intenso?'
  },
  {
    key: 'base',
    title: 'Scegli il colore del fondo',
    subtitle:
      'Il fondo chiude la bottiglia e ne definisce la stabilità, visivamente e fisicamente.'
  }
]

// 0 = tappo, 1 = corpo, 2 = fondo
const currentStep = ref(0)

const selections = reactive({
  cap: null,
  body: null,
  base: null
})

const currentStepConfig = computed(() => stepConfigs[currentStep.value])

// v-model del componente ColorStep
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

// colori da mostrare in anteprima
const previewColors = computed(() => ({
  cap: getHexById(selections.cap),
  body: getHexById(selections.body),
  base: getHexById(selections.base)
}))

const canSubmit = computed(
  () => selections.cap && selections.body && selections.base
)

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

<style scoped src="../styles/ConfiguratorView.css"></style>
