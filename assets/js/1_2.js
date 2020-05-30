/* Method	Description
getFullYear()	Get the year as a four digit number (yyyy)
getMonth()	Get the month as a number (0-11)
getDate()	Get the day as a number (1-31)
getHours()	Get the hour (0-23)
getMinutes()	Get the minute (0-59)
getSeconds()	Get the second (0-59)
getMilliseconds()	Get the millisecond (0-999)
getTime()	Get the time (milliseconds since January 1, 1970)
getDay()	Get the weekday as a number (0-6)
Date.now()	Get the time. ECMAScript 5. 



The getTime() method returns the number of milliseconds since January 1, 1970:

var d = new Date();
document.getElementById("demo").innerHTML = d.getTime();

*/

// In dieser Übung lernen wir das GET Date Methods[ https://www.w3schools.com/js/js_date_methods.asp ].
// Zeige die Daten wie auf Screenshot [Zeit.png] an.
// Verwende den Code aus dem Kommentarbereich um den Wochentag und Monat anzuzeigen.
//  Nutze Google um die Ergebnisse zu bekommen.

//Erstelle ein schönes CSS-Design für Deine elektronische Uhr und füge ein festes Datum ein. Dieses Design werden wir später verwenden um eine funktionierende Uhr zu bauen!
//Beispiel: Uhr.pn




var monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
    ];
    
var wocheTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
    ];


    const startTime = () => {
        // update the clock in HTML
    }

    // setIntervall() => console.log("hey), 1000")
    // setInterval(startTime, 1000);

    var getDate = function getDate() {
        var date = new Date();
        var month = date.getMonth();
        var day = date.getDate();
        var hour = date.getHours();
        var minutes = date.getMinutes();
        var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var ampm = 'pm'; // by default, it is pm
        var showDate;
        var showTime;
    
        if (hour < 10) {
            hour = '0' + hour;
        }
    
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
    
        if (hour < 12) {
            ampm = 'am';
        }
    
        if (hour > 12) {
            hour -= 12;
        }
    
        showDate = monthNames[month] + ' ' + day;
        showTime = hour + ':' + minutes + ampm;
        document.getElementById('js-date').innerHTML = showDate;
        document.getElementById('js-time').innerHTML = showTime;
        requestAnimationFrame(getDate);
    };
    
    getDate();