const nav = document.querySelector("#nav-id")
const burguerOpen = document.querySelector("#open")
const burguerClosed = document.querySelector("#close")
const shadow = document.querySelector("#shadow")

burguerOpen.addEventListener("click", () => {
    nav.classList.add("visible")
    shadow.classList.add("visible")
})

burguerClosed.addEventListener("click", () => {
    nav.classList.remove("visible")
    shadow.classList.remove("visible")
})

// function toggleNavVisibility() {
//     if (window.innerWidth >= 1000) {
//         nav.classList.add("visible")
//     }
// }

// toggleNavVisibility()

// window.addEventListener("resize", toggleNavVisibility)
