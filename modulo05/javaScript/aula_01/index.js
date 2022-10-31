const button = document.querySelector('input');
const paragraph = document.querySelector('p');

button.addEventListener('click', updateButton);

function updateButton() {
  if (button.value === 'On ') {
    button.value = 'Off ';
    paragraph.textContent = 'Olá Mundo!';
  } else {
    button.value = 'On ';
    paragraph.textContent = 'Olá Console! ';
  }
}