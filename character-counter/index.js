const textareaElement = document.getElementById("textarea")

const totalCounterEl = document.getElementById("total-counter")

const remainingCounterEl = document.getElementById("remaining-counter")

textareaElement.addEventListener("keyup", () => {
    updateCounter()
})

function updateCounter() {
    totalCounterEl.innerText = textareaElement.value.length
    
    remainingCounterEl.innerText = textareaElement.getAttribute("maxLength") - textareaElement.value.length
}

// we invoke this function here to show the initial content of remaining-counter = 50 and total-counter = 0 
updateCounter()