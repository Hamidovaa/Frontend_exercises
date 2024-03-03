'use strict'

const input= document.querySelector('input');
const main= document.querySelector('main');

input.addEventListener('keyup', function(event){

    if(event.keyCode == 13){
        let val= input.value;
        const message = document.createElement('p');
        const time= document.createElement('p');
        if(val.trim()){
            if(val[0]=== val[0].toUpperCase()){
                message.className= 'message support';
            }
            else{
                message.className= 'message user';
            }
            message.innerHTML =val;
            const date= new Date();
            time.innerHTML= date.getHours() + ':' + date.getMinutes();
            time.classList.add('time');
            message.appendChild(time);
            main.appendChild(message);
            input.value ='';
            main.scrollTop=main.scrollHeight;
        }

    }
})

function AddChat(value, classname){
    const date= new Date();

    main.insertAdjacentElement('beforeend',`
    <div class="message ${classname}">
        <p>${value}</p>
        <p class="time">${date.getHours()}:${date.getMinutes()}</p>
        </div>
        `)
}
function toggleChat() {
    let chatBox = document.getElementById("chat");
    let input = document.querySelector("input[type='text']");

    if (chatBox.style.display === "none") {
        chatBox.style.display = "block";
        input.disabled = false;
    } else {
        chatBox.style.display = "none";
        input.disabled = true;
    }
}

function closeChat() {
    let input = document.querySelector("input[type='text']");
    input.value = ""; 

    toggleChat();
}

function activateChat() {
    var chatBox = document.getElementById("chat");
    var input = document.querySelector("input[type='text']");

    chatBox.style.display = "block";
    input.disabled = false;
}