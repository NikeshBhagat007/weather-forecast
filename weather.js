
//Complete the Weather API Backend part using openweathermap api
const apikey ="9d4c7c028372b5aa4899a7debd4dbae2";
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
//const DaysNames = ["Sunday","Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturaday"];
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var n = weekday[d.getDay()];
//var msg  = document.getElementById("msg");
document.getElementById("btn").addEventListener("click",getData);
function getData()
{
    var input = document.getElementById("city").value;
    document.getElementById("cityname").innerHTML = input;
    var date = new Date();
    console.log(date.getDay() + date.getMonth());
    document.getElementById("date").innerHTML = weekday[date.getDay()] + " " + date.getDay() + " " +monthNames[date.getMonth()] + " " + date.getFullYear();
     const url =`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apikey}&units=metric`;

     fetch(url)
     .then(response => response.json())
     .then(data =>{
         console.log(data);
         document.getElementById("temp").innerHTML = data.main.temp +"°c";
         document.getElementById("weather").innerHTML = data.weather[0].main;
         document.getElementById("hi-low").innerHTML = data.main.temp_min +"°c" + "/"+ data.main.temp_min +"°c";
         console.log(data.name.temp_min);
       //  var icon ="https://api.openweathermap.org/img/w/"+data.weather[0].icon+".png";
         //document.getElementById("icon").src =icon;
     })
     .catch(() =>{
         msg.textContent = "Please search for a valid city";
     });
}