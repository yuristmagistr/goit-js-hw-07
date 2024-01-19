const quantityCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${quantityCategories.length}`);

quantityCategories.forEach((category) => {
  const title = category.querySelector('h2'). textContent;
  const quantity = category.querySelectorAll('li').length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${quantity}`);
});

