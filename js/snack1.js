// Snack 1
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.

var leggera = document.getElementById("leggera");

var biciDaCorsa = [
    {
        nome: "Atala",
        peso: 1
    },
    {
        nome: "Bianchi",
        peso: 15
    },
    {
        nome: "Trek",
        peso: 10
    },
    {
        nome: "Paco",
        peso: 3
    },
];

var [biciLeggera] = biciDaCorsa;

for (i = 0; i < biciDaCorsa.length; i++) {

    if (biciDaCorsa[i].peso < biciLeggera.peso) {
        biciLeggera = biciDaCorsa[i];
    }
}
var { nome } = biciLeggera;
var { peso } = biciLeggera;

leggera.innerHTML = `La bici più leggera è la ${nome} che pesa ${peso} Kg!`;


