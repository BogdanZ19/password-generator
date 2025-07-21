const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
    "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h",
    "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0",
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^",
    "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".",
    "?", "/"]

let display1 = document.querySelector("#display-1")
let display2 = document.querySelector("#display-2")
let generateBtn = document.querySelector("#generate-btn")

let pass1 = ""
let pass2 = ""

function getRandomChar() {
    return characters[Math.floor(Math.random() * characters.length)]
}

function generatePassword() {
    let password = ""
    for (let i = 0; i < 15; i++) {
        password += getRandomChar()
    }
    return password
}

function copyOnClick(item) {
    let copyText = item.textContent
    navigator.clipboard.writeText(copyText)
    
}


generateBtn.addEventListener("click", () => {
    display1.textContent = generatePassword()
    display2.textContent = generatePassword()
})


display1.addEventListener("click", () => {
    copyOnClick(display1)
})
display2.addEventListener("click", () => {
    copyOnClick(display2)
})



//1 2 3 4 5
//0 1 2 3 4

