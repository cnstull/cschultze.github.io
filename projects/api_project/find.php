<?php

	function get_curl($url)
	{
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		$result = curl_exec($ch);
		return $result;
	}
	
	$zip = $_POST['zip'];
	$weather = json_decode(get_curl("http://api.wunderground.com/api/a62c82dce1d962e4/conditions/q/".$zip.".json"));
	
	$temp = $weather->current_observation->temp_f;
	
	if($temp > 70)
	{
		$type = "meaty";
	}
	elseif($temp < 70 && $temp > 0)
	{
		$type = "sweet";
	}
	
	$place = $weather->current_observation->display_location->full;
	
	$num = rand(1, 30);
	$recipes = json_decode(get_curl("http://api.yummly.com/v1/api/recipes?_app_id=89981df8&_app_key=31733e8bc0abef6a667a39fd26f1d631&flavor.".$type.".min=0.7&flavor.".$type.".max=1&maxResult=5&start=$num"));
	//example URL: http://api.yummly.com/v1/api/recipes?_app_id=89981df8&_app_key=31733e8bc0abef6a667a39fd26f1d631&flavor.meaty.min=0.7&flavor.meaty.max=1&maxResult=5
	
?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>DIG4503 - Corrinne Schultze - Semester Project</title>
<link rel="stylesheet" type="text/css" href="css/styles.css">
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script src="js/semesterProject.js"></script>
</head>

<body>
	<div id="header">
		<h1>Recipe Recommender</h1>
    	<p class="tagline">Can't choose something to make? Maybe you can try something based on the weather!</p>
    </div>

	<div id="current">
        <p>The current temperature in <?php echo $place?> is <strong><?php echo $temp ?></strong> degrees Fahrenheit.</p>
        <p>That means that you're probably looking for something <strong><?php echo $type?>.</strong> Try one of these:</p>
    
		<?php foreach($recipes->matches as $recipe) { ?>
        <hr />
        <h2><?php echo $recipe->recipeName?></h2>
        
        <div id="ing">
        	<img src="<?php echo $recipe->smallImageUrls[0]?>"/>
        
            <p>Ingredients:</p>
            <ul>
            <?php foreach($recipe->ingredients as $ingredient) {?>
            <li><?php echo $ingredient ?></li>
            <?php } ?>
            </ul>
        </div>
        
        <p class="source">Original source: <?php echo $recipe->sourceDisplayName ?></p>
        
        <?php } ?>
    </div>
    
   	<div id="footer">
    	<p class="footer">Created by Corrinne Schultze for an assignment at UCF.</p>
        <p class="footer">APIs by Yummly and Weather Underground.</p>
    </div>
    
</body>
</html>