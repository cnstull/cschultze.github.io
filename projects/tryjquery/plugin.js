(function( $ ) {
	
	$.fn.myPlugin = function() {
		
		this.fadeIn('normal', function(){
			// the this keyword is a DOM element
		});
		
	};
	
}) ( jQuery );


$("#element").myPlugin();