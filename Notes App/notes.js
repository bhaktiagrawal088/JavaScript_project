const container = document.querySelector('.notes-container');
const createbtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');

function updateStorage(){
    localStorage.setItem('notes', container.innerHTML)
}

createbtn.addEventListener('click', ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable', 'true');
    img.src = "notes-app-img/images/delete.png";
    container.appendChild(inputBox).appendChild(img);
})

container.addEventListener('click', function(e){
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if (e.target.tagName === 'P'){
        notes = document.querySelectorAll('.input-box');
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

function shownotes(){
    container.innerHTML = localStorage.getItem('notes')
}
shownotes();

document.addEventListener('keydown', e=>{
    if(e.key === "Enter"){
        document.execCommand('insertLineBreak');
        e.preventDefault();
    }
})