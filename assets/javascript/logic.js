$(document).ready(function() {
   

   	var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
	//to access data, query below URL with the channel name for JSON data
	
	//for all of the channels in the array, fetch JSON data and put data in the twitchData array.
	
	for(var i=0;i<channels.length;i++){
		var url='https://wind-bow.glitch.me/twitch-api/channels/'+channels[i]; 
		$.getJSON(url, function(json) {
	  		
	  		$("#all").append('<div>'+json.display_name+'</div>');

	  		//if user is offline, status will be null
	  		if(json.status===null){
	  			$("#offline").append('<div>'+json.display_name+'</div>');
	  		}
	  		else{
	  			$("#online").append('<div>'+json.display_name+'</div>');
	  			//create a link with the user's logo to take them to the twitch page
	  			$("#online").append('<a href='+json.url+'><image class="logo" src="'+json.logo+'"></a>');

	  		}









		});
  
	}
	

});


	



