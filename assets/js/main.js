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

function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

window.addEventListener("message", function(event) {
  if (event.origin !== "/viewer.html") return;
  console.log(event.data);
});

var cookie=getCookie('searchquery');

function loadrslt(){
  if(cookie == null){
    return;
  }else{
  console.log(cookie);
  titleArr.shift();
  let searchquery=cookie;

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
  document.getElementById('titles').innerHTML = str;
  deleteCookie('searchquery');
}
}

$(window).on("load",function(){
  console.log(typeof cookie);
  console.log(cookie);
  loadrslt();
})







//this puts the title into div blocks
var searchinput = document.getElementById("#searchy");
var searchquery = null;



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
    document.getElementById('titles').innerHTML = str;


})


$("#searchy").keypress(function(event){
  if(event.keyCode=="13"){
    event.preventDefault();

    titleArr.shift();
    let searchquery = $("#searchy").val();


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
    document.getElementById('titles').innerHTML = str;

    }

});
})
changevwr = function(){
  console.log('clicked!');
  window.location.assign('viewer.html');
}
$(function(){
  $("#titles").on('click','div.rowrslt',changevwr);
})
