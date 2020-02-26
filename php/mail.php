<html>
<head>
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
   <link href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap" rel="stylesheet">
</head>
</html>
<?php


$name = htmlspecialchars($_POST["username"]);
$email = htmlspecialchars($_POST["email"]);
$phone = htmlspecialchars($_POST["phone"]);



$to = "@mail";
$subject = "Новая заявка с сайта Blackcode";
$message = 
"
<span>Имя: </span> $name <span>E-mail: </span> $email <span>Телефон: </span> $phone
";


$headers =
           'From: @mail' . "\r\n" .
           'Reply-To: @mail' . "\r\n" .
           'Content-Type: text/html; charset=utf-8' . "\r\n" . 
           'Content-Transfer-Encoding: 8bit' . "\r\n" .
           'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);