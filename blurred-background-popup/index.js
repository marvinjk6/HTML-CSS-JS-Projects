const btnContainer = document.querySelector(".btn")
const closeIcon = document.querySelector("i")
const container = document.querySelector(".container")
const popup = document.querySelector(".popup-container")


btnContainer.addEventListener("click", ()=>{
    container.classList.add("active")
    popup.classList.remove("active")
})

closeIcon.addEventListener("click", ()=> {
    container.classList.remove("active")
    popup.classList.add("active")
})