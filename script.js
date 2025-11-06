// variável global onde vamos guardar toda a operação
var valores = "";

// Adiciona números ou texto ao visor
function addVal(i) {
    valores += i;
    document.getElementById("resultados").value = valores;
}


// Adiciona operadores ou limpa o visor
function addOperation(x) {
    if (x === "C") {
        valores = "";
    } else {
        valores += x;
    }
    document.getElementById("resultados").value = valores;
}


// Calcula o resultado usando eval()
function calculate() {
    try {
        valores = eval(valores);
        document.getElementById("resultados").value = valores;
    } catch (error) {
        document.getElementById("resultados").value = "Erro";
        valores = "";
    }
}

