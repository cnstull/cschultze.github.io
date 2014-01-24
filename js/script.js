function addPicture()
{
	$('.lbContent').show().hide();
	
	// vertically centering
	var ph = $(window).height();
	var bh = $('.lbContent').height();
	var topspace = ((ph/2) - (bh/2));
	$('.lbContent').css('top', topspace);
	
	// horizontally centering
	var pw = $(window).width();
	var bw = $('.lbContent').width();
	var leftspace = ((pw/2) - (bw/2));
	$('.lbContent').css({'left': leftspace, 'right': leftspace});
	
	// fades in to appear
	$('.lbOverlay').fadeIn();
	$('.lbContent').fadeIn();
	
	// closes lightbox when user clicks again
	// fades out to disappear
	$('.lbOverlay').click(function() {
		$('.lbContent').fadeOut("slow", function(){$(this).remove();});
		$(this).fadeOut("slow", function(){$(this).remove();});
	});
}



$(document).ready(function() {
	
	// -----------------------------------------------------------------------------------
	// Changes color of current nav link
	$(".nav").click(function(e) {
		e.preventDefault(); //prevents default of loading new page
		
		$(".navlink").removeClass("navlink"); //changes color of each nav link when clicked on
		$(this).addClass("navlink");
		
		var href = $(this).attr('href'); //finds how far down each heading is
		var off = $(href).offset(); //off is the variable of the offset amount
		
		
		//also makes up for header size difference at top of screen
		var headheight = $("#header").height(); 
		var total = off.top-headheight-30;
		$("html,body").animate({ // animates the movement
			scrollTop : total
		}, 'slow');
	}); 
	// end of nav link click function
	
	
	
	
	
	
	// -----------------------------------------------------------------------------------
	// makes shadow appear when window is scrolled more than 0
	$(window).scroll(function() { // function to make the header shadow appear once the page is scrolled down

		if($(window).scrollTop() > 0) //if window is scrolled any more than 0 the shadow appears
		{
			if(!$("#header").hasClass('shadow'))
			{
				$("#header").addClass('shadow');
			}
		}
		else
		{
			$('#header').removeClass('shadow');
		}
	// end header shadow section
		
		
		// make nav links change when page is scrolled, not click-navigated
			numscrolled = $(window).scrollTop(); // tells how far the page is scrolled
			//console.log(numscrolled);
			
			if($(window).scrollTop() < 800) {
				$(".navlink").removeClass("navlink"); //changes color of each nav link when clicked on
				$("#homelink").addClass("navlink");
			}
			else if($(window).scrollTop() >= 800 && $(window).scrollTop() < 2600) {
				$(".navlink").removeClass("navlink"); //changes color of each nav link when clicked on
				$("#portlink").addClass("navlink");
			}
			else if($(window).scrollTop() >= 2600 && $(window).scrollTop() < 3500) {
				$(".navlink").removeClass("navlink"); //changes color of each nav link when clicked on
				$("#aboutlink").addClass("navlink");
			}
			else if($(window).scrollTop() >= 3500) {
				$(".navlink").removeClass("navlink"); //changes color of each nav link when clicked on
				$("#contactlink").addClass("navlink");
			}
		// end link color/scroll section
		
	}); // end scroll function
	
	
	
	
	
	// slideshow galleries are all separate so they don't control each other
	// -----------------------------------------------------------------------------------
	// Begin WEB work slideshow
	// Making left/right controls to navigate galleries
		var currentPosition = 0; //current slide
		var slideWidth = 780;
		var slides = $('.slide');
		var numberOfSlides = slides.length;
		
		// remove scrollbar in JS
		$('.slidesContainer').css('overflow', 'hidden');
		// wrap all .slides with #slideInner div
		slides.css('overflow', 'hidden').wrapAll('<div id="slideInner"></div>')
		// float left to display horizontally, readjust .slides width
		.css({
			'float' : 'left',
			'width' : slideWidth,
		});
				
		// set #slideInner width equal to total width of all slides
		$('#slideInner').css('width', slideWidth * numberOfSlides);
		
		// Insert left and right arrow controls in the DOM
		$('.slideshow')
			.prepend('<span class="control" id="leftControl">Move left</span>')
			.append('<span class="control" id="rightControl">Move right</span>');
		
		// hide left arrow control on first load
		manageControls(currentPosition);
		
		// create event listeners for .controls clicks
		$('.control').bind('click', function(){
		// determine new position
			currentPosition = ($(this).attr('id')=='rightControl') ? currentPosition+1 : currentPosition-1;
			
			// hide/show controls
			manageControls(currentPosition);
			//move slideInner using margin-left
			$('#slideInner').animate ({
				'marginLeft' : slideWidth*(-currentPosition)
			});
		});
			
		// manageControls: Hides and shows controls depending on currentPosition
		function manageControls(position) {
			// hide left arrow if position is first slide
			if (position==0) { // position==0 is first slide
				$('#leftControl').hide() 
			}
			else {
				$('#leftControl').show() 
			}
			// hide right arrow is position is last slide
			if(position == numberOfSlides-1) { //numberOfSlides-1 is last slide
				$('#rightControl').hide() 
			}
			else {
				$('#rightControl').show()
			}
		} // end code for web work slideshow
		


		


		// -----------------------------------------------------------------------------------
		// Begin ART work slideshow
		var currentPosition2 = 0; //current slide
		var slideWidth2 = 780;
		var slides2 = $('.slide2');
		var numberOfSlides2 = slides2.length;
		
		// remove scrollbar in JS
		$('.slidesContainer2').css('overflow', 'hidden');
		// wrap all .slides with #slideInner div
		slides2.css('overflow', 'hidden').wrapAll('<div id="slideInner2"></div>')
		// float left to display horizontally, readjust .slides width
		.css({
			'float' : 'left',
			'width' : slideWidth2,
		});

		// set #slideInner width equal to total width of all slides
		$('#slideInner2').css('width', slideWidth2 * numberOfSlides2);
		

		// Insert left and right arrow controls in the DOM
		$('.slideshow2')
			.prepend('<span class="control2" id="leftControl2">Move left</span>')
			.append('<span class="control2" id="rightControl2">Move right</span>');
			
		// hide left arrow control on first load
		manageControls2(currentPosition2);
		
		// create event listeners for .controls clicks
		$('.control2').bind('click', function(){
		// determine new position
			currentPosition2 = ($(this).attr('id')=='rightControl2') ? currentPosition2+1 : currentPosition2-1;
			
			// hide/show controls
			manageControls2(currentPosition2);
			//move slideInner using margin-left
			$('#slideInner2').animate ({
				'marginLeft' : slideWidth2*(-currentPosition2)
			});
		});
			
		// manageControls: Hides and shows controls depending on currentPosition
		function manageControls2(position) {
			// hide left arrow if position is first slide
			if (position==0) { // position==0 is first slide
				$('#leftControl2').hide() 
			}
			else {
				$('#leftControl2').show() 
			}
			// hide right arrow is position is last slide
			if(position==numberOfSlides2-1) { //numberOfSlides-1 is last slide
				$('#rightControl2').hide() 
			}
			else {
				$('#rightControl2').show()
			}
		} // end code for art work slideshow



		// -----------------------------------------------------------------------------------
		// Begin certificates and awards slideshow
		var currentPosition3 = 0; //current slide
		var slideWidth3 = 780;
		var slides3 = $('.slide3');
		var numberOfSlides3 = slides3.length;
		
		// remove scrollbar in JS
		$('.slidesContainer3').css('overflow', 'hidden');
		// wrap all .slides with #slideInner div
		slides3.css('overflow', 'hidden').wrapAll('<div id="slideInner3"></div>')
		// float left to display horizontally, readjust .slides width
		.css({
			'float' : 'left',
			'width' : slideWidth3,
		});

		// set #slideInner width equal to total width of all slides
		$('#slideInner3').css('width', slideWidth3 * numberOfSlides3);
		

		// Insert left and right arrow controls in the DOM
		$('.slideshow3')
			.prepend('<span class="control3" id="leftControl3">Move left</span>')
			.append('<span class="control3" id="rightControl3">Move right</span>');
			
		// hide left arrow control on first load
		manageControls3(currentPosition3);
		
		// create event listeners for .controls clicks
		$('.control3').bind('click', function(){
		// determine new position
			currentPosition3 = ($(this).attr('id')=='rightControl3') ? currentPosition3+1 : currentPosition3-1;
			
			// hide/show controls
			manageControls3(currentPosition3);
			//move slideInner using margin-left
			$('#slideInner3').animate ({
				'marginLeft' : slideWidth3*(-currentPosition3)
			});
		});
			
		// manageControls: Hides and shows controls depending on currentPosition
		function manageControls3(position) {
			// hide left arrow if position is first slide
			if (position==0) { // position==0 is first slide
				$('#leftControl3').hide() 
			}
			else {
				$('#leftControl3').show() 
			}
			// hide right arrow is position is last slide
			if(position==numberOfSlides3-1) { //numberOfSlides-1 is last slide
				$('#rightControl3').hide() 
			}
			else {
				$('#rightControl3').show()
			}
		} // end code for certificates and awards slideshow


		// -----------------------------------------------------------------------------------
		// Begin graphic work slideshow
		var currentPosition4 = 0; //current slide
		var slideWidth4 = 780;
		var slides4 = $('.slide4');
		var numberOfSlides4 = slides4.length;
		
		// remove scrollbar in JS
		$('.slidesContainer4').css('overflow', 'hidden');
		// wrap all .slides with #slideInner4 div
		slides4.css('overflow', 'hidden').wrapAll('<div id="slideInner4"></div>')
		// float left to display horizontally, readjust .slides width
		.css({
			'float' : 'left',
			'width' : slideWidth4,
		});

		// set #slideInner4 width equal to total width of all slides
		$('#slideInner4').css('width', slideWidth4 * numberOfSlides4);
		
		
		// Insert left and right arrow controls in the DOM
		$('.slideshow4')
			.prepend('<span class="control4" id="leftControl4">Move left</span>')
			.append('<span class="control4" id="rightControl4">Move right</span>');
			
		// hide left arrow control on first load
		manageControls4(currentPosition4);
		
		// create event listeners for .controls clicks
		$('.control4').bind('click', function(){
		// determine new position
			currentPosition4 = ($(this).attr('id')=='rightControl4') ? currentPosition4+1 : currentPosition4-1;
			
			// hide/show controls
			manageControls4(currentPosition4);
			//move slideInner using margin-left
			$('#slideInner4').animate ({
				'marginLeft' : slideWidth4*(-currentPosition4)
			});
		});
			
		// manageControls: Hides and shows controls depending on currentPosition
		function manageControls4(position) {
			// hide left arrow if position is first slide
			if (position==0) { // position==0 is first slide
				$('#leftControl4').hide() 
			}
			else {
				$('#leftControl4').show() 
			}
			// hide right arrow is position is last slide
			if(position==numberOfSlides4-1) { //numberOfSlides-1 is last slide
				$('#rightControl4').hide() 
			}
			else {
				$('#rightControl4').show()
			}
		} // end code for graphic work slideshow


	
	
	// -----------------------------------------------------------------------------------
	// Lightbox
	$('.trigger').click(function(e){
			e.preventDefault();
			$('.lbContent').remove();
			$('.lbOverlay').remove();
			// making appropriate image popup when user clicks a thumbnail
			var href = $(this).attr('href');
			$('#popimg').attr('src', href);
			
			// make lb elements here instead of in html doc
			$('body').prepend('<div class="lbOverlay"></div>');
			$('body').prepend('<div class="lbContent"></div>');
			//$('body').fadeIn("slow", function(){$(this).prepend('<div class="lbOverlay"></div>');});
			//$('.lbOverlay').fadeIn("slow", function(){$(this).prepend('<div class="lbContent"></div>');});
			//$('.lbContent').fadeIn("slow", function(){$(this).append('<img class="pop_img" src="'+href+'" />');});
			var img = new Image();
			img.src = href;
			
			$(img).addClass('popimg');
			//$('.lbContent').append(img).append("<p>sfgdsfsdfsd</p>"); // appends text (descriptions) to the lightbox images
			
			
			$.getJSON('js/data.json', function(data){
		
				var i;
				var artname;
				var artdesc;
				$.each(data.artworks, function(i, item) {

					if(href == i) {
						artname = item.name;
						artdesc = item.description;
						
					}
				});
				
					$('.lbContent').append("<ul class='lbinfo'></ul>");
					
					$('.lbinfo').append("<li class='lbartimg'></li>").append("<img class='popimg' src="+href+" />");
					$('.lbinfo').append("<li class='artname'>"+artname+"</li>");
					$('.lbinfo').append("<li class='artdesc'>"+artdesc+"</li>");
				
					//$('.lbContent').append("<ul class='lbinfo'><li class='artimg'><img class='popimg' src="+href+" /></li></ul>")
						//.append("<ul class='lbinfo'><li class='artname'>"+artname+"</li> <li class='artdesc'>"+artdesc+"</li></ul>");
						
					if(!img.complete)
					{
						img.onload = addPicture;
					}
					else
					{
						addPicture();
					}					
			});
			
			
	});
	
	$('.lbTrigger').click(function(event){
		event.preventDefault();
		
	}); 
	// end lightbox section
	
	
	
	
	
	
	// -----------------------------------------------------------------------------------
	// Contact form
	$("#submit").click(function(e) { // functions when the user clicks
		$('.response').remove();
		e.preventDefault(); //prevents default of loading new page
		
		var name = $('#form input[name=name]').removeClass('redbox').val();
		var email = $('#form input[name=email]').removeClass('redbox').val();
		var subject = $('#form input[name=subject]').removeClass('redbox').val();
		var message = $('#form textarea[name=message]').removeClass('redbox').val();
			
		$.ajax({
			type: "POST",
			url: "process.php", // uses separate .php file for form information
			data: { 
				"name": name, 
				"email": email,
				"subject": subject,
				"message": message, 
			},
			dataType: "json",
		}).done(function( msg ) { // tells user whether message was sent or not
		  	//alert( "Data Saved: " + msg );
			if(msg.success) // if success, then success message displayed
			{
				$('#form').before('<ul class="response">');
					$('ul.response').append('<li class="success">'+ msg.success +'</li>');
				$('.response').slideDown();
			}
			else if(msg.error) // if failure, errors displayed for what user needs to fix
			{
				// console.log(msg.error);
				$('#form').before('<ul class="response"></ul>');
				for(i in msg.error){
					console.log($('#form input[name='+i+']'));
					
					$('#form input[name='+i+']').addClass("redbox");
					
					$('ul.response').append('<li class="error">'+ msg.error[i] +'</li>');			
				}
					
					$('.response').slideDown();
			}
		});

	}) // end of submit/contact validation
	
	

	
}); // end of window on load/document ready

