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