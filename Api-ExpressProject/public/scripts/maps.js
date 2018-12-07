

const url='https://www.googleapis.com/geolocation/v1/geolocate?key=' + key
console.log(url)
$.post(url, function (data) { 
console.log(data)

finder = data.location
console.log(finder)
initMap(finder)

})
// function findMe(){
//     $.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${key}`, function(data){
//         finder = data.location
//         console.log(finder)
//         initMap(finder)
//     })
// }

function initMap(finder){
    map = new google.maps.Map(document.getElementById('map'), {
        center: finder,
        zoom: 8
      });
}