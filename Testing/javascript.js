//Access-Control-Allow-Origin: *
//Access-Control-Allow-Origin: <origin>;
//Access-Control-Allow-Origin: null;
function loadXMLDoc() {
  var params = "text='hoooooollo'&language=en-US&enabledOnly=false";
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", 'https://languagetool.org/api/v2/check', true);
  xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhttp.setRequestHeader('Accept', 'application/json');
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  }
  xhttp.send(params);
}