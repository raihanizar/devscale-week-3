const menus = document.querySelectorAll(".menu");
const contents = document.querySelectorAll(".content");
menus.forEach(menu => {
  menu.addEventListener("click", () => {
    const menuCategory = menu.classList.item(1);

    // hide semua content
    contents.forEach(content => {
      let contentCategory = content.classList.item(1);
      if (contentCategory === menuCategory) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });

    // munculkan lagi menu yg di-klik
    menu.classList.remove("hiden");
  })
})



