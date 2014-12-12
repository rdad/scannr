
// Display

scannr.display = {

	list: [],

	init: function(){

	},

	add: function(data){
		this.list.push(data);
	},

	end: function(){

		var displayCss = {
			width: '100%',
			height: '100%',
			'background-color': 'rgba(0, 0, 0, 0.5)',
			position: 'fixed',
			'z-index': 10000000000,
			top: 0,
			left: 0,
			padding: "50px 0",
			'text-align': 'center',
			color: 'white'

		};

		var closeCss = {
			'border-radius':'50%',
			'background-color': 'rgba(255, 0, 0, 0.5)',
			width: '30px',
			height: '19px',
			position: 'fixed',
			right: '15px',
			top: '15px',
			color: '#000',
			padding: '5.5px 0',
			'box-shadow': '1px 1px 5px #000',
			cursor: 'pointer',
			'font-family': 'Arial, sans-serif',
			'font-size': '17px'
		};

		
		$("#displayBox").remove();
		$('html').append('<div id="displayBox" dataState="off"><span id="close">X</span></div>');
		$('body').css({'-webkit-filter': 'blur(5px)'});
		$("#displayBox").css(displayCss);
		$('#close').css(closeCss);
		for (var i = 0; i < this.list.length; i++) {
			var itemList = this.list[i];
			$('#displayBox').append('<h2>'+itemList.name+'</h2><p>'+itemList.category+'</p><p>'+itemList.url+'</p>');
		};
		
		$("#close").on('click', function(){
			$("#scannrScript").remove();
			$("#displayBox").remove();
			$('body').css({'-webkit-filter': 'blur(0)'});
		});


	}
};