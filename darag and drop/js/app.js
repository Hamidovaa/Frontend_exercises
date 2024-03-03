'use strict'

const dragElements = document.querySelectorAll('.draggable')
const dropElements = document.querySelectorAll('.dropable')

dragElements.forEach(item =>{
    item.addEventListener('dragstart', function(e){
        e.dataTransfer.setData('icon', e.target.id);

    });
    // item.addEventListener('dragstart', function(e){});
    // item.addEventListener('dragend', function(e){});
    // item.addEventListener('dragover', function(e){});
    // item.addEventListener('dragleave', function(e){});
})

dropElements.forEach(item =>{
    item.addEventListener('dragover', function(e){
        e.preventDefault();
        e.target.classList.add('draggable-hover')
    })
    item.addEventListener('dragleave', function(e){
        e.preventDefault();
        e.target.classList.remove('draggable-hover')
    })
    item.addEventListener('drop', function(e){
        e.preventDefault();
        let dragData = e.dataTransfer.getData('icon');
        let dropData = e.target.getAttribute('data-icon');

        if(dragData=== dropData){
            const dragEl = document.getElementById(dragData);
            // e.target.setAttribute('draggable', 'false');
            e.target.style.backgroundColor = dragEl.style.color;
            e.target.classList.remove('draggable-hover');
            dragEl.style.opacity= '0.5'
            dragEl.style.cursor= 'not-allowed'
            dragEl.setAttribute('draggable', 'false');
            e.target.children[0].textContent =''
            e.target.insertAdjacentHTML('afterbegin', `<i class="fa-solid fa-${dragData}"></i>`)
        }
    })
})

