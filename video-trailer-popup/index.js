const btn = document.querySelector("button")
const icon = document.querySelector("i")
const trailer = document.querySelector(".trailer-container")
const video = document.querySelector("video")

btn.addEventListener("click", ()=>{
    
    trailer.classList.remove("active")
})

icon.addEventListener("click", ()=> {
    trailer.classList.add("active")

    //changing the behavior of the video
    video.pause()
    video.currentTime = 0
})