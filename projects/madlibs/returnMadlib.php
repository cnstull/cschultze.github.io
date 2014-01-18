<?php


$output= "";
$errors= "";

if(isset($_POST['submit']) || isset($_GET['submit']) ) {
	if($_POST){
		if($_POST['adj1']==''){
			$errors .= "The adjective field is empty.<br />";
			$errorcheck += 1;	
		}
		if($_POST['plnoun1']==''){
			$errors .= "The plural noun field is empty.<br />";	
			$errorcheck += 1;
		}
		if($_POST['noun1']==''){
			$errors .= "The noun field is empty.<br />";	
			$errorcheck += 1;
		}
		if($_POST['adj2']==''){
			$errors .= "The adjective field is empty.<br />";	
			$errorcheck += 1;
		}
		if($_POST['body1']==''){
			$errors .= "The body field is empty.<br />";	
			$errorcheck += 1;
		}
		if($_POST['adj3']==''){
			$errors .= "The adjective field is empty.<br />";	
			$errorcheck += 1;
		}
		if($_POST['plnoun2']==''){
			$errors .= "The plural noun field is empty.<br />";	
			$errorcheck += 1;
		}
		if($_POST['body2']==''){
			$errors .= "The body field is empty.<br />";	
			$errorcheck += 1;
		}
		if($_POST['adj4']==''){
			$errors .= "The adjective field is empty.<br />";	
			$errorcheck += 1;
		}
		if($_POST['adv1']==''){
			$errors .= "The adverb field is empty.<br />";	
			$errorcheck += 1;
		}
		if($_POST['noun2']==''){
			$errors .= "The noun field is empty.<br />";	
			$errorcheck += 1;
		}
		if($_POST['body3']==''){
			$errors .= "The body field is empty.<br />";	
			$errorcheck += 1;
		}
		if($_POST['adv2']==''){
			$errors .= "The adverb field is empty.<br />";	
			$errorcheck += 1;
		}
		
		$output .= "The Force is a mystical, ".$_POST['adj1']." power. As Jedi Master Obi-Wan Kenobi once said, 'The Force is an energy field, created by all living ";
		$output .= $_POST['plnoun1'].", that surrounds us, penetrates us, and binds the ";
		$output .= $_POST['noun1']." together.' Using the power of the Force, a Jedi can do many ";
		$output .= $_POST['adj2']." things, like using the Force to exercise ";
		$output .= $_POST['body1']." control over ";
		$output .= $_POST['adj3']. "-minded ";
		$output .= $_POST['plnoun2'].". A Jedi can also use the Force to move objects with his or her ";
		$output .= $_POST['body2'].". It doesn't matter how ";
		$output .= $_POST['adj4']." these objects are; it only matters how ";
		$output .= $_POST['adv1']." the Jedi believes in the Force. Most importantly, the Force teaches a Jedi to rely on his or her feelings. As Obi-Wan Kenobi told his student, Luke ";
		$output .= $_POST['noun2']."-walker. 'Your ";
		$output .= $_POST['body3']." can deceive you. Don't trust them.' Instead, a Jedi should ";
		$output .= $_POST['adv2']. " trust in the Force.";
			
	}
}

if($errorcheck == 0)
	print $output;
else
	print "There are $errorcheck errors in your form. Please fix them and try again.<br /><br />
	$errors
";

?>
