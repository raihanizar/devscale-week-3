const menus = document.querySelectorAll(".menu");
const contents = document.querySelectorAll(".content");
menus.forEach(menu => {
     menu.addEventListener("click", () => {
        const selectedClass = menu.classList;
        const category = selectedClass.item(1);
        console.log(category);
        // // hide semua content
        // contents.forEach(content => content.classList.add("hidden"));

        // // munculkan lagi menu yg di-klik
        // menu.classList.remove("hiden");
    })
})



