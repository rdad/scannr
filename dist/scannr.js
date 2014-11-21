(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());


(function(){

	// app
	
	var scannr = {

		init: function(){

            // point de départ : scan de l'objet global window
			this.scan.add_target(scannr.footprint.window.scan);       
			return this;
		},

		start: function(){
			this.analysis.run();
			this.scan.run();
		}
	};

	// **** modules *** //


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
scannr.footprint = {Modernizr: {
	name: 'Modernizr',
	category: ['library','detection'],
	url: 'http://www.modernizr.com'
},
window: {
	scan: function(){

		var list = [];

		var win_blank_footprint = {top: 1, window: 1, location: 1, external: 1, chrome: 1, document: 1, speechSynthesis: 1, localStorage: 1, sessionStorage: 1, applicationCache: 1, webkitStorageInfo: 1, indexedDB: 1, webkitIndexedDB: 1, crypto: 1, CSS: 1, performance: 1, console: 1, devicePixelRatio: 1, styleMedia: 1, parent: 1, opener: 1, frames: 1, self: 1, defaultstatus: 1, defaultStatus: 1, status: 1, name: 1, length: 1, closed: 1, pageYOffset: 1, pageXOffset: 1, scrollY: 1, scrollX: 1, screenTop: 1, screenLeft: 1, screenY: 1, screenX: 1, innerWidth: 1, innerHeight: 1, outerWidth: 1, outerHeight: 1, offscreenBuffering: 1, frameElement: 1, clientInformation: 1, navigator: 1, toolbar: 1, statusbar: 1, scrollbars: 1, personalbar: 1, menubar: 1, locationbar: 1, history: 1, screen: 1, postMessage: 1, close: 1, blur: 1, focus: 1, onautocompleteerror: 1, onautocomplete: 1, ontouchstart: 1, ontouchmove: 1, ontouchend: 1, ontouchcancel: 1, ondeviceorientation: 1, ondevicemotion: 1, onunload: 1, onstorage: 1, onpopstate: 1, onpageshow: 1, onpagehide: 1, ononline: 1, onoffline: 1, onmessage: 1, onlanguagechange: 1, onhashchange: 1, onbeforeunload: 1, onwaiting: 1, onvolumechange: 1, ontoggle: 1, ontimeupdate: 1, onsuspend: 1, onsubmit: 1, onstalled: 1, onshow: 1, onselect: 1, onseeking: 1, onseeked: 1, onscroll: 1, onresize: 1, onreset: 1, onratechange: 1, onprogress: 1, onplaying: 1, onplay: 1, onpause: 1, onmousewheel: 1, onmouseup: 1, onmouseover: 1, onmouseout: 1, onmousemove: 1, onmouseleave: 1, onmouseenter: 1, onmousedown: 1, onloadstart: 1, onloadedmetadata: 1, onloadeddata: 1, onload: 1, onkeyup: 1, onkeypress: 1, onkeydown: 1, oninvalid: 1, oninput: 1, onfocus: 1, onerror: 1, onended: 1, onemptied: 1, ondurationchange: 1, ondrop: 1, ondragstart: 1, ondragover: 1, ondragleave: 1, ondragenter: 1, ondragend: 1, ondrag: 1, ondblclick: 1, oncuechange: 1, oncontextmenu: 1, onclose: 1, onclick: 1, onchange: 1, oncanplaythrough: 1, oncanplay: 1, oncancel: 1, onblur: 1, onabort: 1, onwheel: 1, onwebkittransitionend: 1, onwebkitanimationstart: 1, onwebkitanimationiteration: 1, onwebkitanimationend: 1, ontransitionend: 1, onsearch: 1, getSelection: 1, print: 1, stop: 1, open: 1, alert: 1, confirm: 1, prompt: 1, find: 1, scrollBy: 1, scrollTo: 1, scroll: 1, moveBy: 1, moveTo: 1, resizeBy: 1, resizeTo: 1, matchMedia: 1, getComputedStyle: 1, getMatchedCSSRules: 1, webkitConvertPointFromPageToNode: 1, webkitConvertPointFromNodeToPage: 1, requestAnimationFrame: 1, cancelAnimationFrame: 1, webkitRequestAnimationFrame: 1, webkitCancelAnimationFrame: 1, webkitCancelRequestAnimationFrame: 1, captureEvents: 1, releaseEvents: 1, btoa: 1, atob: 1, setTimeout: 1, clearTimeout: 1, setInterval: 1, clearInterval: 1, TEMPORARY: 1, PERSISTENT: 1, webkitRequestFileSystem: 1, webkitResolveLocalFileSystemURL: 1, openDatabase: 1, addEventListener: 1, removeEventListener: 1, dispatchEvent: 1};

		for (var property in window) {
		    if(typeof win_blank_footprint[property] == 'undefined'){
		    	list.push(property);
		    }
		}

		scannr.analysis.add(list);
	}
},
GoogleAnalyticsObject: {

},
ga: {
	alias: 'GoogleAnalyticsObject'
},
jQuery: {
	scan: function(){
		console.log('scan for jquery');
	}
},};

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

	scannr.init().start();

})();