
(function(){

	var list = [];

	for (var property in window) {
	    //if (window.hasOwnProperty(property)) {
	        list.push(property);
	    //}
	}

	var result = 'var window_blank : {'+list.join(': 1, ')+': 1}; ';
	console.log(result);
})();