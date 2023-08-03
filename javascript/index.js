function updateTime(){
 let houstonElement= document.querySelector("#houston");
 let houstonDateElement= houstonElement.querySelector(".date");
 let houstonTimeElement= houstonElement.querySelector(".time");
 let houstonTime = moment().tz("US/Central");

houstonDateElement.innerHTML = houstonTime.format("MMMM Do YYYY");
houstonTimeElement.innerHTML = houston.format(
    "h:mm:ss [<small>]A[</small>]"
  ); 
  let kualaLumpurElement= document.querySelector("#kuala-lumpur");
  let kualaLumpurDateElement= kualaLumpurElement.querySelector(".date");
  let kualaLumpurTimeElement= kualaLumpurElement.querySelector(".time");
  let kualaLumpurTime = moment().tz("Asia/Kuala_Lumpur");

kualaLumpurDateElement.innerHTML = kualaLumpur.format("MMMM Do YYYY");
kualaLumpurTimeElement.innerHTML = kualaLumpurTime.format(
    "h:mm:ss [<small>]A[</small>]"
 );
}
updateTime();
setInterval(updateTime, 1000);
