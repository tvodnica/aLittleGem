<?php
$name = $_POST['name'];
$last_name = $_POST['lastName'];
$email = $_POST['email'];
$country = $_POST['country'];
$message = $_POST['message'];


$email_from = $email;
$email_subject = "A little gem enquiry";
$email_body = "First name: $name \n".
                "Last name: $last_name \n".
                "Email: $email \n".
                "Country: $country \n".
                "Message: $message \n"; 

$to = "info@dubrovnikholidays.net";
$headers = "From: $email_from \r\n";
$headers .= "Reply to: $email \r\n";

if (mail($to, $email_subject, $email_body, $headers))
{
    echo "Message accepted";
}
else
{
    echo "Error: Message not accepted";
}


?>
