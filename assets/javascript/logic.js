$(document).ready(function() {
   
   	//sample Twitch channels provided as part of code-camp project
   	var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
	//to access data, query below URL with the channel name for JSON data
	
	//for all of the channels in the array, fetch JSON data and put output channel info to the appropriate tab(s).
	for(var i=0;i<channels.length;i++){
		var url='https://wind-bow.glitch.me/twitch-api/channels/'+channels[i]; 
		$.getJSON(url, function(json) {
	  		//if user is offline, status will be null
	  		if(json.status===null){
	  			//create new row and append offline logo, link to twitch stream, and list offline status
	  			$("#offline").append(
	  			'<div class="row">'+
	  				'<div class="col-md-4">'+
	  					'<a href='+json.url+'><image class="logo" src="assets/images/offline.jpg"></a>'+
	  				'</div>'+
	  				'<div class="col-md-8">'+
	  					'<div class="streamerName">'+json.display_name+'</div>'+
	  					'<div class="streamerStatus">User Offline</div>'+
	  				'</div>'+
  				'</div>');

  				$("#all").append(
	  			'<div class="row">'+
	  				'<div class="col-md-4">'+
	  					'<a href='+json.url+'><image class="logo" src="assets/images/offline.jpg"></a>'+
	  				'</div>'+
	  				'<div class="col-md-8">'+
	  					'<div class="streamerName">'+json.display_name+'</div>'+
	  					'<div class="streamerStatus">User offline</div>'+
	  				'</div>'+
  				'</div>');
	  		}
	  		//create new row and append user logo, link, and list status
	  		else{
	  			$("#online").append(
	  			'<div class="row">'+
	  				'<div class="col-md-4">'+
	  					'<a href='+json.url+'><image class="logo" src="'+json.logo+'"></a>'+
	  				'</div>'+
	  				'<div class="col-md-8">'+
	  					'<div class="streamerName">'+json.display_name+'</div>'+
	  					'<div class="streamerStatus">'+json.status+'</div>'+
	  				'</div>'+
  				'</div>');

  				$("#all").append(
	  			'<div class="row">'+
	  				'<div class="col-md-4">'+
	  					'<a href='+json.url+'><image class="logo" src="'+json.logo+'"></a>'+
	  				'</div>'+
	  				'<div class="col-md-8">'+
	  					'<div class="streamerName">'+json.display_name+'</div>'+
	  					'<div class="streamerStatus">'+json.status+'</div>'+
	  				'</div>'+
  				'</div>');
		  	}
		});
	}
});


	



