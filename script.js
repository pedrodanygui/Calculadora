
var valores = "";


function addVal(i) {
    valores += i;
    document.getElementById("resultados").value = valores;
}



function addOperation(x) {
    if (x === "C") {
        valores = "";
    } else {
        valores += x;
    }
    document.getElementById("resultados").value = valores;
}


function calculate() {
    try {
        valores = eval(valores);
        document.getElementById("resultados").value = valores;
    } catch (error) {
        document.getElementById("resultados").value = "Erro";
        valores = "";
    }
}

