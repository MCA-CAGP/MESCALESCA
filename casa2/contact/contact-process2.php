<?php
$address = "contacto@agpch.com";
if (!defined("PHP_EOL")) define("PHP_EOL", "\r\n");

$error = false;
$fields = array( 'name', 'email', 'message','phone', 'subject' );

foreach ( $fields as $field ) {
    if ( empty($_POST[$field]) || trim($_POST[$field]) == '' )
        $error = true;
}

if ( !$error ) {

    $name = stripslashes($_POST['name']);
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);	
    $message = stripslashes($_POST['message']);
    $phone = trim($_POST['phone']);
    $subject = "You've been contacted by " . $name;

    $e_content = "You have been contacted by: $name" . PHP_EOL .
                 "E-mail: $email" . PHP_EOL . PHP_EOL .
                 "Message:\r\n$message \r\n Phone: $phone \r\n Subject: $subject" . PHP_EOL;
    
    $headers = "From: $email" . PHP_EOL;
    $headers .= "Reply-To: $email" . PHP_EOL;
    $headers .= "Content-type: text/plain; charset=utf-8" . PHP_EOL;
    $headers .= "Content-Transfer-Encoding: quoted-printable" . PHP_EOL;

    if(mail($address, $subject, $e_content, $headers)) {
        echo 'Success';
    } else {
        echo 'ERROR!';
    }
}

?>