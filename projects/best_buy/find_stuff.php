<?php
	//var_dump($_POST); die();
	require 'check_funds.php';
	require 'get_new_products.php';

	echo '<p id="topInstruction">Remaining balance: $'.$amount.'</p>';
	echo '<br>';
	echo '<br>';
	print_r($jsonDecoded->stores[0]->products[0]->salePrice);
	for ($i=0;$i < 1;$i++){
		if ($amount > $jsonDecoded->stores[0]->stores[0]->products[0]->salePrice){
			echo '<div class="result_green">';
			echo $jsonDecoded->stores[0]->products[0]->name.': '.$jsonDecoded->stores[0]->products[0]->salePrice.'<br>';
			echo '<img src="'.$jsonDecoded->stores[0]->products[0]->image.'" />';
			echo '<div class="plot">';
			if($jsonDecoded->stores[0]->products[0]->plot == null){
				echo 'No information available.';
			} else {	
				$text = substr($jsonDecoded->stores[0]->products[0]->plot,0,1000);
				if (strlen($text)>998){
					$text.='...';
					}
				echo $text; 
			}
			echo '</div><br><br>';
			echo '<a href="'.$jsonDecoded->stores[0]->products[0]->salePrice.'" alt="'.$jsonDecoded->stores[0]->products[0]->name.'" value="'.$jsonDecoded->stores[0]->products[0]->image.'" class="submitButton"> Save Movie </a>';
			echo '<a href="#" class="viewPlot">View Plot</a>';
			echo '</div>';
			} else
		if ($amount < $jsonDecoded->stores[0]->products[0]->salePrice){
			echo '<div class="result_red">';
			echo $jsonDecoded->stores[0]->products[0]->name.': '.$jsonDecoded->stores[0]->products[0]->salePrice.'<br>';
			echo '<img src="'.$jsonDecoded->stores[0]->products[0]->image.'" />';
			echo '<br><br>';
			echo '<div class="cant_afford">You don\'t have enough money.</div>';
			echo '</div>';
		}
	}
?>