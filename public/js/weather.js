const day = document.getElementById("day")
const todaydate = document.getElementById("today_date")


const getday = ()=>{
       const time  = new Date();
       const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
       return weekDays[time.getDay()]

}

const fulldate = ()=>{
       const time = new Date();
       const date = time.getDate();
       const month = time.getMonth();
       const monthName = [
        'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
        'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
      ];
      
       return `${date} ${monthName[month]}`
}

todaydate.innerHTML =fulldate()
day.innerHTML = getday()

const city_name = document.getElementById('city_name')

// Now working on search area....
const city = document.getElementById('cityName');
const sub = document.getElementById('submitbtn')
const temp = document.getElementById('temp');
const temp_status  = document.getElementById('temp_status')


const temp_statusfiller = (tempStatus)=>{
    if (tempStatus == "Sunny" ||tempStatus == "Clear" ) {
        temp_status.innerHTML =
          "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
      } else if (tempStatus == "Clouds") {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
      } else if (tempStatus == "Rainy") {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
      } 
       else if (tempStatus == "Haze") {
        temp_status.innerHTML ="HAZE" +
         "<i class='fas fa-sun-haze' style='color:#f1f2f6;'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
      }
}


const act = async(event)=>{
       event.preventDefault();
    //    if null
    if(city.value == ""){
        city_name.innerHTML="Please Write the name before Search"
        temp_status.innerHTML="";
        temp.innerHTML = "";
    }
   else{
        // fetch api and set temp and temp_status
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=863242cfb2b1d357e6093d9a4df19a4b&units=metric`)
        .then(response => response.json())
        .then(data => {
          // Use the retrieved data here
          let temps = data.main.temp;
          temp.innerHTML= temps;
           temp_statusfiller(data.weather[0].main)
           
           city_name.innerHTML = `${city.value},${data.sys.country}`
        })
        .catch(error => {
          // Handle any errors that occurred during the request
          console.error('Error:', error);
        });  
   }
}
sub.addEventListener('click',act)
