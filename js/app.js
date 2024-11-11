const hamburger_icon = document.querySelector(".hamburger-icon");
const mobile_menu = document.querySelector(".mobile-menu")

hamburger_icon.addEventListener("click", ()=>{
    mobile_menu.classList.toggle("toggleMobileMenu")
})