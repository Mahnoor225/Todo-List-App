const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function Addtask(){
    if(inputbox.value === ''){
        alert("please Enter a valid task!");
    }
    else{
        let newEle = document.createElement("ul");
        newEle.innerHTML =  `${inputbox.value} <i class="fa-solid fa-trash"></i>`;
        listcontainer.appendChild(newEle);
        inputbox.value="";
        newEle.querySelector("i").addEventListener('click', remove);
        function remove(){
            newEle.remove()
        }
    }
}
