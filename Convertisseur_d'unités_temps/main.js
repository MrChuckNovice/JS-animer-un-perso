const convert = document.getElementById("convert");
const secondsinMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const daysInYear = 364;

convert.addEventListener("click", function() {
   //convertion année en jour 
    let numberOfYears = document.getElementById("numberOfYears").value;
       let resultDays= numberOfYears*daysInYear;
        document.getElementById("resultDays").innerHTML = resultDays;
        console.log(resultDays);
    //convertion année en heure
       let resultHours =  resultDays*hoursInDay;
        document.getElementById("resultHours").innerHTML = resultHours;
        console.log(resultHours);
    //convertion année en minute    
       let resultMinutes = resultHours*minutesInHour;
         document.getElementById("resultMinutes").innerHTML = resultMinutes;
         console.log(resultMinutes);
    //convertion année en seconde     
       let resultSeconds = resultMinutes*secondsinMinute; 
          document.getElementById("resultSeconds").innerHTML = resultSeconds;
          console.log(resultSeconds);
})