export const ele = {
  categoryList: document.querySelector('.categories'),
  menu: document.querySelector('#menu'),
  nav: document.querySelector('nav')
}

export function renderCategories(data, active) {
  ele.categoryList.innerHTML = '';
  data.forEach((category) => {
    const categoryItem = document.createElement("li");

    categoryItem.dataset.id = category.id;

    categoryItem.classList = category.id == active && "active";

    categoryItem.innerHTML = `
          <i class="${category.icon}"></i>
          <span>${category.title}</span>
      `;
    ele.categoryList.appendChild(categoryItem);
  });
}
