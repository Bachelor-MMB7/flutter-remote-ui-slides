<script setup>
import { computed, ref, watch } from 'vue'
import { useNav } from '@slidev/client'

const { currentPage } = useNav()

// Seiten auf denen der Zeitstrahl ausgeblendet wird
const hiddenPages = [1, 11, 12]

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
  { name: 'Problem', start: 2, end: 2 },
  { name: 'Question', start: 3, end: 3 },
  { name: 'Approach', start: 4, end: 4 },
  { name: 'Findings', start: 5, end: 7 },
  { name: 'Contribution', start: 8, end: 8 },
  { name: 'Limits', start: 9, end: 9 },
  { name: 'Outlook', start: 10, end: 11 },
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
