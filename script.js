const title = document.getElementById("title");

window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY;
    let newSize = Math.max(1.5, 2.8 - scrollPos / 300);
    title.style.fontSize = newSize + "rem";
});
