let verifica = document.getElementById("verifica");
let parolaInversa = invertiParola(parola);

verifica.addEventListener("click", function(){
    let parola = document.getElementById("parola").value;
    var parolaInversa = invertiParola(parola);

    if(parola == parolaInversa){
    document.getElementById("risultatoPalindromo").innerText = "La parola inserita è palindroma";
    } else {
    document.getElementById("risultatoPalindromo").innerText = "La parola inserita non è palindroma";
}
} );
function invertiParola(parola){
  var parolaInversa = '';

  var i = parola.length - 1;

  while (i >= 0) {
    parolaInversa += parola[i];
    i--;
  }

  return parolaInversa;
}
