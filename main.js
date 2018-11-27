//local reservado para variáveis globais
var ind


var bSave = document.querySelector(".btnSave"); // . é para classe, # é para ID
bSave.addEventListener("click", function(event){
	event.preventDefault();
    console.log(nota.value);
    localStorage.setItem("nota", nota.value);
    ind = localStorage.length + 1;
    localStorage.setItem("nota" + ind, nota.value);
    
    var liNota = document.createElement("li");
    liNota.classList.add("nota");
    liNota.textContent = nota.value;
    document.body.appendChild(liNota);

    var bEdit = document.createElement("button");
    bEdit.classList.add("btnEdit");
    bEdit.textContent = "Edit";
    document.body.appendChild(bEdit);

    var bDel = document.createElement("button");
    bDel.classList.add("btnDel");
    bDel.textContent = "Delete";
    document.body.appendChild(bDel);
});

