const menuDiv = document.querySelectorAll(".menu");
const bottomMenuDiv = document.querySelectorAll(".bottom-menu");
const contentDiv = document.querySelectorAll(".content");
const allContentTextContinue = document.querySelectorAll(".content-text-continue");
const allContentTextMain = document.querySelectorAll(".content-text-main");

// interactivity saat pilih menu sidebar
menuDiv.forEach(menu => {
  menu.addEventListener("click", () => {
    // reset scroll ke atas
    document.documentElement.scrollTop = 0;    

    // get kategori menu: about / works / blog / contact
    const menuCategory = menu.classList.item(1);

    // hide semua content kecuali kategori yg di-klik
    contentDiv.forEach(content => {
      // clicked: hapus hidden, tambah flex & flex-col
      let contentCategory = content.classList.item(1);
      if (contentCategory === menuCategory) {
        if (content.classList.contains("hidden")) {
          content.classList.remove("hidden");
        }
        if (!content.classList.contains("flex")) {
          content.classList.add("flex");
          content.classList.add("flex-col");
        }
      }
      // not clicked: hapus flex & flex-col, tambah hidden
      if (contentCategory !== menuCategory) {
        if (!content.classList.contains("hidden")) {
          content.classList.add("hidden");
        }
        if (content.classList.contains("flex")) {
          content.classList.remove("flex");
          content.classList.remove("flex-col");
        }
      }
    });
  });
});

// interactivity saat pilih bottom menu
bottomMenuDiv.forEach(bottomMenu => {
  bottomMenu.addEventListener("click", () => {
    // reset scroll ke atas
    document.documentElement.scrollTop = 0;

    // get kategori bottomMenu: about / works / blog / contact
    const bottomMenuCategory = bottomMenu.classList.item(1);

    // hide semua content kecuali kategori yg di-klik
    contentDiv.forEach(content => {
      // clicked: hapus hidden, tambah flex & flex-col
      let contentCategory = content.classList.item(1);

      if (contentCategory === bottomMenuCategory) {
        if (content.classList.contains("hidden")) {
          content.classList.remove("hidden");
        }
        if (!content.classList.contains("flex")) {
          content.classList.add("flex");
          content.classList.add("flex-col");
        }
      }
      // not clicked: hapus flex & flex-col, tambah hidden
      if (contentCategory !== bottomMenuCategory) {
        if (!content.classList.contains("hidden")) {
          content.classList.add("hidden");
        }
        if (content.classList.contains("flex")) {
          content.classList.remove("flex");
          content.classList.remove("flex-col");
        }
      }
    });
  });
});


// toggle "baca lebih lanjut"
allContentTextContinue.forEach(contentTextContinue => {
  contentTextContinue.addEventListener("click", () => {

    // get kategori bottomMenu: about / works / blog / contact
    let textContinueCategory = contentTextContinue.classList.item(1);

    allContentTextMain.forEach(contentTextMain => {
      let textMainCategory = contentTextMain.classList.item(1);

      // clicked: hide tombol "baca lebih lanjut", show paragraf lanjutan
      if (textContinueCategory === textMainCategory) {
        // show paragraf lanjutan
        contentTextMain.classList.remove("hidden");
        contentTextMain.classList.add("flex");
        contentTextMain.classList.add("flex-col");

        // hide tombol "baca lebih lanjut"
        contentTextContinue.classList.add("hidden");
      }
    });
  });
});
