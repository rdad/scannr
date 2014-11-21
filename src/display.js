
// Display

scannr.display = {

	list: [],

	init: function(){

	},

	add: function(data){
		this.list.push(data);
	},

	end: function(){
		console.log(this.list);
	}
};