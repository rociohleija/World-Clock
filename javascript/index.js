function updateTime(){
 let houstonElement= document.querySelector("#houston");
 if (houstonElement) {
    let houstonDateElement= houstonElement.querySelector(".date");
    let houstonTimeElement= houstonElement.querySelector(".time");
    let houstonTime = moment().tz("US/Central");

houstonDateElement.innerHTML = houstonTime.format("MMMM Do YYYY");
houstonTimeElement.innerHTML = houston.format(
    "h:mm:ss [<small>]A[</small>]"
  ); 
}
  let kualaLumpurElement= document.querySelector("#kuala-lumpur");
  if (kualaLumpurElement) {
     let kualaLumpurDateElement= kualaLumpurElement.querySelector(".date");
     let kualaLumpurTimeElement= kualaLumpurElement.querySelector(".time");
     let kualaLumpurTime = moment().tz("Asia/Kuala_Lumpur");

kualaLumpurDateElement.innerHTML = kualaLumpur.format("MMMM Do YYYY");
kualaLumpurTimeElement.innerHTML = kualaLumpurTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
 }
} 
function updateCity(event) {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
      "A"
    )}</small></div>
    </div>
    `;
  }
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity); 

