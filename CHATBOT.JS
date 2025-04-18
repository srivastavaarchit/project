const send=document.querySelector("#send");
const inp=document.querySelector("#userInput");
const chat=document.querySelector("#chatBox");
const chatb=document.querySelector("#bo");
send.addEventListener("click",()=>{
const text=inp.value;
chat.innerHTML+= `<div id="userc">${text}</div>`;

});


