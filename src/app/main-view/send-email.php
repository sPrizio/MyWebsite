<?php

$recipient = "s.prizio@hotmail.com";
$name = "";
$senderEmail = "";
$subject = "";
$message = "";

if (isset($_POST['name'])) {
    $name = $_POST['name'];
}
if (isset($_POST['email'])) {
    $senderEmail = $_POST['email'];
}
if (isset($_POST['subject'])) {
    $subject = $_POST['subject'];
}
if (isset($_POST['message'])) {
    $message = $_POST['message'];
}

$headers[] = "From: $name <$senderEmail>";

mail($recipient, $subject, $message, implode("\r\n", $headers));

echo '<!DOCTYPE html><html lang="en"><head> <meta charset="utf-8"/> <link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.1/css/bulma.css"/> <title>Message Received!</title></head><body> <section class="hero is-fullheight is-dark is-bold"> <div class="hero-body"> <div class="container"> <h1 class="title"> Thank you for messaging me! </h1> <h2 class="subtitle"> I will respond to you very shortly. </h2> <a class="button is-info" href="http://saprizio.com">Return home</a> </div></div></section></body></html>';
?>
