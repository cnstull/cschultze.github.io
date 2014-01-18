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

	<div id="zipcodes">
	<form name="zipform" id="zipcode" action="find.php" onsubmit="return validateForm()" method="post">
		<p><strong><label for="zip">Enter your zip code: </label><input type="text" id="zip" name="zip"/></strong><input type="submit" name="submit" id="submit" /></p>
	</form>
    
    <p>Or see what people in other places are making to eat:</p>
        <ul class="ziplist">
            <li>Atlanta, GA: <strong>30301</strong></li>
            <li>Austin, TX: <strong>73301</strong></li>
            <li>Denver, CO: <strong>80002</strong></li>
            <li>Detroit, MI: <strong>48201</strong></li>
            <li>Fairbanks, AK: <strong>99701</strong></li>
            <li>Fairfield, CT: <strong>06824</strong></li>
            <li>Honolulu, HI: <strong>96801</strong></li>
            <li>Kansas City, MO: <strong>64101</strong></li>
            <li>Los Angeles, CA: <strong>90001</strong></li>
            <li>Miami, FL: <strong>33010</strong></li>
            <li>Seattle, WA: <strong>98101</strong></li>
        </ul>
    </div>
    
    <div id="footer">
    	<p class="footer">Created by Corrinne Schultze for an assignment at UCF.</p>
        <p class="footer">APIs by Yummly and Weather Underground.</p>
    </div>
        
</body>
</html>