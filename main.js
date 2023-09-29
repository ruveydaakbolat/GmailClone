import { categories } from "./scripts/constants.js";
import { getDate } from "./scripts/helpers.js";
import {
  renderCategories,
  ele,
  renderMails,
  toggleModal,
} from "./scripts/ui.js";

const strData = localStorage.getItem("MAILS");
let mailData = JSON.parse(strData);

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

    toggleModal(false);

    renderMails(mailData);
  }
});

ele.mailsArea.addEventListener("click", updateMail);

function updateMail(e) {
  const mail = e.target.parentElement;
  const id = mail.dataset.id;

  if (
    e.target.id === "delete" &&
    window.confirm("Maili silmek istiyor musunuz?")
  ) {
    const filtred = mailData.filter((i) => i.id !== Number(id));

    localStorage.setItem("MAILS", JSON.stringify(filtred));

    mail.remove();
  }

  if (e.target.id === "star") {
    const like_id = Number(mail.parentElement.dataset.id);

    const found = mailData.find((i) => i.id === Number(like_id));

    const updated = { ...found, starred: !found.starred };

    mailData = mailData.map((mail) => (mail.id === like_id ? updated : mail));

    localStorage.setItem("MAILS", JSON.stringify(mailData));

    renderMails(mailData);
  }
}
