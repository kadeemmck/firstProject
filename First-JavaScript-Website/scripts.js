$(document).ready(function(){
    let counter = 0;
    $("#numberButton").click(function(){
      $("#clickCount").html(counter += 1);
    });
  });
  $("#resetButton").click(function(){
    $("#clickCount").html(counter = 0);
  });
  $("#sayHello").click(function(){
    if( $("#firstNameField").val() === "" || $("#lastNameField").val()=== "") {
      alert("please input name")
   }else{
    alert("Hello "+ $("#firstNameField").val() + " " + $("#lastNameField").val() + " My Favorite color is " + $('input:radio[name=favoriteColor]:checked').val());
  }
  })
