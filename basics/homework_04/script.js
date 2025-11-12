const addBtn = document.getElementById("add-btn");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const emptyMsg = document.getElementById("empty-msg");

const noteModal = document.getElementById("note-modal");
const noteText = document.getElementById("note-text");
const saveNoteBtn = document.getElementById("save-note");
const cancelNoteBtn = document.getElementById("cancel-note");

const settingsBtn = document.getElementById("settings-btn");
const settingsPanel = document.getElementById("settings-panel");
const closeSettingsBtn = document.getElementById("close-settings");
const darkModeToggle = document.getElementById("dark-mode-toggle");

function updateEmptyMsg() {
  emptyMsg.style.display = todoList.children.length === 0 ? "block" : "none";
}

function addTask(text) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;
  span.classList.add("task-text");

  li.appendChild(span);

  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
    updateEmptyMsg();
  });

  li.appendChild(delBtn);
  todoList.appendChild(li);
  updateEmptyMsg();
}

addBtn.addEventListener("click", () => {
  if (todoInput.value.trim() !== "") {
    addTask(todoInput.value);
    todoInput.value = "";
  }
});

addBtn.addEventListener("dblclick", () => {
  noteModal.style.display = "flex";
});

cancelNoteBtn.addEventListener("click", () => {
  noteModal.style.display = "none";
  noteText.value = "";
});

saveNoteBtn.addEventListener("click", () => {
  if (noteText.value.trim() !== "") {
    addTask(noteText.value);
    noteText.value = "";
    noteModal.style.display = "none";
  }
});

settingsBtn.addEventListener("click", () => {
  settingsPanel.style.display = "flex";
});

closeSettingsBtn.addEventListener("click", () => {
  settingsPanel.style.display = "none";
});

darkModeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

updateEmptyMsg();










