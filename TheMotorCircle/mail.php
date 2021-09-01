<?php
    $email=$_POST['email'];

    ini_set( 'display_errors', 1 );

    error_reporting( E_ALL );

    $from = "edgar.devwwm@gmail.com";

    $to = $email;

    $subject = "Demande d'informations";

    $message = $email."à besoin d'être recontacté.";

    $headers = "From:" . $from;

    mail($to, $subject, $message);

 ?>
