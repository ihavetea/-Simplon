
window.onload = function (){


//Ecrire un programme qui permet d'afficher l'ensemble des nombres premiers compris entre 1 et n 
//n est un nombre saisie par l'utilisateur



var n = parseInt(prompt('Please input a number'));
var tab = [];


for (var limit = 1; limit < n; limit++) {
  var a = false;
  for (var i = 2; i <= limit; i++) {
    if (limit % i === 0 && i !== limit) {
      a = true;
    }
  }
  if (a === false) {
    tab.push(limit);
  }
}
console.log(tab);
}