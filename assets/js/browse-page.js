//this puts the title into div blocks
let str ="";
for (var i = 0; i< titleArr.length; i++){
  str += `<div class=title id="title${i}"> ${titleArr[i]}</div>`
}
document.getElementById('titles').innerHTML = str;
