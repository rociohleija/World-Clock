function updateTime(){
  let sanLuisPotosíElement= document.querySelector("#san-luis-potosí");
  if (sanLuisPotosíElement) {
     let sanLuisPotosíDateElement= sanLuisPotosíElement.querySelector(".date");
     let sanLuisPotosíTimeElement= sanLuisPotosíElement.querySelector(".time");
     let sanLuisPotosíTime = moment().tz("Mexico/BajaSur");
 
 sanLuisPotosíDateElement.innerHTML = sanLuisPotosíTime.format("MMMM Do YYYY");
 sanLuisPotosíTimeElement.innerHTML = sanLuisPotosíTime.format(
     "h:mm:ss [<small>]A[</small>]"
   ); 
 }
  

 let suvaElement= document.querySelector("#suva");
 if (suvaElement) {
    let suvaDateElement= suvaElement.querySelector(".date");
    let suvaTimeElement= suvaElement.querySelector(".time");
    let suvaTime = moment().tz("Pacific/Fiji");

suvaDateElement.innerHTML = suvaTime.format("MMMM Do YYYY");
suvaTimeElement.innerHTML = suvaTime.format(
    "h:mm:ss [<small>]A[</small>]"
  ); 
}
  let kualaLumpurElement= document.querySelector("#kuala-lumpur");
  if (kualaLumpurElement) {
     let kualaLumpurDateElement= kualaLumpurElement.querySelector(".date");
     let kualaLumpurTimeElement= kualaLumpurElement.querySelector(".time");
     let kualaLumpurTime = moment().tz("Asia/Kuala_Lumpur");

kualaLumpurDateElement.innerHTML = kualaLumpurTime.format("MMMM Do YYYY");
kualaLumpurTimeElement.innerHTML = kualaLumpurTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
 }
 let valenciaElement= document.querySelector("#valencia");
 if (valenciaElement) {
    let valenciaDateElement= valenciaElement.querySelector(".date");
    let valenciaTimeElement= valenciaElement.querySelector(".time");
    let valenciaTime = moment().tz("CET");

valenciaDateElement.innerHTML = valenciaTime.format("MMMM Do YYYY");
valenciaTimeElement.innerHTML = valenciaTime.format(
   "h:mm:ss [<small>]A[</small>]"
 );
}
} 
function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current"){
      cityTimeZone = moment.tz.guess();
    }
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
    <a href="/">All cities</a>
    `;
  } 
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity); 

