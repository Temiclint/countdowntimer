var start = document.getElementsByClassName("start")[0];

var datePicked = document.getElementById("inp");

var rDays = document.getElementsByClassName('daysl')[0];
var rHours = document.getElementsByClassName('hoursl')[0];
var rMinutes = document.getElementsByClassName('minutesl')[0];
var rSeconds = document.getElementsByClassName('secondsl')[0];


var pDays =document.getElementsByClassName('daysp')[0];
var pHours =document.getElementsByClassName('hoursp')[0];
var pMinutes =document.getElementsByClassName('minutesp')[0];
var pSeconds =document.getElementsByClassName('secondsp')[0];



start.addEventListener('click', function() {


setInterval(calcTimeDiff, 1000)


})


function calcTimeDiff(){
  const datePickedInSec = new Date(datePicked.value).getTime();
  var getTodayDate =  new Date().getTime();

  var seconds =  (datePickedInSec - getTodayDate)/1000;

  var d = Math.floor(seconds / (3600*24));
  var h = Math.floor(seconds % (3600*24) / 3600);
  var m = Math.floor(seconds % 3600 / 60);
  var s = Math.floor(seconds % 3600 % 60);


  rDays.innerText = d;
  rHours.innerText = h;
  rMinutes.innerText = m;
  rSeconds.innerText = s;

  if(d <= 1 ){
    pDays.innerText = "Day";
  } else{
      pDays.innerText ="Days"
  };

  if (h<= 1){
    pHours.innerText = "Hour";
  }else{
    pHours.innerText ="Hours"
  };

  if(m  <= 1){
  pMinutes.innerText ="Minute";
}else{
  pMinutes.innerText = "Minutes"
};

  if(s <= 1){
    pSeconds.innerText = "Second";
  }else{
    pSeconds.innerText ="Seconds"
  };




}
