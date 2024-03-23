// javascript; // Test the functionality in the console // Click Create with valid

// inputdocument.querySelector('[data-create]').click();

// Click Create with invalid input document.querySelector('input').value = 0;
// document.querySelector('[data-create]').click();

// Click Destroy document.querySelector('[data-destroy]').click(); -->

// ШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШ
// function destroyBoxes() {
//   const boxesContainer = document.getElementById('boxes');
//   boxesContainer.innerHTML = '';
//   // Сброс размеров ящиков обратно на 30x30 пикселей
//   const defaultBoxSize = 30;
//   const defaultBoxMargin = 5;
//   const boxes = document.querySelectorAll('.box');

//   boxes.forEach(box => {
//     box.style.width = `${defaultBoxSize}px`;
//     box.style.height = `${defaultBoxSize}px`;
//     box.style.margin = `${defaultBoxMargin}px`;
//   });
// }
// OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
// Проверка работы функций
createBoxes(5); // Создаст 5 квадратов
destroyBoxes(); // Удалит все квадраты
