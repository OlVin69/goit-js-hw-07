const ulCategories = document.querySelector("#categories");

const categoryItems = document.querySelectorAll("li.item");
console.log(`Number of categories : ${categoryItems.length}`);

categoryItems.forEach((element) => {
    const categoryTitle = element.firstElementChild;
    const categoryList = element.lastElementChild;
    const categoryListCount = categoryList.children.length;
    console.log(`Category : ${categoryTitle.textContent}`);
    console.log(`Elements : ${categoryListCount}`);
})

// categoryItems.forEach((element) => {
//     const categoryTitleText = element.querySelector("h2").textContent;
//     const categoryListCount = element.querySelectorAll("ul li").length;
//     console.log(`Category : ${categoryTitleText}`);
//     console.log(`Elements : ${categoryListCount}`);
// })


// const firstCategoryTitle = document.querySelector("h2");
// console.log(`Category : ${firstCategoryTitle.textContent}`);

// const firstCategoryList = firstCategoryTitle.nextElementSibling;
// console.log(`Elements : ${firstCategoryList.children.length}`);
 
// const firstCategory = document.querySelector(".item");

// const secondCategory = firstCategory.nextElementSibling;

// const secondCategoryTitle = secondCategory.firstElementChild;
// console.log(`Category : ${secondCategoryTitle.textContent}`);

// const secondCategoryList = secondCategoryTitle.nextElementSibling;
// console.log(`Elements : ${secondCategoryList.children.length}`);

// const lastCategory = ulCategories.lastElementChild;

// const lastCategoryTitle = lastCategory.firstElementChild;
// console.log(`Category : ${lastCategoryTitle.textContent}`);

// const lastCategoryList = lastCategoryTitle.nextElementSibling;
// console.log(`Elements : ${lastCategoryList.children.length}`);