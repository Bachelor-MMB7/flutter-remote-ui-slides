<script setup>
defineProps({ n: { type: [String, Number], required: true } })
</script>

<template><sup class="ref">[{{ n }}]</sup></template>

<style scoped>
.ref {
  color: rgba(242, 243, 247, 0.45);
  font-size: 0.62em;
  padding-left: 0.15em;
}
</style>
