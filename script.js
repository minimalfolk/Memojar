// DOM Elements
const form = document.getElementById('memory-form');
const memoryList = document.getElementById('memories');

// Fetch memories
function getMemories() {
  return JSON.parse(localStorage.getItem('memories')) || [];
}

// Save memory
function saveMemory(memory) {
  const memories = getMemories();
  memories.push(memory);
  localStorage.setItem('memories', JSON.stringify(memories));
}

// Display memories
function displayMemories() {
  const memories = getMemories();
  memoryList.innerHTML = '';
  memories.forEach((memory) => {
    const memoryCard = document.createElement('div');
    memoryCard.className = 'memory-card';
    memoryCard.innerHTML = `
      <p><strong>Date:</strong> ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</p>
      <h3>${memory.topic}</h3>
      <p><strong>Category:</strong> ${memory.category}</p>
      <p>${memory.details}</p>
    `;
    memoryList.appendChild(memoryCard);
  });
}

// Form Submission
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const memory = {
    category: document.getElementById('memory-category').value,
    topic: document.getElementById('memory-topic').value,
    details: document.getElementById('memory-details').value,
  };
  saveMemory(memory);
  form.reset();
  displayMemories();
});

// Initialize Memories
displayMemories();
