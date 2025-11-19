<template>
  <div
    :class="['chat-message', { mine }]"
  >
    {{ text }}
  </div>
</template>

<script setup>
defineProps({
  text: String,
  mine: Boolean
})
</script>

<style scoped>
.chat-message {
  max-width: 240px;
  padding: 10px;
  border-radius: 12px;
  background: var(--message-bg);
  color: var(--message-color);
  align-self: flex-start;
  transition: all 0.2s;
}
.chat-message.mine {
  align-self: flex-end;
  background: var(--message-mine-bg);
  color: var(--message-mine-color);
}
</style>

