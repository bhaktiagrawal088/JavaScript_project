const inputbox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask(){
    if(inputbox.value === ''){
        alert("You must write somethings!");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);
        let span = document.createElement('Span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputbox.value = '';
    savedata();
}

listContainer.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata(){
    localStorage.setItem('data', listContainer.innerHTML)
}

function showData(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showData();