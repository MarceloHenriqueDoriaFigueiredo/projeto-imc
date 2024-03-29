const button = document.querySelector("#calcular");
button.addEventListener('click', imc);

function imc(){
    const name = document.querySelector("#nome").value;
    const peso = document.querySelector("#peso").value;
    const altura = document.querySelector("#altura").value;
    const resultado = document.querySelector("#result");

    if (name !== "" && peso !== "" && altura !== "") {
        const valorIMC =(peso / (altura * altura)).toFixed(2);
        let classificacao = ""

        if (valorIMC < 18.5) {
            classificacao = "Abaixo do peso"
        } else if (valorIMC < 25) {
            classificacao = "Peso ideal"
        } else if (valorIMC < 30) {
            classificacao = "Levemente acima do peso"
        } else if (valorIMC < 35) {
            classificacao = "Obseidade grau 1"
        } else if (valorIMC < 40) {
            classificacao = "Obesidade grau 2"
        } else {
            classificacao = "Obesidade grau 3. Cuidado"
        }

        resultado.textContent = `${name} seu IMC é ${valorIMC} e você esta ${classificacao}`;
        resultado.classList = "msg";
        
        setTimeout(() => {
            resultado.textContent = "";
            resultado.classList = "";
        }, 5000);
        return;
    };
};