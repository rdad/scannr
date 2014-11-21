
// Scan
	
scannr.scan = {

	list: [],

	run: function(){
		if(this.list.length>0){
			var target = this.list.shift();
			target();
		}
	},

	add_target: function(target){
		this.list.push(target);
	}
};