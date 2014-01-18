<?php
	require 'database_connect.php';

	if(isset($_POST['productToDelete'])){
		$deleteProduct = $_POST['productToDelete'];
		$mysqli->query("DELETE FROM saved_products WHERE save_id='".$deleteProduct."'");
	}
	echo '<p id="topInstruction">Saved Stuff</p>';
	$result = $mysqli->query("SELECT * FROM saved_products");
	echo '<table>';
	while($row = $result->fetch_object()){
		echo '<tr class="saved_results">';
		echo '<td><img src="'.$row->img_link.'" />'.$row->product_name.'</td>';
		echo '<td>Price: $'.$row->product_price.'</td><td><a class="deleteButton" href="'.$row->save_id.'">Delete</a></td>';
		echo '</tr>';	
	}
	echo '</table>';
?>