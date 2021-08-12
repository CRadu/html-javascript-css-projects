function calculateResult(){
var a = document.getElementById("fValue").value;
var b = document.getElementById("sValue").value;
var result = 0;
var sign = document.getElementById("operationSelector").value;

switch(sign){
	
	case "0":  result = a-b;
	break;
	case "1": result = Number(a)+Number(b); 
	break;
	case "2": result = a*b; 
	break;
	case "3":  result = a/b; 
	break;
	case "4":  result = a%b; 
	break;
	default: result = "err";
	break;
}

return document.getElementById("result").innerHTML = result;
}