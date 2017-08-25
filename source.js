function input(){

	var string = document.getElementById('input1').value;
	var times = document.getElementById('input2').value;
	var output = repeatStringNumTimes(string, times);
	document.getElementById('output').innerHTML= output;


}

function repeatStringNumTimes(string, times) {
  var repeatedString = "";
  while (times > 0) {
    repeatedString += string;
    times--;
  }
  return repeatedString;
}
repeatStringNumTimes("abc", 3);