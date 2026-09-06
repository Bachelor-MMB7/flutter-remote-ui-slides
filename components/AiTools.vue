<script setup>
import { ref } from 'vue'

// Liegt als Einblendung auf der Quellenfolie statt als eigene Folie, damit man
// mit den Pfeiltasten nicht versehentlich darauf landet. Nur der Knopf oeffnet
// sie, und Klicks in die Folie blaettern in Slidev nicht weiter.
const shown = ref(false)
</script>

<template>
  <button class="ai-open" @click="shown = true">AI tools usage</button>

  <div v-if="shown" class="ai-overlay">
    <div class="ai-head-row">
      <div class="ai-title">AI Tools Usage</div>
      <button class="ai-close" @click="shown = false" aria-label="Close">Close</button>
    </div>

    <p class="ai-intro">This table documents the use of AI tools for this presentation, continuing the declaration in Appendix E of the thesis. The content, the argument structure, the sources and the results come exclusively from the author.</p>

    <div class="ai-table">
      <div class="ai-row ai-head">
        <div>Area</div>
        <div>Tools</div>
        <div>Use case</div>
        <div>Description</div>
      </div>
      <div class="ai-row">
        <div>Slides</div>
        <div>Claude Code (Anthropic, Opus 5), Codex (OpenAI, GPT-5.6-sol)</div>
        <div>Layout support</div>
        <div>Support with Slidev and CSS syntax for slide structure, diagrams and click animations.</div>
      </div>
      <div class="ai-row">
        <div>Slides</div>
        <div>Claude Code (Anthropic, Opus 5)</div>
        <div>Formulation support</div>
        <div>Support with revising the slide wording, checked by the author against the thesis.</div>
      </div>
    </div>
  </div>
</template>
