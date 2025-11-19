<script setup>
import { ref, computed } from 'vue'
import Sidebar from './components/chat/Sidebar.vue'
import Messages from './components/chat/Messages.vue'
import MessageInput from './components/chat/MessageInput.vue'

const chats = ref([
  { id: 1, name: 'Группа А', lastMessage: '', messages: [] },
  { id: 2, name: 'Frontend', lastMessage: '', messages: [] },
])

const selectedChatId = ref(chats.value[0].id)
const theme = ref('light')

const selectedChat = computed(() =>
  chats.value.find(c => c.id === selectedChatId.value)
)

const sendMessage = (text) => {
  selectedChat.value.messages.push({ text, mine: true })
  selectedChat.value.lastMessage = text
}

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme.value)
}
</script>

<template>
  <div class="chat-app" :class="theme" style="display: flex; height: 100vh">
    <Sidebar
      :chats="chats"
      :selected-id="selectedChatId"
      @select-chat="selectedChatId = $event"
    />
    <div style="display: flex; flex-direction: column; flex: 1">
      <div style="padding: 8px; text-align: right">
        <button class="theme-toggle" @click="toggleTheme">
          {{ theme === 'light' ? 'Dark' : 'Light' }}
        </button>
      </div>
      <Messages :messages="selectedChat.messages" />
      <MessageInput @send="sendMessage" />
    </div>
  </div>
</template>

<style>
:root[data-theme='light'] {
  --messages-bg: #fff;
  --input-bg: #f2f2f2;
  --input-text-color: #000;
  --message-bg: #ddd;
  --message-color: #000;
  --message-mine-bg: #3b82f6;
  --message-mine-color: #fff;
  --input-field-bg: #e0e7ff;
  --input-field-bg-focus: #dbeafe;
}

:root[data-theme='dark'] {
  --messages-bg: #1e1e1e;
  --input-bg: #2c2c2c;
  --input-text-color: #fff;
  --message-bg: #333;
  --message-color: #fff;
  --message-mine-bg: #2563eb;
  --message-mine-color: #fff;
  --input-field-bg: #1f2937;
  --input-field-bg-focus: #374151;
}

.theme-toggle {
  background: transparent;
  border: 2px solid var(--message-mine-bg);
  border-radius: 6px;
  padding: 6px 12px;
  color: var(--message-mine-bg);
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
}
.theme-toggle:hover {
  background: var(--message-mine-bg);
  color: white;
}
</style>



