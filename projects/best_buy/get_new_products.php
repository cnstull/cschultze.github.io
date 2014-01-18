<?php
    $zip = $_POST['zip'];
    //$zip = 32828;
    $ch = curl_init();
    $url = "http://api.remix.bestbuy.com/v1/stores(postalCode=" . $zip . ")+products(type=movie)?format=json&apiKey=vgfy38u37zsffeuy7dm9vg4q";
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_URL, $url);
    $curlResponse = curl_exec($ch);
    curl_close($ch);

    $jsonDecoded = json_decode($curlResponse);
?>