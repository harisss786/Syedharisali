const items = document.querySelectorAll('.item');
const targetContainer = document.querySelector('.target-container');
const resetButton = document.getElementById('reset-button');
const successMessage = document.getElementById('success-message');

items.forEach(item => {
  item.addEventListener('dragstart', dragStart);
});

targetContainer.addEventListener('dragover', dragOver);
targetContainer.addEventListener('drop', drop);

resetButton.addEventListener('click', resetContainers);

function dragStart(event) {
  event.dataTransfer.setData('text/plain', event.target.innerText);
}

function dragOver(event) {
  event.preventDefault();
  targetContainer.classList.add('drag-over');
}

function drop(event) {
  event.preventDefault();
  targetContainer.classList.remove('drag-over');
  const data = event.dataTransfer.getData('text/plain');
  const newItem = document.createElement('div');
  newItem.classList.add('item');
  newItem.textContent = data;
  targetContainer.appendChild(newItem);
  successMessage.style.display = 'block';
}

function resetContainers() {
  targetContainer.innerHTML = '<h2>Target Container</h2>';
  successMessage.style.display = 'none';
}