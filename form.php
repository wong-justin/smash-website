<?php
// Basic email form processing script

// get all of the hidden fields needed to sent the form
$recipient = $_POST['recipient'];
$redirect = $_POST['redirect'];
$subject = $_POST['subject'];
$email = $_POST['email'];

//  Put a subject in if one doesn't exist
if (!$subject) {
   $subject = "Form submission";
	}

//  Loop through the POST variables array and find all form fields
//  Note that this is a bit dirty and will result in some unneeded fields being displayed
$content = '';
foreach($_POST as $key => $value) {
  $content .= $key . ':' . $value . "\n";
}
	
// function to check the referer for security reasons.
// if using this on a different server, change to your domain name
$allowed_host = 'webdev.seminolestate.edu';
$host = parse_url($_SERVER['HTTP_REFERER'], PHP_URL_HOST);

if(substr($host, 0 - strlen($allowed_host)) == $allowed_host) {

	mail($recipient, stripslashes($subject), stripslashes($content), $email);
	
	// if the redirect option is set: redirect them
	if ($redirect) 
	{
	   header ("Location: $redirect");
	   exit;
	} else
	// if you forgot to add a hidden field for 'redirect'
	{
	   print "Hey developer, you forgot to put a redirect in your code!\n";
	   exit;
	}
} else {
	// notice to folks trying to illegally use the page
	echo 'You are not permitted to use this page.';
}
?>