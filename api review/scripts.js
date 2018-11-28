$.ajax({
    url: "http://api.icndb.com/jokes/random/3" ,
    

    success: function(data){
      console.log(data)
      const jokeOne = data.value[1].joke
      const jokeTwo = data.value[2].joke
      $("#jokeOneText").html(jokeOne)
      $("#jokeTwoText").html(jokeTwo)
    },

    error : function(request,error){
        

        console.log(error)
        console.log(request)
     
} 
   

})