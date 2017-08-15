$(document).ready(function(){

     function getLocation() {
         if (navigator.geolocation) {
					
// Get the user's current position
   navigator.geolocation.getCurrentPosition(getPositionSuccess);

   function getPositionSuccess(position){
        var myLatitude = position.coords.latitude;
        var myLongitude = position.coords.longitude;
        var accuracy = position.coords.accuracy;
        var skycon = new Skycons({ color: "black" });

        $.ajax({
          url: 'https://api.darksky.net/forecast/946ead7d406d8d59e884861fb1e94a5a/'+ myLatitude+',' + myLongitude,
          dataType: 'jsonp',
          data: {
           exclude: 'daily,flags'
          },
          success: function(response) {
              skycon.set("icon",response.currently.icon);
              skycon.play();
              $(".btn-left").html(response.currently.temperature + "&#8457;");
              $("#summary").html(response.hourly.summary);
              var celSius = Math.floor(((response.currently.temperature - 32) *5) / 9 );
              $(".btn-right").click(function(){
                            
                            if(response.currently.temperature){
                               // alert("yes");
                              $(".btn-left").text(celSius + "℃");
                            } else {
                               $(".btn-right").click(function(){
                                   $(".btn-left").text(response.currently.temperature + "&#8457;");
                                 });
                            }
                                 }); 
            },
          error: function getPositionError(){
        $(".card").html("unable to retrieve your location");
    }
    
        });        
    }

    

    




} else {
	alert('Geolocation is not supported in your browser');
}
     }


getLocation();

});



/*
switch (response.currently.icon) {
            case "clear-day":
                
                break;
            case "clear-night":
                
                break;
            case "partly-cloudy-day":
                
                break;
            case "partly-cloudy-night":
                
                break;
            case "cloudy":
                
                break;
            case "rain":
                
                break;
            case "sleet":
                
                break;
            case "snow":
                
                break;
            case "wind":
                
                break;
            case "fog":
                
                break;
        
            default:
                break;
        }

*/