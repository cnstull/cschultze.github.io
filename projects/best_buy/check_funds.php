<?php
	$ch = curl_init();
	$url = "http://jonfriskics.com/fundsAvailable/";
	curl_setopt($ch, CURLOPT_HEADER, 0);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_URL, $url);
	$curlResponse = curl_exec($ch);
	curl_close($ch);

	$amount = json_decode($curlResponse);
?>