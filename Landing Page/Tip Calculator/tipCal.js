
// <!--varibales-->
// bill amount 
// serviceQuality
// peopleamt





// Calculate Tip

function calculateTip() {
    let billAmt = document.getElementById("billamt").value;
    let serviceQual = document.getElementById("serviceQual").value;
    let numOfPeople = document.getElementById("peopleamt").value;
    let tipAmount =  (billAmt * serviceQual) / numOfPeople; 
 $('#tip').val(tipAmount);
}

$('#calculate').onClick()

// // make tip validated 
// if(billAmt === " " || serviceQual == 0){
//     alert(" please enter values");
//     return;
// }

// // validate empty field 

// if(numOfPeople === " "|| numOfPeople <= 1 ){
//     numOfPeople = 1;
// }

 

    
  