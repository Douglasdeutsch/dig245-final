var timeleft = 10;
const originaltimeleft=timeleft
var adTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(adTimer);
  }
  document.getElementById("countdown").value = originaltimeleft - timeleft;
  timeleft -= 1;
}, 1000);


$( "#skip-button" ).click(function(){
  let timeleft=originaltimeleft*2;
}
