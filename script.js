function stats() {

var input=document.getElementById('PortTxtBox');
var inputSpace=input.value; 

countSent=0;
countWord=0;
avgWdperSen=0;
totalSpc=0;


  for (var i = 0; i > inputSpace.length; i++) {
  if (inputSpace.substr(i,1) === "." || inputSpace.substr(i,1) === "!" || inputSpace.substr(i,1) === "?") {countSent++;

    }
  if (inputSpace.substr(i,1) === ' ' || inputSpace.substr(i,1) === '.' || inputSpace.substr(i,1) === "!" || inputSpace.substr(i,1) === "?") {countWord++;

    }
    if (inputSpace.substr(i,1) === ' ') {totalSpc++;

    }
  }
  document.getElementById("countSen").value = countSent;
  document.getElementById("countWd").value = countWord;
  document.getElementById("avgWdperSen").value= countWord/countSent;
  document.getElementById("totalSpc").value= totalSpc;
}