<script setup>
import { computed, ref, watch } from 'vue'
import { useNav } from '@slidev/client'

const { currentPage } = useNav()

// Nur auf der ersten Folie eines neuen Abschnitts einblenden.
// Sichtbar: Problem (2), Question (4), Build (6), Demo (8),
// Evaluation (9), Limits (13), Summary (14).
// Summary umfasst Future work und Conclusion, wie Kapitel 9 der Thesis.
const hiddenPages = [1, 3, 5, 7, 10, 11, 12, 15, 16]

// Einblenden nach 1,1 Sek, Ausblenden nach 5 Sek
const isVisible = ref(false)
let showTimeout = null
let hideTimeout = null

watch(currentPage, () => {
  isVisible.value = false
  if (showTimeout) clearTimeout(showTimeout)
  if (hideTimeout) clearTimeout(hideTimeout)

  showTimeout = setTimeout(() => {
    isVisible.value = true
  }, 900)

  hideTimeout = setTimeout(() => {
    isVisible.value = false
  }, 4500)
}, { immediate: true })

// Bereiche: [startSeite, endSeite]
const sections = [
  { name: 'Problem', start: 2, end: 3 },
  { name: 'Question', start: 4, end: 5 },
  { name: 'Build', start: 6, end: 7 },
  { name: 'Demo', start: 8, end: 8 },
  { name: 'Evaluation', start: 9, end: 12 },
  { name: 'Limits', start: 13, end: 13 },
  { name: 'Summary', start: 14, end: 15 },
]

const currentSection = computed(() => {
  for (let i = 0; i < sections.length; i++) {
    if (currentPage.value >= sections[i].start && currentPage.value <= sections[i].end) {
      return i
    }
  }
  return 0
})
</script>

<template>
  <div v-if="!hiddenPages.includes(currentPage) && isVisible" class="fixed top-3 right-4 flex items-center gap-0.5 bg-transparent px-2 py-0.5 rounded-full z-50 transition-opacity duration-500">
    <template v-for="(section, index) in sections" :key="section.name">
      <div
        class="flex items-center gap-1"
      >
        <div
          class="w-1.5 h-1.5 rounded-full transition-all duration-300"
          :class="index <= currentSection ? 'bg-green-600 scale-110' : 'bg-gray-600'"
        />
        <span
          class="text-[10px] transition-all duration-300"
          :class="index === currentSection ? 'text-gray-200 font-bold' : 'text-gray-500'"
        >
          {{ section.name }}
        </span>
      </div>
      <div
        v-if="index < sections.length - 1"
        class="w-3 h-px transition-all duration-300"
        :class="index < currentSection ? 'bg-green-600' : 'bg-gray-600'"
      />
    </template>
  </div>
</template>
