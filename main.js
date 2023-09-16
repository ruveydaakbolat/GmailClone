import { categories } from "./scripts/constants.js";
import { renderCategories, ele } from "./scripts/ui.js";

document.addEventListener("DOMContentLoaded", () => {
  renderCategories(categories, "Gelen Kutusu");
});

ele.categoryList.addEventListener("click", (event) => {

    const selected = event.target.dataset.id;

    renderCategories(categories, selected);
});

ele.menu.addEventListener('click',(e) => {
    ele.nav.classList.toggle('hide');
});