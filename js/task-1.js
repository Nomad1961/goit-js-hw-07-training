const categoriesList = document.querySelectorAll('#categories .item');

console.log(`У списку ${categoriesList.length} категорій:`);

categoriesList.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryItemsCount = category.querySelectorAll('ul li').length;

  console.log(`- Категорія: ${categoryName}`);
  console.log(`- Кількість елементів: ${categoryItemsCount}`);
});
