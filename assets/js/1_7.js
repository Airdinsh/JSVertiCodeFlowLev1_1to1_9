/*
const cons = require('cons');

Schreibe eine Funktion, die überprüft, ob an einem bestimmten Datum Wochenende ist oder nicht.
Schreibe eine Funktion und überprüfe dein Ergebnis in der Konsole.
Nutze:
Conditionals Statement.
Comparison Operators.
Funktion mit ein Parameter.
Aktuelle Datum.
getDay().
return "Weekend".
return "Arbeitstag".
Teste folgende Daten: 15.12.2019, 14.2.2001, 2.1.2020, 29.02.2020. 

// Ahmad
const istWeekend = (date) => {
    date = new Date();
    var dt = date.getDay();
    if (dt == 6 || dt == 0) {
      return "Wochenende";
    } 
  };
  */
  

// Natalie
/* 

const istWeekend = (date) => {
    date = new Date();
    var dt = date.getDay();
    if (dt == 6 || dt == 0) {
      return "Wochenende";
    } 
  }; 
*/
// corr Adriaan
const checkWeekend = date => date.getDay() == 6 || date.getDay() == 0 ? "weekend" : "workday";

console.log(checkWeekend(new Date(2019, 17, 10)));
console.log(checkWeekend(new Date()));



/* const dates = new Date(date.toString());


const checkWeekend = date => {
    return list[date.getDate + date.getMonth + date.getFullYear]
}


console.log(istWeekend("15, 12, 2019"));
console.log(istWeekend("16, 2, 2001"));
console.log(istWeekend("2, 1, 2020"));
console.log(istWeekend("29, 2, 2020"));

console.log.date.toString();

console.log.list[date.getDate + date.getMonth + date.getFullYear];

 */
