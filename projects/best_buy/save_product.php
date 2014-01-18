<?php
	require 'database_connect.php';
	$name = $_POST['name'];
	$price = $_POST['price'];
	$image = $_POST['img'];

	$total = $mysqli->query("SELECT * FROM saved_products WHERE product_name ='$name'");
	$count = $total->num_rows;

	if ($count < 1){ 
	   $query = "INSERT INTO saved_products(save_id,product_name,product_price,img_link) VALUES (null,'$name','$price','$image')";
	   $mysqli->query($query);	
	}
?>