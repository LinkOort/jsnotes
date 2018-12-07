//local reservado para variáveis globais
var ind 

var bSave = document.querySelector(".btnSave"); // . é para classe, # é para ID
bSave.addEventListener("click", function(event){
	event.preventDefault();
    console.log(nota.value);
    localStorage.setItem("nota", nota.value);
    ind = localStorage.length + 1;
    localStorage.setItem("nota" + ind, nota.value);
    
    var liNota = document.createElement("p");
    liNota.setAttribute("id", "anotacao");
    liNota.classList.add("note");
    document.body.appendChild(liNota);
    document.getElementById("principal").appendChild(liNota);
   	 	var addId = document.getElementsByClassName("note"); 
 		for (var i = 0; i < addId.length; i++) //modifica a ordem dos IDs numericamente
         addId[i].id = "anotacao" + (i + 1);
         
    var txt = document.createElement("textarea");
    txt.classList.add("txtarea");
    txt.textContent = nota.value;
    document.body.appendChild(txt);
    liNota.appendChild(txt);

    var bEdit = document.createElement("button");
    bEdit.addEventListener("click", edtNote);
    bEdit.classList.add("btnEdit");
    bEdit.textContent = "Edit";
    document.body.appendChild(bEdit);
    liNota.appendChild(bEdit);

    var bDel = document.createElement("button");
    bDel.addEventListener("click", delNote);
    bDel.classList.add("btnDel");
    bDel.textContent = "Delete";
    document.body.appendChild(bDel);  
    liNota.appendChild(bDel);
    
    //definição das cores 
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
    note.remove(del.target.note);
    console.log(del.target.note);
    
};
function edtNote(edt){
    var content  = document.querySelector(".note").textContent;
    nota.value = content;
    
    var btCheck = document.createElement("button");
    document.body.appendChild(btCheck);
    btCheck.classList.add("btnCheck");
    btCheck.textContent = "Save Edit";
    document.getElementById("noteType").appendChild(btCheck);
};