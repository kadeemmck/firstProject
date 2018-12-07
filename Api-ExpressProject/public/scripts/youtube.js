   
$("#buttonSearch").click(function(){
    const name = $("#youtuber").val()
    console.log(name)

    
   apiKey = "AIzaSyA2pVFFrvELm_ne7MRtWsUxIalY47ALeQ0"

   const url = 'https://www.googleapis.com/youtube/v3/search?id=7lCDEYXw3mM&key=' + apiKey + '&part=snippet&global=true&order=viewcount&q=' + name
   console.log(url)


    
    $.ajax({ 
         url: url, 
        
        success: function(data){
            console.log(data) 
            const videos = data.items[0]
            const embedded = "https://www.youtube.com/embed/" + videos.id.videoId + "?autoplay=1"
            

           
            $("#videos").attr('src',embedded)
        },
    error: function (request, error) {
        console.log(request)
        console.log(error)





    }   
      });


 



     
    })
    
  
   


