var tentativas = 0
var numeroSecreto = parseInt(Math.random() * 10)
document.getElementById("button-answer").addEventListener("click",game)

function game() {
        if (numeroSecreto == Number(document.getElementById("resposta").value)) {
        alert("Acertou")
        const inputField = document.querySelector(".guess-input")
        inputField.value = ""
        document.querySelector(".game-fieldset").style.display = "none"
        document.querySelector(".result02").style.display = "flex"

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
        document.querySelector(".game-fieldset").style.display = "none"
        document.querySelector(".result01").style.display = "flex"
        }
}

console.log(numeroSecreto)

