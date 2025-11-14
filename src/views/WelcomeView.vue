<template>
  <section class="welcome">
    <div class="welcome-content">
      <p class="eyebrow">Configuratore interattivo</p>
      <h1>Progetta la tua bottiglia in pochi click</h1>
      <p class="lead">
        Scegli il colore del tappo, del corpo e del fondo, guarda il risultato
        in tempo reale e invia la tua combinazione preferita al brand.
      </p>

      <ul class="highlights">
        <li>✔ 3 step guidati, zero complicazioni</li>
        <li>✔ 10 colori attentamente selezionati</li>
        <li>✔ Anteprima sempre visibile a schermo</li>
      </ul>

      <div class="actions">
        <RouterLink to="/configura" class="primary-btn">
          Inizia la configurazione
        </RouterLink>
        <button class="ghost-btn" type="button" @click="showHowItWorks = !showHowItWorks">
          Come funziona?
        </button>
      </div>

      <transition name="fade">
        <div v-if="showHowItWorks" class="how-it-works">
          <h2>Come funziona il configuratore</h2>
          <ol>
            <li>Decidi il colore del <strong>tappo</strong>.</li>
            <li>Passa al <strong>corpo</strong> della bottiglia.</li>
            <li>Completa scegliendo il colore del <strong>fondo</strong>.</li>
            <li>Conferma con <strong>“Invia”</strong> per salvare la tua proposta.</li>
          </ol>
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const showHowItWorks = ref(false)
</script>

<style scoped src="../styles/WelcomeView.css"></style>
