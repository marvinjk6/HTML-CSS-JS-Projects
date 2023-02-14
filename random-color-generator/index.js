/* ====  code to create the color-conatiner divs inside the container  ==== */

const container = document.querySelector(".container")

for (let i = 0; i < 32; i++) {
    const colorContainer = document.createElement("div")
    colorContainer.classList.add("color-container")

    container.appendChild(colorContainer)
    
}

/* ============ function to return the code color  ============== */

function randomColor() {
    const chars = "0123456789abcdef"
    const colorCodeLength = 6
    let colorCode = ""

    for (let i = 0; i < colorCodeLength; i++) {
        //  random number
        const randomNum = Math.floor(Math.random() * chars.length)
        
        colorCode += chars.substring(randomNum, randomNum + 1)
        //     console.log(colorCode, randomNum)
    }
    return colorCode
}

randomColor()

/*==  function to generate background colors and the text with hexadecimal code == */

// returns a NodeList
const colorContainer = document.querySelectorAll(".color-container")
//      console.log(colorContainer);


function generateColors() {
    colorContainer.forEach(colorCont => {
        const newColorCode = randomColor()
        //  console.log(newColorCode)
        colorCont.style.backgroundColor = "#" + newColorCode
        colorCont.innerHTML = "#" + newColorCode
    })
}

generateColors()