const textareaElement = document.getElementById("textarea")
const totalCounterEl = document.getElementById("total-counter")
const remainingCounterEl = document.getElementById("remaining-counter")

textareaElement.addEventListener("keyup", () => {
    updateCounter()
})

function updateCounter() {

    let textareaLength = textareaElement.value.length

    totalCounterEl.innerText = textareaLength
    remainingCounterEl.innerText = textareaElement.getAttribute("maxLength") - textareaLength
}

// we invoke this function here to show the initial content of remaining-counter = 50 and total-counter = 0 
updateCounter()