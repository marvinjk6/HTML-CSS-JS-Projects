const input = document.querySelector(".input")
//console.log(input.checked);

const body = document.querySelector("body")

input.checked = JSON.parse(localStorage.getItem("mode"))

input.addEventListener("input", ()=> {
    updateBody()
    updateLocalStorage()
})

// we need to update the body every time the page is reloaded
updateBody()

function updateBody (){
    if(input.checked)
        body.style.backgroundColor = "black"
    else
        body.style.backgroundColor = "white"

}

function updateLocalStorage () {
    localStorage.setItem("mode", JSON.stringify(input.checked))
}