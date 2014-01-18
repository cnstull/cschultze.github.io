// JavaScript Document

/*function validateForm()
{
	var x=document.forms["zipform"]["zip"].value;
	if (x==null || x=="")
	  {
		  alert("Please enter a zipcode.");
		  return false;
	  }
}*/


$(document).ready(function() {	
						   
	$("#submit").on({
		
		click: function(event) {
		event.preventDefault();	
		
			var getMovie = {
				data: {zip: $("#zip").val()},
				dataType: 'html',
				error: function(response) {
					console.log('Sorry, something went wrong.');
				},
				success: function(response) {
					$('#responseClick').empty();
					$('#responseClick').append(response);
	
					saveMovies();
					deleteMovies();
				},
				type: 'POST',
				//url: $(this).attr('href')
				url: "find_stuff.php"
			}
			$.ajax(getMovie);
		}
	});					   
	
	/*
	// bind to the submit event of our form
	$("#submit").submit(function(event)
	{
		event.preventDefault();
		var getMovie = {
				data: {zip: $("#zip").val()},
				dataType: 'html',
				error: function(response) {
					console.log('Sorry, something went wrong.');
				},
				success: function(response) {
					$('#responseClick').empty();
					$('#responseClick').append(response);
	
					saveMovies();
					deleteMovies();
				},
				type: 'POST',
				//url: $(this).attr('href')
				url: "find_stuff.php"
			}
			$.ajax(getMovie);
	}); */
	

	
});
	
	// Delete Stuff
	function deleteMovies(){
		$('a.deleteButton').on('click',function(e) {
			e.preventDefault();
			$(this).closest('.saved_results').slideToggle(400);
			this.innerHTML = 'Deleted!';
			this.setAttribute("id","deleted");
			var deleteMovie = {
				data: 'productToDelete='+this.getAttribute('href'),
				dataType: 'html',
				error: function(response) {
					console.log('Sorry, something went wrong.');
				},
				success: function(response) {
					$('#responseClick').empty();
					$('#responseClick').append(response);
					saveMovies();
					deleteMovies();
				},
				type: 'POST',
				url: "get_saved_products.php"
			}
			$.ajax(deleteMovie);
		});
	}
	
	// Save Stuff
	function saveMovies(){
		
		$('a.viewPlot').on('click', function(e){
			e.preventDefault();
			$(this).closest('.result_red').find('div.plot').slideToggle(400);
			$(this).closest('.result_green').find('div.plot').slideToggle(400);
		});
		
		$('a.submitButton').on('click',function(e) {
			e.preventDefault();
			this.innerHTML = 'Saved!';
			this.setAttribute("id","saved");
			var saveMovie = {
				data: 'img='+this.getAttribute('value')+'&name='+this.getAttribute('alt')+'&price='+this.getAttribute('href'),
				dataType: 'html',
				error: function(response) {
					console.log('Sorry, something went wrong.');
				},
				success: function(response) {
					$('#responseClick').append(response);
					deleteMovies();
				},
				type: 'POST',
				url: "save_product.php"
			}
			$.ajax(saveMovie);
		});
	}