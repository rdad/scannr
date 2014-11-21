(function(){

	// app
	
	var scannr = {

		init: function(){

            // point de départ : scan de l'objet global window
			this.scan.add_target(scannr.footprint.window.scan);       
			return this;
		},

		start: function(){
            console.log('--- scannr : start ---');
			this.analysis.run();
		}
	};

	// **** modules *** //
