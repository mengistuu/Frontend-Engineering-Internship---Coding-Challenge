let button = document.querySelector(".submit");
let lat = document.querySelector(".latitude");
let long = document.querySelector(".longitude");

let name = document.querySelector(".name");
let temp_cont = document.querySelector(".temp_cont");
let cloud_cont= document.querySelector(".cloud_cont");
let windSpeed_cont = document.querySelector(".windSpeed_cont");
let relHumidity_cont = document.querySelector(".relHumidty_cont");

let cloud_row = document.querySelector(".cloud");
let relHumidity_row = document.querySelector(".relHumidity");
let temp_row = document.querySelector(".temp");
let windSpeed_row = document.querySelector(".windSpeed");



button.addEventListener("click", function () {
  const api =
    "https://api.open-meteo.com/v1/forecast?latitude=" +
    lat.value +
    "&longitude=" +
    long.value +
    "&hourly=temperature_2m,relativehumidity_2m,cloudcover_mid,windspeed_120m&current_weather=true"
    fetch(api)
      .then((response) => {
        return response.json();
      })
      
      .then((data) => {
        console.log(data);
        const { cloudcover_mid,relativehumidity_2m, temperature_2m,windspeed_120m} =data.hourly;
        

        const cloud_range= cloudcover_mid.slice(6,19);
       cloud_row.replaceChildren();
        
        cloud_range.forEach(element => {

          let tableData = document.createElement("td");
          tableData.textContent =element;
          
          cloud_row.appendChild(tableData);

      })


      const relHumidity_range= relativehumidity_2m.slice(6,19);
      relHumidity_row.replaceChildren();
        
          relHumidity_range.forEach(element => {
  
            let tableData = document.createElement("td");
            tableData.textContent =element;
            relHumidity_row.appendChild(tableData)
          })


          const temp_range= temperature_2m.slice(6,19);
          temp_row.replaceChildren();
        
          temp_range.forEach(element => {
  
            let tableData = document.createElement("td");
            tableData.textContent =element;
            temp_row.appendChild(tableData)
          })

          const windSpeed_range= windspeed_120m.slice(6,19);
          windSpeed_row.replaceChildren();
        
          windSpeed_range.forEach(element => {
  
            let tableData = document.createElement("td");
            tableData.textContent =element;
            windSpeed_row.appendChild(tableData)
          })

        })


      .catch((err) => {
        //returns the error
        alert("Error Reading the cordinates, check them! " + err);
      });
});
