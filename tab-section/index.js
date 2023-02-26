const tabs = document.querySelector(".tabs")
const btn = document.querySelectorAll(".btn")
const articles = document.querySelectorAll(".content")

tabs.addEventListener("click", (event) => {
    console.log(event.target.dataset.id)
    const id = event.target.dataset.id

    if(id) {
        btn.forEach(b => {
            b.classList.remove("live")
        })
        articles.forEach(article => {
            article.classList.remove("live")
        });
        event.target.classList.add("live")

        const element = document.getElementById(id)
        element.classList.add("live")
    }
})