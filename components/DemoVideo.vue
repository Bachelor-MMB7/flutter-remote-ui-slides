<script setup>
import { ref } from 'vue'

// Solange nicht geklickt wurde, liegt nur ein Standbild auf der Folie.
// Erst der Klick erzeugt das <video>-Element — damit gibt es beim
// Folienwechsel nichts zu dekodieren und keine Steuerleiste, die
// ihren Lade-Spinner zeichnen koennte.
const started = ref(false)
</script>

<template>
  <img
    v-if="!started"
    class="demo-video demo-wide demo-poster"
    src="/demo-poster.jpg"
    alt="Demo"
    @click="started = true"
  />
  <button
    v-if="!started"
    class="demo-play"
    aria-label="Demo abspielen"
    @click="started = true"
  >
    <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true">
      <path d="M8 5v14l11-7z" fill="currentColor" />
    </svg>
  </button>
  <video
    v-else
    class="demo-video demo-wide"
    src="/demo.mp4"
    autoplay
    controls
    muted
    playsinline
  />
</template>
