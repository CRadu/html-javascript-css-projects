var enterButton = document.getElementById("add");
var input = document.getElementById("todo");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");
// add todo to list

function inputLength(){
	return input.value.length;
}
function listLength(){
	return item.length;
}

function createListElement(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	
	function crossOut() {
		li.classList.toggle("done");
	}
	li.addEventListener("click", crossOut);
	
	var delBtn = document.createElement("button");
	delBtn.appendChild(document.createTextNode("X"));
	li.appendChild(delBtn);
	delBtn.addEventListener("click", deleteListItem);
	
	function deleteListItem(){
		li.classList.add("delete");
		
	}
}
	function addListAfterClick(){
		if(inputLength()>0){
			createListElement();
		}
	}
	function addListAfetrKeypress(e){
		if(inputLength()>0 && e.which ===13)
			createListElement();
	}
	
enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfetrKeypress);