window.onload = function () {



  let group = [
    {
      id: 1,
      firstname: 'II',
      lastname: 'uu',
      age: 3,
      town: 'Pa',
      country: 'Fr',
    },
    {
      id: 2,
      firstname: 'YY',
      lastname: 'TT',
      age: 1,
      town: 'Do',
      country: 'Mi',
    },
    {
      id: 3,
      firstname: 'RR',
      lastname: 'EE',
      age: 37,
      town: 'Re',
      country: 'La',
    },
  ]



for (let i = 0; group.length; i++){

  const elem = document.querySelectorAll('article')[0].cloneNode(true);
  elem.style.display = flex;
  elem.getElementByClassName('id').innerText = "111"
}







  // ajouter le contenu de l'utilisateur

  // ajouter le clone dans le DOM



  for (let i = 0; i < group.length; i++) {

    const elem = document.querySelectorAll('article')[0].cloneNode(true);

    let test = Object.keys(group[i])
    console.log(test);


    //console.log(test.length);
    elem.style.display = "flex";

    for (let x = 0; x < test[i].length; x++) {
      //    document.appendChild(elem);
      //  this.console.log(elem)
      var varvar = document.createElement('div')
      var app = elem.appendChild(varvar)
      app.innerHTML = (test[i][x])
    //  elem.appendChild(diva)
     // elem.querySeinnerText = (group[i][x]);
console.log(group[i][x])
      varvar.innerText = group[i][x]

     // console.log(group[i][x])

      //   elem.querySelector('.firstname').innerText = group[i].firstname;
      //  elem.querySelector('.lastname').innerText = group[i].lastname;
      // elem.querySelector('.age').innerText = group[i].age;
      //elem.querySelector('.town').innerText = group[i].town;
      //elem.querySelector('.country').innerText = group[i].country;
    }


  }
}