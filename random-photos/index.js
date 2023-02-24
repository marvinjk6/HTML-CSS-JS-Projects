const imageContainer = document.querySelector(".image-container")
const button = document.querySelector(".btn")
let imageNum = 10

button.addEventListener("click", ()=>{
    for (let i = 0; i < imageNum; i++) {
        addNewImage()
    }
})

function addNewImage() {
    const newImg = document.createElement("img")
    newImg.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*3000)}`
    imageContainer.appendChild(newImg)
}