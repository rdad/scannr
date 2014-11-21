
// Analysis
	
scannr.analysis = {

	list : [],

	init: function(){


	},

	run: function(){

		requestAnimationFrame(scannr.analysis.run);
		
		if(scannr.analysis.list.length>0){
			scannr.analysis.detect();
		}

		scannr.scan.run();
	},

	add: function(data){

		data 	= (typeof data == 'string') ? [data] : data;
		var nb 	= data.length;

		// Ajout des fichiers

		for(var i=0; i<nb; i++){
			this.list.push(data[i]);
		}
	},

	detect: function(){

		var name 	= this.list.shift();
		var target 	= scannr.footprint[name];

		if(typeof target != 'undefined'){
			
			// scan supplémentaires ?
			if(typeof target.scan != 'undefined'){
				scannr.scan.add_target(target.scan);   
			}

			// ajout au display
			scannr.display.add(target);

			console.log('detected: '+name);
		}else{
			//console.log('not found: '+name);
		}
	}
}