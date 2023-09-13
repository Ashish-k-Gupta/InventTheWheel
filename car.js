




const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    
    const visiblity = nav.getAttribute("data-visible");
    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
    console.log(navToggle.getAttribute('aria-expanded'));

})












// const btn = document.getElementById("menu-toggle");
// const lines = btn.querySelectorAll(".line");
// const cls = { open: "open", close: "close" };
// let btnClass = cls.open;

// btn.addEventListener("click", () => {
//   if (btn.classList.contains(cls.open)) {
//     btn.classList.remove(btnClass);
//     btnClass = cls.close;
//   } else if (btn.classList.contains(cls.close)) {
//     btn.classList.remove(btnClass);
//     btnClass = cls.open;
//   }

//   void btn.offsetWidth;
//   btn.classList.add(btnClass);
// });
