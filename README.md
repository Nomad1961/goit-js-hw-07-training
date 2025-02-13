# goit-js-hw-07

<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8" />
 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 <title>Create and Destroy Boxes</title>
 <style>
  #boxes {
   display: flex;
   flex-wrap: wrap;
  }
  .box {
   width: 30px;
   height: 30px;
   margin: 5px;
  }
 </style>
</head>
<body>
 <!-- <script src="../js/task-6.js" defer type="module"></script> -->
 <script src="../js/task-6.js" defer></script>
 <div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
 </div>

<div id="boxes"></div>

<script>   function getRandomHexColor() {    return
`#${Math.floor(Math.random() * 16777215) .toString(16) .padStart(6, '0')}`;   }

function createBoxes(amount) {    const boxesContainer =
document.getElementById('boxes');    boxesContainer.innerHTML = '';

for (let i = 0; i < amount; i++) {     const box =
document.createElement('div');     box.classList.add('box');     box.style.width
= `${30 + i * 10}px`;     box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);    }   }

function destroyBoxes() {    const boxesContainer =
document.getElementById('boxes');    boxesContainer.innerHTML = '';

const defaultBoxSize = 30;    const defaultBoxMargin = 5;    const boxes =
document.querySelectorAll('.box');

boxes.forEach(box => {     box.style.width = `${defaultBoxSize}px`;
    box.style.height = `${defaultBoxSize}px`;     box.style.margin =
`${defaultBoxMargin}px`;    });   }

document.querySelector('[data-create]').addEventListener('click', () => {
   const input = document.querySelector('input');    const amount =
parseInt(input.value);

if (amount >= 1 && amount <= 100) {     createBoxes(amount);     input.value =
'';    }   });

document.querySelector('[data-destroy]').addEventListener('click', () => {
   destroyBoxes();   });  </script>

</body>
</html>
<!-- ШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШШ -->

Код выглядит в целом правильным, но есть несколько мелких проблем, которые можно
исправить.

Функция destroyBoxes() должна быть объявлена до того, как она используется в
скрипте. Это вызовет ошибку "ReferenceError: destroyBoxes is not defined".

В функции destroyBoxes(), вы используете переменные defaultBoxSize и
defaultBoxMargin, которые не объявлены в этой функции. Вам нужно объявить эти
переменные перед их использованием.

Вот исправленный код:

Copy

<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8" />
 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 <title>Create and Destroy Boxes</title>
 <style>
  #boxes {
   display: flex;
   flex-wrap: wrap;
  }
  .box {
   width: 30px;
   height: 30px;
   margin: 5px;
  }
 </style>
</head>
<body>
 <!-- <script src="../js/task-6.js" defer type="module"></script> -->
 <script src="../js/task-6.js" defer></script>
 <div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
 </div>

 <div id="boxes"></div>

 <script>
  function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
  }

  function createBoxes(amount) {
   const boxesContainer = document.getElementById('boxes');
   boxesContainer.innerHTML = '';

   for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
   }
  }

  function destroyBoxes() {
   const boxesContainer = document.getElementById('boxes');
   boxesContainer.innerHTML = '';

   const defaultBoxSize = 30;
   const defaultBoxMargin = 5;
   const boxes = document.querySelectorAll('.box');

   boxes.forEach(box => {
    box.style.width = `${defaultBoxSize}px`;
    box.style.height = `${defaultBoxSize}px`;
    box.style.margin = `${defaultBoxMargin}px`;
   });
  }

  document.querySelector('[data-create]').addEventListener('click', () => {
   const input = document.querySelector('input');
   const amount = parseInt(input.value);

   if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
   }
  });

  document.querySelector('[data-destroy]').addEventListener('click', () => {
   destroyBoxes();
  });
 </script>
</body>
</html>
Обратите внимание, что я удалил дублирующийся скрипт в конце и переместил
