var ind 

var bSave = document.querySelector(".btnSave"); // . é para classe, # é para ID
bSave.addEventListener("click", function(event){
	event.preventDefault();
    localStorage.setItem("nota", nota.value);
    ind = localStorage.length + 1;
    localStorage.setItem("nota" + ind, nota.value);
    
    var liNota = document.createElement("p");
    liNota.setAttribute("id", "anotacao");
    liNota.classList.add("note");
    document.body.appendChild(liNota);
    document.getElementById("principal").appendChild(liNota);
        
    var txt = document.createElement("textarea");
    txt.classList.add("txtarea");
    txt.textContent = nota.value;
    document.body.appendChild(txt);
    liNota.appendChild(txt);

    var bEdit = document.createElement("button");
    bEdit.addEventListener("click", edtNote);
    bEdit.classList.add("btnEdit");
    	var addId = document.getElementsByClassName("btnEdit"); 
 		for (var i = 0; i < addId.length; i++) 
        addId[i].id = "btnEdit" + (i ++);
    bEdit.textContent = "Edit";
    document.body.appendChild(bEdit);
    liNota.appendChild(bEdit);

    var bDel = document.createElement("button");
    bDel.addEventListener("click", delNote);
    bDel.classList.add("btnDel");
    	var addId = document.getElementsByClassName("btnDel"); 
 		for (var i = 0; i < addId.length; i++) 
        addId[i].id = "btnDel" + (i ++);    
    bDel.textContent = "Delete";
    document.body.appendChild(bDel);  
    liNota.appendChild(bDel);
    
    //default post it color
    var setColor = document.getElementById("color");
    setColor.addEventListener("click", event);
    var color = document.getElementById("color").value;
    document.bgColor = color; 	
    	var addId = document.getElementsByClassName("note"); 
 		for (var i = 0; i < addId.length; i++) //não coloque nada nesta linha
 		addId[i].id = "anotacao" + (i + 1);
    document.getElementById("anotacao" + i).style.backgroundColor = color;
});

function delNote(del){    
    var rmId = document.getElementsByClassName("note"); 
 		for (var i = 0; i < rmId.length; i++) //Remove
 		rmId[i].id = "anotacao" + (i + 1);
    note = document.getElementById("anotacao" + i);
    note.remove();
    localStorage.removeItem();
};
function edtNote(edt){
    var content  = document.querySelector(".txtarea").textContent;
    nota.value = content;
    
    var btCheck = document.createElement("button");
    document.body.appendChild(btCheck);
    btCheck.classList.add("btnCheck");
    btCheck.textContent = "Save Edit";
    document.getElementById("noteType").appendChild(btCheck);
    btCheck.addEventListener("click", btnCheck);
    bSave.classList.add("invisible");


};
function btnCheck(check){
	event.preventDefault();
	bSave.classList.add("visible");
	setEdit.textContent = nota.value;
	document.body.appendChild(setEdit);
	
	var getCheck = document.getElementsByClassName("btnCheck");
	getCheck.remove();
};