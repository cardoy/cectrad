<?php

ini_set('display_errors', 1);

error_reporting(E_ALL);

$name = $_POST['Nome']; 
$email = $_POST['Email']; 
$tel = $_POST['Tel'];
$mensagem = $_POST['Mensagem']; 

$texto = ' Nome: '.$name.'    Email: '.$email.'    Telefone: '.$tel.'     Mensagem: '.$mensagem;

$from = "cardoy@gmail.com";

$to = "cardoy@gmail.com";

$subject = "Mensagem de Contato - Traduções";


$message = $texto;

$headers = "From:". $from;

mail($to, $subject, $message, $headers);

echo "A mensagem de e-mail foi enviada.";

?>


