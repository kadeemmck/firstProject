

$(document).ready(function(){
let player1 = "X";
let player2 = "O";
let currentPlayer = 1;
let movesMade= 0;

let block = $(".Square");



    block.on("click", function(){
        movesMade++
        if(this.innerHTML !== player1 && this.innerHTML !== player2){
        if(currentPlayer===1){
            event.target.innerHTML = player1;
            youWin();
            currentPlayer++;
        }
        else{
        event.target.innerHTML = player2;
        youWin();
        currentPlayer--;
        }
    }

    })
})





function youWin(){
    if ($("#1").html() !== "" && $("#1").html()=== $("#2").html() && $("#1").html()===  $("#3").html()){
        console.log("winner") 


    } else if ($("#2").html() !== "" && $("#2").html()=== $("#3").html() && $("#2").html()===  $("#3").html()){
        console.log("winner") 
    
    

    } else if ($("#3").html() !== "" && $("#4").html()=== $("#9").html() && $("#1").html()===  $("#3").html()){
        console.log("winner") 



    } else if ($("#1").html() !== "" && $("#1").html()=== $("#5").html() && $("#9").html()){

    }
    



    }

    //if sq 1 is not empty && sq 1 === to sq 5 && sq === sq 9