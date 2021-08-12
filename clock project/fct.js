//Clock
function DisplayTime(){
if (!document.all && !document.getElementById)
return
timeElement=document.getElementById? document.getElementById("clock"): document.all.tick2
var CurrentDate=new Date()
var hours=CurrentDate.getHours()
var minutes=CurrentDate.getMinutes()
var seconds=CurrentDate.getSeconds()
var DayNight="PM"
if (hours<12) DayNight="AM";
if (hours>12) hours=hours-12;
if (hours==0) hours=12;
if (minutes<=9) minutes="0"+minutes;
if (seconds<=9) seconds="0"+seconds;
var currentTime=hours+":"+minutes+":"+seconds+" "+DayNight;
timeElement.innerHTML = currentTime;
setTimeout("DisplayTime()",1000)
}
window.onload=DisplayTime

//Submit



const myMenu = document.getElementById("myMenu");
myMenu.addEventListener("submit", (event) => {
	event.preventDefault();
	
	var wake = document.getElementById("wakeList").value;
	var sleep = document.getElementById("sleepList").value;
	
	console.log(wake,sleep);
	var CurrentDate=new Date()
    var hours=CurrentDate.getHours()
	
	if(sleep < hours){
			document.getElementById("reminder").innerHTML = "Noapte buna!";
		}else {
			document.getElementById("reminder").innerHTML = "Neatza!";
		}
		
	if(wake < hours){
			document.getElementById("reminderW").innerHTML = "Dormi!";
		}else {
			document.getElementById("reminderW").innerHTML = "Trezirea!";
		}
		
	const request = new XMLHttpRequest();
		request.open("post", "clockP.php");
		request.onload = function(){
			console.log(request.responseText)
		}
});
