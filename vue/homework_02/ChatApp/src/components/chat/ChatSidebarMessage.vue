<template>
  <div
    :class="['sidebar-message', { active: selected }]"
    @click="$emit('select')"
  >
    <div class="name">{{ name }}</div>
    <div class="last">{{ lastMessage }}</div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  lastMessage: String,
  selected: Boolean
})
</script>

<style scoped>
.sidebar-message {
  padding: 10px;
  background: #222;
  border-radius: 8px;
  margin-bottom: 6px;
  cursor: pointer;
  transition: background 0.2s;
}
.sidebar-message:hover {
  background: #333;
}
.sidebar-message.active {
  background: #3b82f6;
}
.name {
  font-weight: bold;
}
.last {
  font-size: 12px;
  opacity: 0.6;
}
</style>

