


function clockTime(){
  var time = new Date();
  var hour = time.getHours();
  var min = time.getMinutes();
  var sec = time.getSeconds();
  document.getElementById("clock").innerHTML = hour + ":" + min + ":" + sec;
  setTimeout(function(){clockTime()}, 1000);
}
