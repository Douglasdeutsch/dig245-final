
/* javascript */

//function for the countdown timer
var timeleft = 10;
const originaltimeleft=timeleft
var adTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(adTimer);
  }
  document.getElementById("countdown").value = originaltimeleft - timeleft;
  timeleft -= 1;
}, 1000);

while(timeleft>0){
  function => downloadTimer
}

$( "#skip-button" ).click(function(){
  let timeleft=originaltimeleft*2;
}

//function for getting the html page from youtube
var fetch = require('node-fetch');

const express = require('express');
const app = express();
const port = 3000;

async function reloadData(){
  await fetch("https://www.youtube.com/results?search_query=cats")
  .then(response => {
    return response.text();
  })
  .then(text=>{
    console.log(text)
  });
}

(async function(){
  await reloadData();
});




//function for finding the title from the youtube html page that was retrieved
//
//
var filename = "youtube-cats.html";

// import node's built-in FileSystem lib
var fs = require('fs');

// read the test file
fs.readFile(filename, 'utf8', function(err, html) {
	if (err) console.error(err); // exit early if errors

	// test
	// console.log("the html string =", html);

	// matchAll returns all matches + capture groups
	var titleArr = [...html.matchAll("title":{"runs":[{"text":)];
	// ... but there are two matches for each url
	//var urlArr = [...html.matchAll(/"text">(.*)<span/gi)];

	// loop through the object returned
	for (let i = 0; i < titleArr.length; i++) {
		console.log(titleArr[i][1]);
	}
