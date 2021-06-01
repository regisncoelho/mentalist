var tentativas = 0
var numeroSecreto = parseInt(Math.random() * 10)
document.getElementById("button-answer").addEventListener("click",game)
document.getElementById("button-restart01").addEventListener("click",restart01)
document.getElementById("button-restart02").addEventListener("click",restart02)

function restart01 () {
    document.querySelector(".game-fieldset").classList.toggle("invisible")
    document.querySelector(".result02").classList.toggle("visible")
    document.querySelector(".button-restart01").classList.toggle("visible")
    numeroSecreto = parseInt(Math.random() * 10)
    tentativas = 0
}

function restart02 () {
    document.querySelector(".game-fieldset").classList.toggle("invisible")
    document.querySelector(".result01").classList.toggle("visible")
    document.querySelector(".button-restart02").classList.toggle("visible")
    numeroSecreto = parseInt(Math.random() * 10)
    tentativas = 0
}

function game() {
        if (numeroSecreto == Number(document.getElementById("resposta").value)) {
        alert("Acertou")
        const inputField = document.querySelector(".guess-input")
        inputField.value = ""
        document.querySelector(".game-fieldset").classList.toggle("invisible")
        document.querySelector(".result02").classList.toggle("visible")
        document.querySelector(".button-restart01").classList.toggle("visible")

        } else if (Number(document.getElementById("resposta").value) > numeroSecreto) {
        alert("O número secreto é menor")
        const inputField = document.querySelector(".guess-input")
        inputField.value = ""
        tentativas++

        } else if (Number(document.getElementById("resposta").value) < numeroSecreto) {
        alert("O número secreto é maior")
        const inputField = document.querySelector(".guess-input")
        inputField.value = ""
        tentativas++
        }

        if (tentativas >= 3) {
        alert("Suas tentativas acabaram. O número secreto era " + numeroSecreto)
        document.querySelector(".game-fieldset").classList.toggle("invisible")
        document.querySelector(".result01").classList.toggle("visible")
        document.querySelector(".button-restart02").classList.toggle("visible")
        }
}