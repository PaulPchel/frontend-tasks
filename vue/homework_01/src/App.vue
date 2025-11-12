<template>
  <div class="calculator">
    <div class="display">{{ current || "0" }}</div>
    <div class="buttons">
      <button v-for="btn in buttons" :key="btn.label" @click="onButtonClick(btn)" :class="buttonClass(btn)">
        {{ btn.label }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const current = ref('')
const previous = ref(null)
const operator = ref(null)

const buttons = [
  { label: 'AC', type: 'control' },
  { label: '←', type: 'control' },
  { label: '%', type: 'control' },
  { label: '÷', type: 'operator' },
  { label: '7', type: 'number' },
  { label: '8', type: 'number' },
  { label: '9', type: 'number' },
  { label: '×', type: 'operator' },
  { label: '4', type: 'number' },
  { label: '5', type: 'number' },
  { label: '6', type: 'number' },
  { label: '-', type: 'operator' },
  { label: '1', type: 'number' },
  { label: '2', type: 'number' },
  { label: '3', type: 'number' },
  { label: '+', type: 'operator' },
  { label: '±', type: 'control' },
  { label: '0', type: 'number' },
  { label: '.', type: 'number' },
  { label: '=', type: 'equal' },
]

function onButtonClick(btn) {
  if (btn.type === 'number') {
    current.value += btn.label
  } else if (btn.type === 'operator') {
    if (current.value) {
      operator.value = btn.label
      previous.value = current.value
      current.value = ''
    }
  } else if (btn.label === '=') {
    calculate()
  } else if (btn.label === 'AC') {
    clearAll()
  } else if (btn.label === '±') {
    if (current.value) current.value = (parseFloat(current.value) * -1).toString()
  } else if (btn.label === '%') {
    if (current.value) current.value = (parseFloat(current.value) / 100).toString()
  } else if (btn.label === '←') {
    current.value = current.value.slice(0, -1)
  }
}

function clearAll() {
  current.value = ''
  previous.value = null
  operator.value = null
}

function calculate() {
  const prev = parseFloat(previous.value)
  const curr = parseFloat(current.value)
  if (isNaN(prev) || isNaN(curr)) return

  let result = 0
  switch (operator.value) {
    case '+': result = prev + curr; break
    case '-': result = prev - curr; break
    case '×': result = prev * curr; break
    case '÷': result = curr !== 0 ? prev / curr : 'Ошибка'; break
  }

  current.value = result.toString()
  previous.value = null
  operator.value = null
}

function buttonClass(btn) {
  return {
    btn: true,
    operator: btn.type === 'operator',
    control: btn.type === 'control',
    equal: btn.type === 'equal',
    active: btn.type === 'operator' && operator.value === btn.label,
  }
}
</script>

<style scoped>
.calculator {
  width: 360px;
  margin: 40px auto;
  padding: 20px;
  border-radius: 25px;
  background: black;
  color: white;
  font-family: system-ui, sans-serif;
}

.display {
  font-size: 48px;
  text-align: right;
  margin-bottom: 15px;
  padding: 10px;
  overflow-x: auto;
  background: #111;
  border-radius: 10px;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.calculator button {
  height: 70px;
  width: 70px;
  border-radius: 50%;
  font-size: 24px;
  background: #333;
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, transform 0.1s, filter 0.2s;
}

.calculator button.operator {
  background: orange;
}

.calculator button.control {
  background: #a5a5a5;
  color: black;
}

.calculator button.equal {
  background: orange;
}

.calculator button.active {
  filter: brightness(1.3);
}
</style>




