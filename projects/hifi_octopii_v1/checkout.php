
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head> 
		<meta http-equiv="Content-type" content="text/html;charset=UTF-8" /> 
		<meta name="keywords" content="Hi-Fi Octopii Vinyl Toys Creative Media UCF Digital Media University of Central Florida Dan Novatnak Daniel Novatnak Jaffy Escarcha Michael Colon Caitlin Lightbourn Corrinne Schultze Ryan Zurschmit School of Visual Arts and Design Tentacles Designer Toys" />
		<title>Hi-Fi Octopii Checkout</title> 
		<style type="text/css">
			@import url('css/reset.css');
			@import url('css/text.css');
			@import url('css/960.css');
			@import url('css/styles.css');
		</style>
        <script type="text/javascript">
		<!--
			if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
   			location.replace("checkout_mobile.php");
		}
		-->
		</script>
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
			<div class="container_12" id="whiteBackground">
				<div class="grid_12">
					<div id="topNav">
						<img src="img/octopus_header_logo.png" alt="Hi-Fi Octopii Header Logo" id="headerLogo" />
						<ul id="topNavListOne">
							<li><a href="home.php">Home</a></li>
							<li><a href="login.php">Hello Guest - Login/Sign Up</a></li>						
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
			<div id="checkoutContainer" class="grid_12">
				<h2 id="checkoutHeader">Enter your Information to Complete Your Purchase!</h2>
				<form id="purchaseForm" method="post" action="" class="purchaseForm">
					<fieldset class="floatFieldset">
						<legend class="checkoutLegend">Billing Address Information:</legend>
						<label for="billingName" class="formLabel">Billing Name: </label> 
						<input class="login" id="billingName" name="billingName" type="text" value="" />
                        						<label for="billingAddress" class="formLabel">Billing Address: </label>  
						<input class="login" id="billingAddress" name="billingAddress" type="text" value="" />
						<label for="billingCity" class="formLabel">Billing City: </label> 
						<input class="login" id="billingCity" name="billingCity" type="text" value="" />
						<label for="billingZipCode" class="formLabel">Billing Zip Code: </label> 
						<input class="login" id="billingZipCode" name="billingZipCode" type="text" value="" />
                                                                             
						<label for="billingState" class="formLabel">Billing State: </label> 
						<input class="login" id="billingState" name="billingState" type="text" value="" />
					</fieldset>
					<fieldset class="floatFieldset">
						<legend class="checkoutLegend">Shipping Address Information:</legend>
						<label for="shippingName" class="formLabel">Shipping Name: </label> 
						<input class="login" id="shippingName" name="shippingName" type="text" value="" />
                                                                          
						<label for="shippingAddress" class="formLabel">Shipping Address: </label>  
						<input class="login" id="shippingAddress" name="shippingAddress" type="text" value="" />
						<label for="shippingCity" class="formLabel">Shipping City: </label> 
						<input class="login" id="shippingCity" name="shippingCity" type="text" value="" />
						<label for="shippingZipCode" class="formLabel">Shipping Zip Code: </label> 
						<input class="login" id="shippingZipCode" name="shippingZipCode" type="text" value="" />
                                                                          
						<label for="shippingState" class="formLabel">Shipping State: </label> 
						<input class="login" id="shippingState" name="shippingState" type="text" value="" />
                        <input class="login" id="shippingBillingInfoInput" name="shippingBillingInfoInput" type="submit" value="Pay With Paypal" />
					</fieldset>
				</form>
			</div>
		</div>
		<div id="footer" class="container_12">
			<p id="disclaimer">Disclaimer: This site is not official and is an assignment for a UCF Digital Media course.</p>
			<p id="designDisclaimer">Designed by Hi-Fi Octopii.</p>
		</div>
	</body>
</html>