<template>
  <div class="messages">
    <ChatMessage
      v-for="(msg, index) in messages"
      :key="index"
      :text="msg.text"
      :mine="msg.mine"
    />
  </div>
</template>

<script setup>
import ChatMessage from './ChatMessage.vue'
defineProps({
  messages: Array
})
</script>

<style scoped>
.messages {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: var(--messages-bg);
}
</style>

