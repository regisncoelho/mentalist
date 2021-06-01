var tentativas = 0
var numeroSecreto = parseInt(Math.random() * 10)
document.getElementById("button-answer").addEventListener("click",game)
document.getElementById("button-restart01").addEventListener("click",restart01)
document.getElementById("button-restart02").addEventListener("click",restart02)

function restart01 () {
    document.querySelector(".game-fieldset").classList.toggle("invisible")
    document.querySelector(".result02").classList.toggle("visible")
    document.querySelector(".button-restart01").classList.toggle("visible")
    document.querySelector(".text-tip").innerText = ""
    numeroSecreto = parseInt(Math.random() * 10)
    tentativas = 0
}

function restart02 () {
    document.querySelector(".game-fieldset").classList.toggle("invisible")
    document.querySelector(".result01").classList.toggle("visible")
    document.querySelector(".button-restart02").classList.toggle("visible")
    document.querySelector(".text-tip").innerText = ""
    numeroSecreto = parseInt(Math.random() * 10)
    tentativas = 0
}

function game() {
        document.querySelector(".text-tip").innerText = ""
        if (numeroSecreto == Number(document.getElementById("resposta").value)) {
        const inputField = document.querySelector(".guess-input")
        inputField.value = ""
        document.querySelector(".game-fieldset").classList.toggle("invisible")
        document.querySelector(".result02").classList.toggle("visible")
        document.querySelector(".button-restart01").classList.toggle("visible")

        } else if (Number(document.getElementById("resposta").value) > numeroSecreto) {
        document.querySelector(".text-tip").innerText = "O número secreto é menor"
        const inputField = document.querySelector(".guess-input")
        inputField.value = ""
        tentativas++

        } else if (Number(document.getElementById("resposta").value) < numeroSecreto) {
        
        document.querySelector(".text-tip").innerText = "O número secreto é maior"
        const inputField = document.querySelector(".guess-input")
        inputField.value = ""
        tentativas++
        }

        if (tentativas >= 3) {
        document.getElementById("text-result01").innerText = "As tentativas acabaram."
        document.getElementById("text-result02").innerText = "O número secreto era " + numeroSecreto
        document.querySelector(".game-fieldset").classList.toggle("invisible")
        document.querySelector(".result01").classList.toggle("visible")
        document.querySelector(".button-restart02").classList.toggle("visible")
        }
}