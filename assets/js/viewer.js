


//timer countdown
// const skip = document.getElementById("#skip-ad");
const timertext= document.getElementById("#countdown");
let initLoad=30;
let previousnum=30;
$("#countdown").on('load').html("30");
let counttext = countdown.textContent;
console.log(counttext);

let Arr = [30];

let countnum = parseInt(counttext, 10);

let loadtimerint = null;

var loadtimer = 2;

loadtimerint = setInterval(function(){
  if(loadtimer <= 0){
    loadtimer = 0;
  }else{
    loadtimer-=1;
    console.log(loadtimer);
  }
}, 1000);


//array for
const pics = [
  'url("https://thumbs.gfycat.com/IckySmoggyBedlingtonterrier-max-1mb.gif")',
  'url("https://media2.giphy.com/media/Jpp7PITfyT21PFoKAo/giphy.gif")',
  'url("https://media2.giphy.com/media/Jpp7PITfyT21PFoKAo/giphy.gif")',
  'url("https://64.media.tumblr.com/15d0f8c8a3723165b5f48c705d5f31d3/0f9726a5095b11cd-aa/s540x810/d84b4f56eb8184a0047de8c59c54f49f9f107a12.gif")',
  'url("https://i.gifer.com/jPW.gif")',
  'url("https://gifdb.com/images/high/mr-magoo-1960-vintage-commercial-d15cqaq3jp4qcb22.gif")',
  'url("https://thumbs.gfycat.com/HelplessSkeletalCardinal-max-1mb.gif")',
  'url("https://i.gifer.com/2VV0.gif")',
  'url("https://thumbs.gfycat.com/ExemplaryBrownAmmonite-max-1mb.gif")',
  'url("https://thumbs.gfycat.com/FragrantFineBlackpanther-max-1mb.gif")',
  'url("https://thumbs.gfycat.com/SnivelingTemptingBaldeagle-max-1mb.gif")',
  'url("https://thumbs.gfycat.com/CluelessGenuineClownanemonefish-max-1mb.gif")',
  'url("https://c.tenor.com/R0rsThA3xIcAAAAM/foodbeard-alright.gif")',
  'url("https://thumbs.gfycat.com/SingleHonestAssassinbug-max-1mb.gif")'
];

function showImage() {
            var a = Math.floor(Math.random() * pics.length);
            var img = pics[a];
            $("#adviewer").css({"background-image":img,"background-size":"cover"});
        }

window.addEventListener('load', function(){
  var a = Math.floor(Math.random() * pics.length);
  var img = pics[a];
  $("#adviewer").css({"background-image":img,"background-size":"cover"});
});


$(function () {
  $("#skip-button").click(function(){
    console.log("something")
    countnum=countnum*2;
    Arr.push(countnum);
    loadtimer=2;
    loadtimerint;
    showImage();
  });
});



window.addEventListener('load', function(){
  setInterval(function(){
    countnum -=1;
    countdown.textContent = countnum;

    if(countnum <= 0){
      countnum= Math.max(...Arr);
    }
  }, 1000);
});

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}


function sendCookie(){
  window.addEventListener("message", function(event) {
    if (event.origin !== "/viewer.html") return;
    event.source.postMessage(document.cookie, event.origin);
  });
}





//this puts the title into div blocks
var searchinput = document.getElementById("#searchy");
var searchquery = null;

changerslt = function(){
    var currentwindow =window.location.pathname;
    console.log(currentwindow);
    if(currentwindow!='/C:/Users/socce/Sites/critical-web-design/dig245-final/index.html'){
      window.location.assign('index.html');
      console.log('True!');
    }

}
const titleArr = ['holder shift tile','The American City CONTROLLED by Canada',
'People Who Somehow Survived Freak Accidents',
'Trump Disappears into Seclusion; Greene Says She Would\'ve "won" Jan. 6 Riot: A Closer Look',
'I 3D-printed a Glock to See How Far Homemade Guns Have Come',
'1 DAY IN NORTH KOREA (Overwhelming Experience)',
'Minecraft, But I Can\'t Leave This Chunk (#1)',
'Impractical Jokers:Funniest Fast Food Moments (Mashup)|truTV',
'100 Kids vs 1 Pro',
'Lionel Messi and Aregentina OVERPOWER Croatia in the 2022 FIFA World Cup semifinal | Every Angle'
];


$(function(){
  $("#search-addon").click(function(){
    event.preventDefault();

    titleArr.shift();
    let searchquery = $("#searchy").val();
    setCookie('searchquery',searchquery,7);
    searchquery = getCookie('searchquery');
    console.log(searchquery);
    titleArr.unshift(searchquery);
    console.log(titleArr);
    str="";
    for (var i = 0; i<10; i++){
      str += `<div class="rowrslt row" class="parent" class="d-flex align-items-center" id="results${i}" role='button'>
      <div class="col-lg-1"></div>
      <div class="thmbn col-lg-2" id="thmbn${i}" >
      </div>
      <div class="col-lg-4 title" id="title${i}">
      ${titleArr[i]}</div>
      <div class="col-lg-5"></div>
      </div>`
    }
    changerslt();

})


$("#searchy").keypress(function(event){
  if(event.keyCode=="13"){
    event.preventDefault();
    titleArr.shift();
    let searchquery = $("#searchy").val();
    setCookie('searchquery',searchquery,7);
    titleArr.unshift(searchquery);
    console.log(titleArr);
    str="";
    for (var i = 0; i<10; i++){
      str += `<div class="rowrslt row" class="parent" class="d-flex align-items-center" id="results${i}" role='button'>
      <div class="col-lg-1"></div>
      <div class="thmbn col-lg-2" id="thmbn${i}" >
      </div>
      <div class="col-lg-4 title" id="title${i}">
      ${titleArr[i]}</div>
      <div class="col-lg-5"></div>
      </div>`
    }
    changerslt();

    }
  });
});








changevwr = function(){
  window.location.assign('viewer.html');

}

$(".rowrslt").click(changevwr);
$("#titles").on("load", function(){
  console.log(searchquery);
});
