
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head> 
		<meta http-equiv="Content-type" content="text/html;charset=UTF-8" /> 
		<title>Hi-Fi Octopii Admin - Jaffy Escarcha</title> 
		<style type="text/css">
			@import url('css/reset.css');
			@import url('css/text.css');
			@import url('css/960.css');
			@import url('css/styles.css');
		</style>
		<script type="text/javascript">
		  var _gaq = _gaq || [];
		  _gaq.push(['_setAccount', 'UA-30107377-1']);
		  _gaq.push(['_trackPageview']);
		
		  (function() {
		    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		  })();
		</script>
	</head> 
	<body> 
		<div id="header">
			<div class="container_12" id="whiteBackgroundAdmin">
				<div class="grid_12">
					<div id="topNavAdmin">
						<img src="img/octopus_header_logo.png" alt="Hi-Fi Octopii Header Logo" id="headerLogo" />
						<ul id="topNavListOne">
							<li><a href="home.php">Home</a></li>
						     
						
							<li><a href="company.php">Company</a></li>
							<li><a href="cart.php"><img src="img/shopping_cart.png" alt="Shopping Cart" id="cart" />Cart (0)</a></li>
						</ul>
						<div id="searchContainer">
							<form id="searchForm" method="post" action="search.php">
								<fieldset>
									<input id="keywords" name="keywords" type="text" value="" />
									<input id="search" name="search" type="image" src="img/search_button.png" value="search" />
								</fieldset>
							</form>
						</div>
					</div>
				</div>
				<div class="grid_12">
					<h1><img src="img/hi_fi_octopii_banner.png" alt="Hi-Fi Octopii" id="logo"/></h1>
				</div>
			</div>
		</div>
		<div id="mainContent" class="container_12">
			<div id="adminContainer">
				<h2 id="adminGreeting">Hello !</h2>
								<form action="admin.php" method="post">
					<h3>Add Product:</h3>
					<label>Product Name:</label><br />
										<input type="text" name="Product_Name" maxlength="100" size="30" /><br />
					<label>Artist:</label><br />
										<input type="text" name="Artist" maxlength="100" size="20" /><br />
					<label>Brand:</label><br />
										<input type="text" name="Brand" maxlength="100" size="20" /><br />
					<label>Cost:</label><br />
										<input type="text" name="Cost" maxlength="20" size="5" /><br />
					<label>Price:</label><br />
										<input type="text" name="Price" maxlength="20" size="5" /><br />
					<label>ProductID (First and Last Initials - #### EX: AA-0001):</label><br />
										<input type="text" name="Product_ID" maxlength="10" size="10" /><br />
					<label>Stock:</label><br />
										<input type="text" name="Stock" maxlength="20" size="5" /><br />
					<label>Description:</label><br />
										<input type="text" name="Description" maxlength="500" size="100" /><br />
					<label>Product Tags (Search terms for your image):</label><br />
										<input type="text" name="Keywords" maxlength="200" size="100" /><br />
					<input type='submit' value='Submit' name='addProduct' /><br /><br />
				</form>
				
					
											</div>
		</div>
		<div id="footerAdmin" class="container_12">
			<p id="disclaimer">Disclaimer: This site is not official and is an assignment for a UCF Digital Media course.</p>
			<p id="designDisclaimer">Designed by Jaffy Escarcha.</p>
		</div>
	</body>
</html>