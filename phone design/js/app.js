'use strict'

const items = document.querySelectorAll('.item.original');
let draggedItem = null;


items.forEach(item => {
    item.onmousedown = function(event){
        draggedItem= item.cloneNode(true);
        draggedItem.style.position = 'absolute';
        const rect = item.getBoundingClientRect();
        draggedItem.style.top = rect.top + 'px';
        draggedItem.style.left = rect.left + 'px';
        draggedItem.classList.remove('original');
        document.body.append(draggedItem);
        draggedItem.oncontextmenu = rightClickHandler;
        draggedItem.onmousedown = itemHandler;
    }
});

document.onmousemove = function(e){
    if(draggedItem){
        console.log(e)
        const rect = draggedItem.getBoundingClientRect();
        draggedItem.style.top = e.clientY - rect.height/2 + 'px';
        draggedItem.style.left = e.clientX - rect.width/2 + 'px';
    }
};

document.onmouseup = function(){
    draggedItem= null;
}


function rightClickHandler(e){
    e.preventDefault()
    this.remove();
    draggedItem=null;
}

function itemHandler(){
    draggedItem = this ;
    const rect = item.getBoundingClientRect();
    draggedItem.style.top = rect.top + 'px';
    draggedItem.style.left = rect.left + 'px'; 
}

const phoneModel = document.querySelector('span');
const modeInput = document.querySelector('input');
const phone = document.querySelector('.phone');

modeInput.addEventListener('input', function(e){
    phoneModel.textContent = e.target.value;
});

const colors ={
    '1': 'black',
    '2': 'pink',
    '3': 'grey',
    '4': 'blue',
    '5': 'purple',
    '6': 'red'
};

const colorSelect = document.querySelector('#color');
let currentClass = 'black';
colorSelect.addEventListener('change',function(e){
    const value = e.target.value;
    const newColorClass = colors[value];
    phone.classList.remove(currentClass);
    phone.classList.add(newColorClass);
    currentClass = newColorClass;
})
