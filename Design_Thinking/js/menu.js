var menu = document.getElementsByClassName("menu")[0];
var openMenuButton = document.getElementById("open-menu-button");
var closeMenuButton = document.getElementById("close-menu-button");

openMenuButton.addEventListener("click", () => {
    menu.classList.add("active");
});

closeMenuButton.addEventListener("click", () => {
    menu.classList.remove("active");
});