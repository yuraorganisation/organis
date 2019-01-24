<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];

$name  = htmlspecialchars($name);
$phone = htmlspecialchars($phone);
$email = htmlspecialchars($email); 

$name  = urldecode($name);
$phone = urldecode($phone);
$email = urldecode($email);

$name  = trim($name);
$phone = trim($phone);
$email = trim($email);

if( mail("yuriy.myasnikov.88@yandex.ru", "Я тебя поздравляю", "Обратился чувак/телка по имени " . $name . "<br/> Номер телефона " . $phone . " <br/> Можно написать на мыло " . $email, "From: message@autodoc.ru \r\nMIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n") ){
	echo " Заявка отправлена". $name." - ".$phone." - ".$email ;
}
else{
	echo "Что то пошло по пизде";
}


?>