<template>
  <div class="message-input">
    <input
      v-model="text"
      type="text"
      placeholder="Введите сообщение..."
      @keyup.enter="send"
    />
    <button @click="send">Отправить</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const text = ref('')
const emit = defineEmits(['send'])

const send = () => {
  if (!text.value.trim()) return
  emit('send', text.value)
  text.value = ''
}
</script>

<style scoped>
.message-input {
  padding: 16px;
  display: flex;
  gap: 8px;
  background: var(--input-bg);
}

.message-input input {
  flex: 1;
  padding: 10px;
  border-radius: 6px;
  border: 2px solid var(--message-mine-bg);
  color: var(--message-mine-bg);
  background: var(--input-field-bg);
  transition: all 0.2s;
}

.message-input input::placeholder {
  color: var(--message-mine-bg);
  opacity: 0.6;
}

.message-input input:focus {
  outline: none;
  background: var(--input-field-bg-focus);
}

.message-input button {
  padding: 10px 16px;
  border-radius: 6px;
  border: none;
  background: var(--message-mine-bg);
  color: white;
  cursor: pointer;
  transition: background 0.2s;
}

.message-input button:hover {
  background: #2563eb;
}
</style>



