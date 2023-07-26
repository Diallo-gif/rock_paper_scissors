const buttons = document.querySelectorAll("button");

for(let i = 0; i <buttons.length; i++){
buttons[i].addEventListener("click", function(){
 const computer = buttons[Math.floor(Math.random() *buttons.length)].innerHTML;
 const player = buttons[i].innerHTML;
 let result = "";
 if(player ===  computer){
    result = "equality";
 }
 else if( (player == "paper" && computer =="rock")||
    (player =="scissors" && computer == "paper")||
    (player =="rock" && computer == "scissors")){
        result = "win";
    }
    else{
        result ="lost";
    }
    document.querySelector(".result").innerHTML =
    `player:${player}</br>
    computer:${computer}</br>
    ${result}`;






})


}