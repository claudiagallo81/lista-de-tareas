const input = document.querySelector("input")
const addBtn =document.querySelector(".btn-add")
const ul = document.querySelector("ul");
const vacio = document.querySelector(".vacio");


addBtn.addEventListener("click" , (e) =>{

e.preventDefault();
 const texto = input.value;

 if(texto !== "")
 {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent=texto;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value="";
    vacio.style.display="none";

 }
});

function addDeleteBtn()
{
const deleteBtn =document.createElement('button');

deleteBtn.textContent="X";
deleteBtn.className= "btn-delete"

deleteBtn.addEventListener("click", (e) =>{
    const item=e.target.parentElement;
    ul.removeChild(item);

    const items=document.querySelector("li");
    if(items.length === 0)
    {
        vacio.style.display = "block";
        
    }
});
return deleteBtn;
}