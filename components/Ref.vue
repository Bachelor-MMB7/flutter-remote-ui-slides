<script setup>
defineProps({ n: { type: [String, Number], required: true } })
</script>

<template><span class="ref">[{{ n }}]</span></template>

<style scoped>
.ref {
  font-size: 0.85em;
  color: rgba(242, 243, 247, 0.55);
  white-space: nowrap;
}
</style>
