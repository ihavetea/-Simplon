window.onload = function () {



  let group = [
    {
      id: 1,
      firstname: 'II',
      lastname: 'uu',
      age: 3,
      town: 'Pa',
      country: 'Fr',
      image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FrLoeAzpIkyo%2Fhqdefault.jpg&f=1&nofb=1",
    },
    {
      id: 2,
      firstname: 'YY',
      lastname: 'TT',
      age: 1,
      town: 'Do',
      country: 'Mi',
      image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.cbc.ca%2F1.4774391.1533396046!%2FfileImage%2FhttpImage%2Fimage.jpg_gen%2Fderivatives%2F16x9_620%2Ftornado-alonsa.jpg&f=1&nofb=1",
      
    },
    {
      id: 3,
      firstname: 'RR',
      lastname: 'EE',
      age: 37,
      town: 'Re',
      country: 'La',
      image : "https://i.ytimg.com/vi/_3ySUFG9fAY/maxresdefault.jpg",
    },
  ]



for (let i = 1; i < group.length + 1; i++){

  const elem = document.querySelectorAll('article')[0].cloneNode(true);
  const body = document.querySelectorAll('body')[0];
  body.appendChild(elem)

  elem.style.display = 'flex';
  elem.style.flexDirection = 'column';
  

  document.getElementsByClassName('id')[i].textContent = group[i - 1].id
  document.getElementsByClassName('firstname')[i].textContent = group[i - 1].firstname
  document.getElementsByClassName('lastname')[i].textContent = group[i - 1].lastname
  document.getElementsByClassName('country')[i].textContent = group[i - 1].country
  document.getElementsByClassName('br')[i].textContent = group[i - 1].br
  document.getElementsByClassName('image')[i].src = group[i - 1].image
  document.getElementsByName
  
  
  
}




/*


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

*/
  }