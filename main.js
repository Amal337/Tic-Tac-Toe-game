const Gameboard = {
    gameboard: []
};

function players(name){
    return {
        name: name,
        getPlayer(){
            return name
        }
    }
};

let playerX = players('x');
let playerO = players('o');
// console.log(playerX.getPlayer());

//displayController --module
//gameBoard --module

//players -- factory 

const body = document.querySelector('body');
const board = document.querySelector('.board');

//create divs 
for(let i = 1; i <= 9; i++){
   const box = document.createElement('div');
   board.appendChild(box);
   box.className = ('boxes');
   box.id = (`box${i}`);
   document.getElementById(`box${i}`).addEventListener('click', function(){
       this.style.backgroundColor = 'red';
   });
};
   
//display player names
function displayNames(ev){
    ev.preventDefault();
    document.getElementById("box-board").style.display = "block";
    document.getElementById("names").style.display = "block";
    document.getElementById("myForm").style.display = "none";
    document.getElementById("xName").innerHTML += (" " + document.getElementById('x').value);
    document.getElementById("oName").innerHTML += (" " + document.getElementById('o').value);
    return;
};

// when click start button, the form opens 
function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("btn-open").style.display = "none";
    // document.getElementById("main").style.boxShadow = "0 0 70px 0 rgba(255, 255, 255, 0.294), 0 0 50px 0 rgba(9, 236, 28, 0.294)";
};

//when you click x button, the form disappear
function closeForm(ev) {
     ev.preventDefault();
     document.getElementById("myForm").style.display = "none";
     document.getElementById("main").style.display = "block";
     document.getElementById("btn-open").style.display = "block";


    };

//click restart button to go back from the start
function restart(){
        document.getElementById("names").style.display = "none";
        document.getElementById("board").style.display = "none";
        document.getElementById("restart").style.display = "none";
        document.getElementById("btn-open").style.display = "block";

    };

//when page loaded, this event listener to display names 
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('add').addEventListener('click', displayNames);

    // to be able to pass event as argument and stop automatically submitting after we click the close button so the books stay on page because the page doesn't refresh
    document.querySelector("#close").addEventListener("click", closeForm)
});










  