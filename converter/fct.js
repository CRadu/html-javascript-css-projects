function convert(){
	var inputValue = document.getElementById("inputValue").value;
	var units = document.getElementById("unit").value;
	var result = 0;
	
	switch(units){
		case "0": result = Number(inputValue) * 1.60934;
		break;
		case "1": result = Number(inputValue) * 2.54;
		break;
		case "2": result = (Number(inputValue) - 32) * 5/9;
		break;
	}
	
	return document.getElementById("result").innerHTML = result;
}