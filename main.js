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
    liNota.textContent = nota.value;
    document.body.appendChild(liNota);
    document.getElementById("principal").appendChild(liNota);
   	 
   	 	var addId = document.getElementsByClassName("note"); 
 		for (var i = 0; i < addId.length; i++) 
 		addId[i].id = "anotacao" + (i + 1);

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
    
var bdelAll = document.querySelector(".delAll");
bdelAll.addEventListener("click", function(event){
	event.preventDefault();
	console.log("kk");
	//montar a estrutura do apagar tudo
});

function delNote(event){    
    var rmId = document.getElementsByClassName("note"); 
 		for (var i = 0; i < rmId.length; i++) //Remove
 		rmId[i].id = "anotacao" + (i + 1);
    note = document.getElementById("anotacao" + i);
    note.remove();
    localStorage.removeItem("nota" + 1);
}
function edtNote(event){
    var content  = document.querySelector(".nota").textContent;
}
