let km = prompt('Inserisci il numero di km da percorrere');
let age = prompt('Inserisci il numero di anni');
let output = document.getElementById('output');
let price = km * 0.21;
let message;

if(age < 18){
  price = price / 100 * 20;
}else if(age > 65){
  price = price / 100 * 40;
}

price = price.toFixed(2);

message = 'Il prezzo totale del viaggio è ' + price;

output.innerHTML = message;