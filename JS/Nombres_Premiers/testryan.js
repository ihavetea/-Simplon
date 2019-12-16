
var n = Number(prompt("Entrer un chiffre !"))
for (let x = 1; x < n; x++) {
  console.log("SALUT RYAN" + x)
  let compteur = 0

  for (let b = 2; b < x; b++) {
      if (x % b === 0) {
      compteur++;
    }
  console.log(b)
  }
  if (compteur === 0) {
    console.log(x + " est un nombre premier")
  }
}