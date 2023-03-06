function verificar() {
    var input = document.getElementById("input").value;
    var result = aceita(input) ? "Aceita" : "Recusada";
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = result;
    if (aceita(input)) {
        resultElement.classList.add("aceita");
    } else {
        resultElement.classList.remove("aceita");
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