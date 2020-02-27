<html>
<head>
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
   <link href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap" rel="stylesheet">
</head>
</html>
<?php


$name = htmlspecialchars($_POST["modal__username"]);
$phone = htmlspecialchars($_POST["modal__phone"]);
$time = htmlspecialchars($_POST["call-time"]);
$timeUser = htmlspecialchars($_POST["main-modal__user-time"]);


$to = "demchenko_slava_@mail.ru";
$subject = "Новая заявка с сайта Blackcode";
$message = 
"
<span>Имя: </span> $name <span>E-mail: </span> $phone <span>Телефон: </span> $time $timeUser
";


$headers =
           'From: slava@testforma.zzz.com.ua' . "\r\n" .
           'Reply-To: demchenko_slava_@mail.ru' . "\r\n" .
           'Content-Type: text/html; charset=utf-8' . "\r\n" . 
           'Content-Transfer-Encoding: 8bit' . "\r\n" .
           'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);