<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Hi-Fi Octopii Shopping Cart - Corrinne Schultze</title>

<style type="text/css"> @import url(css/styles.css); </style>
</head>

<body>

		<div id="container">
        	<div id="top">
            	<img class="logo" src="img/logo05.png" alt="Hi-Fi Octopii logo" />
                
               	<div id="rightcolumn">  
                <p>Your Account</p>
                	<ul class="list">
                    	<li><a class="list" href="cart.php">Shopping Cart</a></li>
                    	<li><a class="list" href="client.php">Login</a></li>
                        <li><a class="list" href="client.php">Preferences</a></li>
                        <li><a class="list" href="client.php">Profile</a></li>
                        <li><a class="list" href="client.php">Portfolio</a></li>
                        <li><a class="list" href="client.php">Recommended for you:</a></li>
                    </ul>
                    
                    
                    <br />
                    
                    <p>Hi-Fi Octopii</p>
                	<ul class="list">
                    	<li><a class="list" href="admin.php">Admin</a></li>
                    	<li><a class="list" href="home.php">Contact</a></li>
                        <li><a class="list" href="home.php">About</a></li>
                        <li><a class="list" href="home.php">FAQ</a></li>
                    </ul>
                    
                    
                    <br />
                    
                    
                </div>
            </div>
            
            
            
            <div id="bottom">
            	<div id="leftcolumn">
                <p>Content</p>
                	<ul class="list">
                    	<li><a class="list" href="home.php">Home</a></li>
                        <li><a class="list" href="home.php">Featured Art</a></li>
                        <li><a class="list" href="home.php">Featured Artists</a></li>
                    </ul>
                        
                    <br />
                       
                 <p>Find Art</p>
                    <ul class="list2">
                    	<li><a class="list" href="home.php">Search:</a></li>
                        <li><input type="text" value="Search" size="15" onfocus="if(this.value==this.defaultValue) this.value='';" /></li>
                        <li><a class="list" href="catalog.php">Browse Art</a></li>
						<li><a class="list" href="catalog.php">Browse Artists</a></li>
                    </ul>
                    
                    <br />
                    
                  <p>Art Categories</p>
                  	<ul class="list">   
                        <li><a class="list" href="home.php">Digital Art</a></li>
                        <li><a class="list" href="home.php">Drawings</a></li>
                        <li><a class="list" href="home.php">Paintings</a></li>
                        <li><a class="list" href="home.php">Photography</a></li>
                        <li><a class="list" href="catalog.php">3D Models</a></li>
                        <li><a class="list" href="home.php">Vinyl Toys</a></li>
                        <li><a class="list" href="home.php">Sculpture</a></li>
                        <li><a class="list" href="home.php">Videos</a></li>
                    </ul>
                    
                    
                    <br />
   
                </div>
               
                   

                
                
                
                <div id="cart">
                	<h3>Your shopping cart</h3>
                    	<h4>Item One</h4>
                    		<p>Quantity</p>
                            <p>Price</p>
                            
                        <h4>Item Two</h4>
                        	<p>Quantity</p>
                            <p>Price</p>

						<h4>Item Three</h4>
                        	<p>Quantity</p>
                            <p>Price</p>
                    
                    <br />
                    
                    <form method="post" action="http://sulley.dm.ucf.edu/~co344095/dig4530c/assignment02/cart.php">
                    <h3>Shipping Address</h3>
						Name: <input type="text" name="name" /><br />
						Street Address: <input type="text" name="streetaddress" /><br />
                        City: <input type="text" name="city" /><br />
                        State: <input type="text" name="state" /><br />
                        Zipcode: <input type="text" name="zipcode" /><br />
                        
                    <h3>Billing Address</h3>
                    	<input type="checkbox" name="address" value="Same" />Same as shipping address<br />
                        
                    	Name: <input type="text" name="name" /><br />
						Street Address: <input type="text" name="address" /><br />
                        City: <input type="text" name="city" /><br />
                        State: <input type="text" name="state" /><br />
                        Zipcode: <input type="text" name="zipcode" /><br />
                    
                    <h3>Billing Information</h3>
                    	Name on card: <input type="text" name="ccname" /><br />
						Credit card number: <input type="text" name="ccnumber" /><br />
                        Verification code: <input type="text" name="cccode" /><br />
                        Expiration date: <input type="text" name="state" /><br />

						<input type="submit" value="Submit Order"/>
        			</form>
                </div>

            </div>
            
            
            
            <div id="footer">
            	<p>Copyright Hi-Fi Octopii. All rights reserved.<br />
                Hi-Fi Octopii<br />
                407-823-6100<br />
                P.O. Box 163121, Orlando, FL 32816-3121</p>
                
            	<p>This site is not official and is an assignment for a UCF Digital Media course.<br />
				Designed by Corrinne Schultze</p>
			</div>
            
            
        </div>

</body>
</html>
