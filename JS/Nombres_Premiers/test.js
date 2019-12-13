
/*

if (a % b == 0)
ca veut dire concretement :
si a est divisible par b 

par exemple

4%2 = 0
car 4/2 = 2, reste 0 donc 4 est divisible par 2;

10%3 = 1
car 10/3 = 3, reste 1 donc 10 n est pas divisible par 3;

10%6 = 4
c1ar 10/6 = 1, reste 4 donc 10 n est pas divisible par 6;

*/

// THIS RET

window.onload = function () {

var n = parseInt(prompt('Please input isItPrime number'));
var tab = [];


for (var checkedNumber = 1; checkedNumber < n; checkedNumber++) {


  var isItPrime = true;


  for (var allNumbersBeforeCheckedNumber = 2; allNumbersBeforeCheckedNumber <= checkedNumber; allNumbersBeforeCheckedNumber++) {
    if (checkedNumber % allNumbersBeforeCheckedNumber === 0 && allNumbersBeforeCheckedNumber !== checkedNumber) {
      isItPrime = false;
    }
  }

  if (isItPrime === true) {
    tab.push(checkedNumber);
  }
}
console.log(tab);
alert(tab);
}

