export const ele = {
  categoryList: document.querySelector(".categories"),
  menu: document.querySelector("#menu"),
  nav: document.querySelector("nav"),
  mailsArea: document.querySelector(".mails"),
  createBtn: document.querySelector(".create"),
  closeBtn: document.querySelector('.close-modal'),
  modal: document.querySelector(".modal-wrapper"),
  modalForm: document.querySelector(".modal-wrapper form")
  
};

export function renderCategories(data, active) {
  ele.categoryList.innerHTML = "";
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

export function renderMails(mailData) {
  if (!mailData) return;

  const html = mailData.map(
    (mail) => `
  <div class="mail">
    <div class="info">
        <input type="checkbox" />
        <i class="bi bi-star-fill"></i>
        <b>${mail.sender}</b>
    </div>
    <div class="content">
        <p class="title">${mail.title.slice(0, 30) + "..."}</p>
        <p class="text">${mail.message.slice(0, 35) + "..."}</p>
    </div>
    <p class="time">${mail.date}</p>
  </div>
  `
  );

  ele.mailsArea.innerHTML = html.join(" ");
}

export function toggleModal(willOpen) {
  ele.modal.style.display = willOpen ? "grid" : "none";
}
