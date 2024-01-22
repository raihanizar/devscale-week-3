const menuDiv = document.querySelectorAll(".menu");
const bottomMenuDiv = document.querySelectorAll(".bottom-menu");
const contentDiv = document.querySelectorAll(".content");

menuDiv.forEach(menu => {
  menu.addEventListener("click", () => {
    // reset scroll ke atas
    document.documentElement.scrollTop = 0;

    // get kategori menu: about / works / blog / contact
    const menuCategory = menu.classList.item(1);
    console.log(menu.classList);

    // hide semua content kecuali kategori yg di-klik
    contentDiv.forEach(content => {
      let contentCategory = content.classList.item(1);
      if (contentCategory === menuCategory && content.classList.contains("hidden")) {
        content.classList.remove("hidden");
      }
      if (contentCategory !== menuCategory && !content.classList.contains("hidden")){
        content.classList.add("hidden");
      }
      console.log(content.classList)
    });
  })
})

bottomMenuDiv.forEach(bottomMenu => {
  bottomMenu.addEventListener("click", () => {
    // reset scroll ke atas
    document.documentElement.scrollTop = 0;

    // get kategori bottomMenu: about / works / blog / contact
    const bottomMenuCategory = bottomMenu.classList.item(1);

    // hide semua content kecuali kategori yg di-klik
    contentDiv.forEach(content => {
      let contentCategory = content.classList.item(1);
      if (contentCategory === bottomMenuCategory && content.classList.contains("hidden")) {
        content.classList.remove("hidden");
      } 
      if(contentCategory !== bottomMenuCategory && !content.classList.contains("hidden")) {
        content.classList.add("hidden");
      }
    });
  })
})


