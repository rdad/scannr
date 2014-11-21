(function(){

	var bm_start = new Date().getTime();

	var win_blank_footprint = ["top", "window", "location", "external", "chrome", "document", "speechSynthesis", "localStorage", "sessionStorage", "applicationCache", "webkitStorageInfo", "indexedDB", "webkitIndexedDB", "crypto", "CSS", "performance", "console", "devicePixelRatio", "styleMedia", "parent", "opener", "frames", "self", "defaultstatus", "defaultStatus", "status", "name", "length", "closed", "pageYOffset", "pageXOffset", "scrollY", "scrollX", "screenTop", "screenLeft", "screenY", "screenX", "innerWidth", "innerHeight", "outerWidth", "outerHeight", "offscreenBuffering", "frameElement", "clientInformation", "navigator", "toolbar", "statusbar", "scrollbars", "personalbar", "menubar", "locationbar", "history", "screen", "postMessage", "close", "blur", "focus", "onautocompleteerror", "onautocomplete", "ontouchstart", "ontouchmove", "ontouchend", "ontouchcancel", "ondeviceorientation", "ondevicemotion", "onunload", "onstorage", "onpopstate", "onpageshow", "onpagehide", "ononline", "onoffline", "onmessage", "onlanguagechange", "onhashchange", "onbeforeunload", "onwaiting", "onvolumechange", "ontoggle", "ontimeupdate", "onsuspend", "onsubmit", "onstalled", "onshow", "onselect", "onseeking", "onseeked", "onscroll", "onresize", "onreset", "onratechange", "onprogress", "onplaying", "onplay", "onpause", "onmousewheel", "onmouseup", "onmouseover", "onmouseout", "onmousemove", "onmouseleave", "onmouseenter", "onmousedown", "onloadstart", "onloadedmetadata", "onloadeddata", "onload", "onkeyup", "onkeypress", "onkeydown", "oninvalid", "oninput", "onfocus", "onerror", "onended", "onemptied", "ondurationchange", "ondrop", "ondragstart", "ondragover", "ondragleave", "ondragenter", "ondragend", "ondrag", "ondblclick", "oncuechange", "oncontextmenu", "onclose", "onclick", "onchange", "oncanplaythrough", "oncanplay", "oncancel", "onblur", "onabort", "onwheel", "onwebkittransitionend", "onwebkitanimationstart", "onwebkitanimationiteration", "onwebkitanimationend", "ontransitionend", "onsearch", "getSelection", "print", "stop", "open", "alert", "confirm", "prompt", "find", "scrollBy", "scrollTo", "scroll", "moveBy", "moveTo", "resizeBy", "resizeTo", "matchMedia", "getComputedStyle", "getMatchedCSSRules", "webkitConvertPointFromPageToNode", "webkitConvertPointFromNodeToPage", "requestAnimationFrame", "cancelAnimationFrame", "webkitRequestAnimationFrame", "webkitCancelAnimationFrame", "webkitCancelRequestAnimationFrame", "captureEvents", "releaseEvents", "btoa", "atob", "setTimeout", "clearTimeout", "setInterval", "clearInterval", "TEMPORARY", "PERSISTENT", "webkitRequestFileSystem", "webkitResolveLocalFileSystemURL", "openDatabase", "addEventListener", "removeEventListener", "dispatchEvent"];

	var list = [];

	for (var property in window) {
	    if(win_blank_footprint.indexOf(property)<0){
	    	list.push(property);
	    }
	}

	var bm_end = new Date().getTime();

	console.log(list.length);
	console.log(list);
	console.log('benchmark: '+(bm_end - bm_start)+' ms');
})(); 