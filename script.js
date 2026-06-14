let menu = document.getElementById("menu");
let links = document.querySelector(".links");

menu.addEventListener("click", () => {
    links.classList.toggle("active");
});
