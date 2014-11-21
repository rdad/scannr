
// Analysis

var cpt = {
	nb: 0,
	wait: 30
};

var raf_id;
	
scannr.analysis = {

	list : [],

	init: function(){
	},

	run: function(){

		raf_id = requestAnimationFrame(scannr.analysis.run);

		var no_action = true;
		
		if(scannr.analysis.list.length>0){
			scannr.analysis.detect();
			no_action = false;
		}

		if(scannr.scan.list.length > 0){
			scannr.scan.run();
			no_action = false;
		}

		// end of scan/analysis ?
		
		if(no_action){
			cpt.nb++;
			if(cpt.nb>cpt.wait){
				cancelAnimationFrame(raf_id);
				scannr.display.end();
				console.log('--- scannr : end ---');
			}
		}else{
			cpt.nb = 0;
		}
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
		}
	}
}