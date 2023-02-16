// const that represents the musical instruments
const kits = ["crash", "kick", "snare", "tom"]
let container = document.querySelector(".container")

kits.forEach(kit => {
    let btn = document.createElement("button")
    btn.classList.add("btn")
    btn.innerText = kit
    btn.style.backgroundImage = "url(./img/" + kit + ".png)"
    console.log(btn.style.backgroundImage)

    // audio element
    let audio = document.createElement("audio")
    audio.src = "./sounds/" + kit + ".mp3"

    // add audio for button when click
    btn.addEventListener("click", ()=>{
        audio.play()
    })

    //add audio when digit on keyboard -> c-crash / t-tom / k-kick / s-snare
    window.addEventListener("keydown", (event) => {
        // console.log(event.key)
        // first letter of kit
        if(event.key === kit.slice(0, 1)) {
            audio.play()
            btn.style.transform = "scale(.9)" // decrease the size of the .btn
            setTimeout(()=>{
            btn.style.transform = "scale(1)" // after 100 milisseconds increase the size of btn
            }, 100)
        }
    })
    
    container.appendChild(btn)
    container.appendChild(audio)
})