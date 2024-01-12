
let toastBox = document.getElementById('toastBox');

let successmsg = '<i class="fa-solid fa-circle-check"></i> Successfully submitted';
let errormsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error !';
let invalidmsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid Input,check again !';

function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes('error')){
        toast.classList.add('error');
    }
    else if(msg.includes('invalid')){
        toast.classList.add('invalid');
    }

    setTimeout(() =>{
        toast.remove();
    },6000)
}