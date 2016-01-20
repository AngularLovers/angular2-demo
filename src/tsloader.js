+function(){
	window.onload = function(){
		var header = document.querySelector("head");
		var codes = document.querySelectorAll("script[type='text/typescript']");		
		Array.prototype.forEach.call(codes,function(e){
			var code_ts = e.textContent;
			console.log(System.module(code_ts));
		});
	}  
}();