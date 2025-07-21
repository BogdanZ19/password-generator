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

let isHidden = ""

display1.style.setProperty('--display-hover-background-color', '#273549')
display2.style.setProperty('--display-hover-background-color', '#273549')



function getRandomChar() {
    return characters[Math.floor(Math.random() * characters.length)]
}

function generatePassword() {
    let password = ""
    for (let i = 0; i < 15; i++) {
        password += getRandomChar()
    }
    isHidden = document.getElementById("hide-check").checked
    return password
}

function copyOnClick(item) {
    let copyText = ""
    if (item.id[item.id.length - 1] == 1)
        copyText = pass1
    if (item.id[item.id.length - 1] == 2)
        copyText = pass2
    navigator.clipboard.writeText(copyText)
}


generateBtn.addEventListener("click", () => {
    pass1 = generatePassword()
    pass2 = generatePassword()

    if (isHidden) {
        display1.textContent = "***************"
        display2.textContent = "***************"
    } else {
        display1.textContent = pass1
        display2.textContent = pass2
    }

    display1.style.setProperty('--display-hover-background-color', 'gray')
    display2.style.setProperty('--display-hover-background-color', 'gray')
})


display1.addEventListener("click", () => {
    copyOnClick(display1)
})
display2.addEventListener("click", () => {
    copyOnClick(display2)
})




