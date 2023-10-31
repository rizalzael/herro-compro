<?php
    $to = "cs@herro.co.id";
    $subject = "Permintaan Penawaran Baru";
    $name = $_POST['name'];
    $company = $_POST['company'];
    $email = $_POST['email'];
    $request = $_POST['request'];
    $message = "Nama: $name \n\n Perusahaan: $company \n\n Email: $email \n\n Permintaan: $request";
    $headers = "From: webmaster@example.com" . "\r\n" .
        "CC: somebodyelse@example.com";
    mail($to, $subject, $message, $headers);
?>
