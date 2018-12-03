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
    
    var setColor = document.getElementById("color");
    setColor.addEventListener("click", changeBackground);
});
    
function delNote(event){    
    var note = document.getElementById("anotacao")
    console.log(anotacao.length)
    note.remove();
}

function edtNote(event){
    var content  = document.querySelector(".nota").textContent;
}

function changeBackground(){
    var color = document.getElementById("color").value;
    document.bgColor = color;
    document.getElementById("anotacao").style.backgroundColor = color;
}

// var addId = document.getElementsByClassName("note"); soma os IDs
// for (var i = 0; i < addId.length; i++) {
// addId[i].id = "anotacao" + (i + 1);