<?php
  $mysqli = new mysqli('sulley.cah.ucf.edu','th960554','knights123!','th960554');
  if ($mysqli->connect_error) {
    die('Connect Error ('.$mysqli->connect_errno.')'.$mysqli->connect_error);
  }
?>