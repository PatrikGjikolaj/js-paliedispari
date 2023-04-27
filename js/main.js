// Palindromo

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

// Pari o dispari

let gioca = document.getElementById("gioca");
let numeroComputer = getRandomNumber(1, 5);  




gioca.addEventListener("click", function(){

let inputUtenteOk = false;

let numeroUtente = document.getElementById("numeroUtente").value;


let previsioneUtente = document.getElementById("pod").value;

let somma = (+numeroUtente)+(+numeroComputer);

let esito = getPariOrDispari(somma);

console.log(`Numero utente: ${numeroUtente} - Numero computer: ${numeroComputer}`);
  if(esito == previsioneUtente){
    document.getElementById("risultatoPod").innerText = "Hai vinto";
  }else{
    document.getElementById("risultatoPod").innerText = "Hai perso";
  }
  console.log(`Il numero ${somma} è ${esito}`);
} );

function getRandomNumber(min, max){
  return Math.floor( Math.random() * (max - min + min) + min );
}
function getPariOrDispari (numero) {
  let risultato;

  if(numero % 2 ==0){
  risultato = "pari"
}else {
  risultato = "dispari"
}
return risultato}