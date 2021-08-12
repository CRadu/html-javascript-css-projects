const noteList = [];

function addNewNote(){
	var newNote = document.getElementById("newNote").value;
	noteList.push(newNote);
	document.getElementById("newNote").value = "";
}

function showNotesList(){
	var count = 0;
	table = document.createElement("table");
	row = table.insertRow();
	delButton = document.createElement("Button");
	delButton.innerHTML = "X";
	delButton.onclick = deleteNote();
	
	
	for(var i = 0; i<noteList.length; i++){	
		var cell = row.insertCell();
		count +=1;
		cell.innerHTML =count + " " + noteList[i] + " del " + cell.appendChild(delButton);
		
		var next = i+1;
		
		
		if(next!==noteList.length){
			row = table.insertRow();
		}
	}
	document.getElementById("buildTable").appendChild(table);
}

function deleteNote(){
	//noteList.splice(count-1);
}