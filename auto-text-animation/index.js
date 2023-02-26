const container = document.querySelector(".container")

const careers = ["Web developer", "Youtuber", "Personal-Trainer", "Accountant", "Professor"]

let careersIndex = 0
let characterIndex = 0

updateCareers()

function updateCareers() {
    characterIndex++
    container.innerHTML = `<h1>I am ${careers[careersIndex].slice(0,1) === "A"? "an":"a" } ${careers[careersIndex].slice(0,characterIndex)}</h1>`
    if(characterIndex === careers[careersIndex].length) {
        careersIndex++        
        // characterIndex = 0, we make this because when the next career is updated we need to show its first character
        characterIndex = 0
    }

    // to show all the carrers again
    if(careersIndex === careers.length) {
        careersIndex = 0
    }
  
    setTimeout(updateCareers, 300)
}




