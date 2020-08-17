const inputs = document.querySelectorAll('.input');

function focusFunc(){
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}

function removeFunc(){
    let parent = this.parentNode.parentNode;
    if(this.value === '')
    parent.classList.remove('focus');
}


inputs.forEach(input => {
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', removeFunc);
});