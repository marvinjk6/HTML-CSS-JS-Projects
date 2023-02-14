const body = document.querySelector("body")

body.addEventListener("mousemove", (event)=> {
    let x = event.offsetX
    let y = event.offsetY

    // create and add the span at the body in the positions of the mouse
    const span = document.createElement("span")
    span.style.left = x + "px"
    span.style.top = y + "px"
    body.appendChild(span)

    // different sizes
    const size = Math.random() * 100
    span.style.width = size + "px"
    span.style.height = size + "px"

    // remove the span element after 4 seconds
    setTimeout(() => {
        span.remove()
    }, 4000);
})