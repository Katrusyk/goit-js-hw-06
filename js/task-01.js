const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.childNodes;

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((categoryItem) => {
  if (categoryItem.nodeType === 1) {
    const categoryName = categoryItem.querySelector('h2').textContent;
    const categoryElements = categoryItem.querySelector('ul').children.length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryElements}`);
  }
});
