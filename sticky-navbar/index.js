const navbar = document.querySelector(".navbar")
const bottomContainer = document.querySelector(".bottom-container")

console.log(bottomContainer.offsetTop)

console.log(navbar.offsetHeight)

window.addEventListener("scroll", ()=>{
    console.log(window.scrollY)

    // 50 is because of the margin bottom and top of the .text
    if(window.scrollY > bottomContainer.offsetTop - navbar.offsetHeight - 50) {
        navbar.classList.add("active")
    } else {
        navbar.classList.remove("active")
    }
})

console.log(bottomContainer)