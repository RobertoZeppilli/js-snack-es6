// Snack2
// Creare un array di oggetti di squadre di calcio.Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


// 1. creo la funzione per generare un numero random
const numeroRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

var squadre = [
    {
        nome: "Milan",
        punti: 0,
        falli_subiti: 0
    },
    {
        nome: "Napoli",
        punti: 0,
        falli_subiti: 0
    },
    {
        nome: "Juventus",
        punti: 0,
        falli_subiti: 0
    },
    {
        nome: "Bologna",
        punti: 0,
        falli_subiti: 0
    },
];

console.log(squadre);

var squadreFalliSubiti = [];

for (var i = 0; i < squadre.length; i++) {


    squadre[i].punti = numeroRandom(1, 100);

    squadre[i].falli_subiti = numeroRandom(30, 80);

    var { nome, falli_subiti } = squadre[i];

    squadreFalliSubiti.push({ nome, falli_subiti });


}

// console.log(squadre);
console.log(squadreFalliSubiti);

