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

echo '<!-- 2017 Top Notch Treats, All rights reserved Designed, Developed and Maintained by Stephen Prizio, http://www.saprizio.com--><!DOCTYPE html><html lang="en"><head> <meta charset="utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1"/> <title>Message Received! | Top Notch Treats</title> <link type="text/css" rel="stylesheet" href="../static/node_modules/bulma/css/bulma.css"/> <link type="text/css" rel="stylesheet" href="../static/node_modules/slick-carousel/slick/slick.css"/> <link type="text/css" rel="stylesheet" href="../static/css/main.css"/> <link rel="stylesheet" type="text/css" href="../static/node_modules/font-awesome/css/font-awesome.min.css"/> <link href="../assets/images/favicon.png" rel="icon" type="image/x-icon"/></head><body><section class="hero is-light is-bold is-fullheight"> <div class="hero-body"> <div class="container"> <div class="columns is-multiline"> <div class="column is-three-quarters has-text-centered"> <h1 class="title"> We thank you for contacting us! We promise to respond shortly. </h1> </div><div class="column is-one-quarter has-text-centered"> <a class="title sent-link" href="../../index.html"><i class="fa fa-home"></i></a> </div></div></div></div></section></body></html>';

?>
