function startTime(){
  var today = new Date();
  var hh = today.getHours();
  var mm = today.getMinutes();
  var ss = today.getSeconds();
  document.getElementById('clock').innerHTML = hh + ":" + mm + ":" + ss;
  var timeoutId = setInterval(startTime, 500);
}

