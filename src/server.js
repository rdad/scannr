
// Server

var xhr = null;
	
scannr.server = {

	online: 		true,
	server_url : 	'scannr.alwaysdata.net',

	init: function(){
	},

	send_result: function(data){

		if(!this.online)	return;

		// prepare datas
		
		var liste = '';

		for(lib in data){
			liste += lib.name+',';
		}

		// ajax

		xhr = new XMLHttpRequest();

		xhr.open("POST", this.server_url+'/data', true);		
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(liste);
		xhr.onreadystatechange = scannr.server.response;

		xhr.send();
	},

	response: function() {
	  if (xhr.readyState == 4) {
	    console.log(JSON.parse(xhr.responseText));
	  }
	}
}