let first = document.getElementById("first")
let second = document.getElementById("second")
let third = document.getElementById("third")
let box = document.getElementById("logo")
let audio = new Audio("sound.mp3")


const myfunction = () => {
    first.style.display = "none"
    setTimeout(() => {
        first.style.display = "block"
    }, 500);

    second.style.display = "none"
    setTimeout(() => {
        second.style.display = "block"
    }, 1000);

    third.style.display = "none"
    setTimeout(() => {
        third.style.display = "block"
    }, 1500);

    setTimeout(() => {
        third.style.animation = "remove_first_third 0.5s ease";
        box.style.animation = "increase_size 6s "
        setTimeout(() => {
            third.style.display = "none";
        }, 500);
    }, 2500);

    setTimeout(() => {
        second.style.animation = "remove_second 0.5s ease"
        setTimeout(() => {
            second.style.display = "none"
        }, 500);
    }, 3000);

    setTimeout(() => {
        first.style.animation = "remove_first_third 1s ease";
        setTimeout(() => {
            first.style.display = "none";
        }, 500);
    }, 3500);
}

let button = document.createElement("button")
button.innerText = "Tap to play"
button.className = "btn"
document.body.appendChild(button)
button.addEventListener("click",()=>{
    myfunction()
    audio.play()
    document.removeChild(button)
})
