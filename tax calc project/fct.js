const tabel = document.getElementById("tabel");

tabel.addEventListener("submit", (event) =>{
	event.preventDefault();

	var brut = document.getElementById("brut").value;
	var deduct = document.getElementById("deduct").value;
	var pensie = document.getElementById("pensie").value;
	var sanatate = document.getElementById("sanatate").value;

if(brut==0){
	document.getElementById("rezultat").innerHTML = "Nu ai introdus BRUTUL"
}

var rezultat = document.getElementById("rezultat");
var net = document.getElementById("net");
var dp = Number(deduct) + Number(pensie);
var brutGol = Number(brut-dp);
var procent = Number(brutGol)/10;
    net = Number(brut) - Number(dp) - Number(procent) - Number(sanatate);
	document.getElementById("net").value = net + " Ron";
	
	console.log("reusit");

	console.log(dp);
	console.log(brutGol);
	console.log(procent);
	console.log(net);
	
	
});



