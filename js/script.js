function verificar() {
    let input = document.getElementById("input").value;
    let regex = /^(a|b)+cc(a|b|c)*$/;

    if (regex.test(input)) {
        let resultado = "Cadeia " + input + " aceita";
        document.getElementById("result").textContent = resultado;
        document.getElementById("result").classList.add("aceita");
    } else {
        let motivo = "";
        if (input.length < 4) {
            motivo = "A cadeia deve ter pelo menos 4 caracteres";
        } else if (!input.endsWith("cc")) {
            motivo = "A cadeia deve terminar com cc";
        } else if (!/^[abcc]*$/.test(input.slice(0, -2))) {
            motivo = "A cadeia antes de cc deve ser composta apenas por a, b ou c";
        }
        let resultado = "Cadeia recusada: " + motivo;
        document.getElementById("result").textContent = resultado;
        document.getElementById("result").classList.remove("aceita");
    }
}

function aceita(input) {
    var currentState = 0;
    for (var i = 0; i < input.length; i++) {
        var c = input.charAt(i);
        switch (currentState) {
            case 0:
                if (c == 'a' || c == 'b') {
                    currentState = 1;
                } else {
                    return false;
                }
                break;
            case 1:
                if (c == 'c') {
                    currentState = 2;
                } else if (c == 'a' || c == 'b') {
                    currentState = 1;
                } else {
                    return false;
                }
                break;
            case 2:
                if (isCharValid(c)) {
                    currentState = 3;
                } else {
                    return false;
                }
                break;
            case 3:
                if (isCharValid(c)) {
                    currentState = 3;
                } else {
                    return false;
                }
                break;
        }
    }
    return currentState == 3;
}

function isCharValid(c) {
    return c == 'a' || c == 'b' || c == 'c';
}