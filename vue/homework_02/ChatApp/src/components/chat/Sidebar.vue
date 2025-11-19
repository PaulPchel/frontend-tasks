<template>
  <aside class="sidebar">
    <h2>Чаты</h2>
    <div class="chat-list">
      <ChatSidebarMessage
        v-for="chat in chats"
        :key="chat.id"
        :name="chat.name"
        :lastMessage="chat.lastMessage"
        :selected="chat.id === selectedId"
        @select="selectChat(chat.id)"
      />
    </div>
  </aside>
</template>

<script setup>
import ChatSidebarMessage from './ChatSidebarMessage.vue'
import { ref } from 'vue'

defineProps({
  chats: Array,
  selectedId: Number
})
const emit = defineEmits(['select-chat'])

const selectChat = (id) => {
  emit('select-chat', id)
}
</script>

<style scoped>
.sidebar {
  width: 220px;
  background: #111;
  color: white;
  padding: 16px;
}
.chat-list {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
}
h2 {
  font-size: 20px;
  font-weight: bold;
}
</style>

