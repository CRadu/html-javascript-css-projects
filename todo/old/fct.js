
var x = 1;
var arr = ["Todo-s","________"];

//get todo from html

function getTodo(){
	arr.push(document.getElementById("todo").value);
	alert("added "+ todo);
	localStorage.setItem("TodoList", JSON.stringify(arr));
}
console.log(arr);

// est display array elements
function display_array()
{
   var e = "<hr/>";   
    
   for (var y=0; y<arr.length; y++)
   {
     e += "Element " + y + " = " + arr[y] + "<br/>";
   }
   document.getElementById("showArr").innerHTML = e;
}

//popolate table with array elements
function tableDisplay(){
let table = document.createElement('table');
table.insertRow();
for(let cell of arr){
		let newCell = table.rows[table.rows.length-1].insertCell();
		newCell.textContent = cell;
		
		for(let row of arr){
			table.insertRow();
	
	}
}
document.body.appendChild(table);
console.log(table);
};
