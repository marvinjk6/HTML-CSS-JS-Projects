// select the icons
const nextIcon = document.querySelector(".next")
const prevIcon = document.querySelector(".prev")

//all images - returns a NodeList,
const allImages = document.querySelectorAll("img")
console.log(allImages);

const imageContainer = document.querySelector(".image-container")

// variable to indicate the current image
let currentImg = 1

let timeout;

// adding events
nextIcon.addEventListener("click", ()=>{
    currentImg++
    clearTimeout(timeout) //clear the interval when click on the icon
    updateImage()
})

prevIcon.addEventListener("click", ()=> {
    currentImg--
    clearTimeout(timeout) //clear the interval when click on the icon
    updateImage()
})

/*====== functions that updates the images ======*/
// we need to call the function on the global scope to see the interval working
updateImage()

function updateImage() { 
    // when the currentImg be higher than the length of the NodeList we can set the currentImg to be 1 again, we be less we change it to be the allImages.length
    if(currentImg > allImages.length) {
        currentImg = 1
    } else if (currentImg < 1) {
        currentImg = allImages.length
    }
    // transform property to see the next or previous photo
    imageContainer.style.transform = `translateX(-${(currentImg - 1) * 500}px)`

    //timer for photos change every 3 seconds
    timeout = setTimeout(()=>{
        currentImg++
        updateImage()
    },3000) 
}