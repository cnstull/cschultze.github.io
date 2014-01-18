
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head> 
		<meta http-equiv="Content-type" content="text/html;charset=UTF-8" /> 
        <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0" /> 
		<meta name="keywords" content="Hi-Fi Octopii Vinyl Toys Creative Media UCF Digital Media University of Central Florida Dan Novatnak Daniel Novatnak Jaffy Escarcha Michael Colon Caitlin Lightbourn Corrinne Schultze Ryan Zurschmit School of Visual Arts and Design Tentacles Designer Toys" />
		<title>Hi-Fi Octopii Login/Sign Up</title> 
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
							<li><a href="login.php">Hello Guest - Login/Sign Up</a></li>						</ul>
					</div><!--topnavmobile-->
				<div id="logomobile">
					<h1><img src="img/hi_fi_octopii_banner_mobile.png" alt="Hi-Fi Octopii" id="logo"/></h1>
				</div><!--logomobile-->
              </div><!--headerContainerMobile-->
			</div><!--whitebackground-->
		</div><!--header-->
		<div id="mainContent">
        	<div id="searchContainerMobile">
				<form id="searchForm" method="post" action="search.php">
					<fieldset>
						<input id="keywords" name="keywords" type="text" value="" />
						<input id="search" name="search" type="image" src="img/search_button.png" value="search" />
					</fieldset>
				</form>
			</div><!--searchcontainer--> 	
            <ul class="linky">
                <li class="linky"><a href="home.php">Home</a></li>
        	</ul>
			<div class="loginFormContainerMobile">
					<h2 class="loginHeader">Login</h2>
										<form id="loginForm" method="post" action="" class="loginJoinForm">
						<fieldset>
							<label for="loginUsername" class="formLabel">Username: </label>  
							<input class="login" id="loginUsername" name="loginUsername" type="text" value="" />
                            							<label for="password" class="formLabel">Password: </label> 
							<input class="login" id="password" name="password" type="password" value="" />
														<input class="login" id="loginButton" name="loginButton" type="submit" value="Login" />
						</fieldset>
					</form>
			</div><!--loginformcontainer-->
            <div class="loginFormContainerBorderMobile">
					<h2 class="loginHeader">Sign Up</h2>
					<form id="signUpForm" method="post" action="" class="loginJoinForm">
						<fieldset>
							<label for="firstName" class="formLabel">Username: </label> 
							<input class="login" id="username" name="username" type="text" value="" />
                            							<label for="firstName" class="formLabel">First Name: </label> 
							<input class="login" id="firstName" name="firstName" type="text" value="" />
                            							<label for="lastName" class="formLabel">Last Name: </label> 
							<input class="login" id="lastName" name="lastName" type="text" value="" />
                            							<label for="signUpEmail" class="formLabel">Email: </label> 
							<input class="login" id="signUpEmail" name="signUpEmail" type="text" value="" />
                            							<label for="newPassword" class="formLabel">Password: </label> 
							<input class="login" id="newPassword" name="newPassword" type="password" value="" />
														<label for="confirmPassword" class="formLabel">Confirm Password: </label> 
							<input class="login" id="confirmPassword" name="confirmPassword" type="password" value="" />
														<input class="login" id="signUpButton" name="signUpButton" type="submit" value="Sign Up" />
						</fieldset>
					</form>
				</div><!--loginform-->            
        </div><!--maincontent-->
        <div class="clearfix">
        </div>
		<div id="footer">
			<p id="disclaimerMobile">Disclaimer: This site is not official and is an assignment for a UCF Digital Media course.</p>
			<p id="designDisclaimerMobile">Designed by Hi-Fi Octopii.</p>
		</div>
	</body>
</html>