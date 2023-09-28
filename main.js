import { categories, mailData } from "./scripts/constants.js";
import { getDate } from "./scripts/helpers.js";
import {
  renderCategories,
  ele,
  renderMails,
  toggleModal,
} from "./scripts/ui.js";

document.addEventListener("DOMContentLoaded", () => {
  renderCategories(categories, "Gelen Kutusu");
  renderMails(mailData);
});

ele.categoryList.addEventListener("click", (event) => {
  const selected = event.target.dataset.id;

  renderCategories(categories, selected);
});

ele.menu.addEventListener("click", (e) => {
  ele.nav.classList.toggle("hide");
});

ele.createBtn.addEventListener("click", () => toggleModal(true));

ele.closeBtn.addEventListener("click", () => toggleModal(false));

ele.modalForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const reciever = e.target[1].value;
  const title = e.target[2].value;
  const message = e.target[3].value;

  if (!reciever || !title || !message) {
    alert("Lütfen bütün alanları doldurunuz...");
  } else {
    const newMail = {
      id: new Date().getTime(),
      sender: "Rüveyda",
      reciever,
      title,
      message,
      date: getDate(),
    };

    mailData.unshift(newMail);

    const strData = JSON.stringify(mailData);

    localStorage.setItem("MAILS", strData);

    renderMails(mailData);
  }
});
