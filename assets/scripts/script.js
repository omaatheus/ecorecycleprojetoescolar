const fixedHeader = document.querySelector(".j_fixed_header");
const mobileMenu = document.querySelector(".j_mobile_menu");
const mobileMenuIcon = document.querySelector(".j_mobile_menu_icon");
const arrowUp = document.querySelector(".j_arrowup");

// TOGGLE FIXED HEADER
window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        fixedHeader.style.backgroundColor = "black";
        fixedHeader.style.padding = "10px 0";

        arrowUp.style.display = "flex";

        setTimeout(() => {            
            arrowUp.style.opacity = 1;
            arrowUp.style.bottom = "20px";
        }, 10);
    } else {
        fixedHeader.style.backgroundColor = "";
        fixedHeader.style.padding = "";

        arrowUp.style.opacity = "";
        arrowUp.style.bottom = "";

        setTimeout(() => {
            arrowUp.style.display = "";
        }, 300);
    }
})

// MOBILE MENU
mobileMenuIcon.addEventListener("click", () => {
    mobileMenu.style.left = mobileMenu.offsetLeft !== 0 ? 0 : "";

    mobileMenuIcon.style.transform = "translateY(-100%)";
    mobileMenuIcon.style.opacity = 0;

    setTimeout(() => {
        mobileMenuIcon.classList.toggle("fa-bars");
        mobileMenuIcon.classList.toggle("fa-xmark");

        mobileMenuIcon.style.transform = "";
        mobileMenuIcon.style.opacity = "";
    }, 300);
})

// SCROLL UP WITH ARROW
arrowUp.addEventListener("click", () => {
    window.scrollTo(0, 0);
})