// Код для проверки результатов на консоли
const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', function () {
  const trimmedValue = nameInput.value.trim();
  nameOutput.textContent = trimmedValue || 'Anonymous';
});

// Проверка на консоли
nameInput.value = 'John';
nameInput.dispatchEvent;
new Event('input');

nameInput.value = ' Alice ';
nameInput.dispatchEvent(new Event('input'));

nameInput.value = '';
nameInput.dispatchEvent(new Event('input'));
