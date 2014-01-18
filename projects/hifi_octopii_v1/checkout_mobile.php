
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head> 
		<meta http-equiv="Content-type" content="text/html;charset=UTF-8" /> 
        <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0" /> 
		<meta name="keywords" content="Hi-Fi Octopii Vinyl Toys Creative Media UCF Digital Media University of Central Florida Dan Novatnak Daniel Novatnak Jaffy Escarcha Michael Colon Caitlin Lightbourn Corrinne Schultze Ryan Zurschmit School of Visual Arts and Design Tentacles Designer Toys" />
		<title>Hi-Fi Octopii Checkout</title> 
		<style type="text/css">
			@import url('css/reset.css');
			@import url('css/text.css');
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
		<script type="text/javascript" src="js/jquery-1.5.1.min.js"></script>
        <!--<script type="text/javascript" src="js/jquery.mobile-1.0a3.min.js"></script>-->
    	<script type="text/javascript" src="js/jquery.validate.js"></script>
	</head> 
	<body> 
		<div id="header">
			<div id="whiteBackground">
            	<div id="headerContainerMobile">
					<div id="topNavMobile">
						<img src="img/octopus_header_logo.png" alt="Hi-Fi Octopii Header Logo" id="headerLogo" />
                        <ul id="topNavListOneMobile">
							<li><a href="login.php">Hello Guest - Login/Sign Up</a></li>                            <li />
						</ul>
					</div><!--topnavmobile-->
				<div id="logomobile">
					<h1><img src="img/hi_fi_octopii_banner_mobile.png" alt="Hi-Fi Octopii" id="logo"/></h1>
				</div><!--logomobile-->
              </div><!--headerContainerMobile-->
			</div><!--whitebackground-->
		</div><!--header-->
		<div id="mainContent">
            <ul class="linky">
				<li class="linky"><a href="home.php">Home</a></li>
        	</ul>
            <div id="checkoutContainer">
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
        <div class="clearfix"></div>
		<div id="footer">
			<p id="disclaimerMobile">Disclaimer: This site is not official and is an assignment for a UCF Digital Media course.</p>
			<p id="designDisclaimerMobile">Designed by Hi-Fi Octopii.</p>
		</div>
	</body>
</html>

