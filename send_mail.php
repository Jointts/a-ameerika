<?php

$inputJSON = file_get_contents('php://input');
$input= json_decode($inputJSON, true);

print_r($input);

$name = $input['name'] ?: 'Mati Maasikas';
$email = $input['email'] ?: 'mati.maasikas@mail.com';
$message = $input['message'] ?: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
deserunt mollit anim id est laborum.';

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'From: ' . $email . "\r\n";

$message = <<<EOD
<h1>Teile on saabunud uus infopäring</h1>
<table>
    <tbody>
        <tr>
            <td>Nimi</td>
            <td>$name</td>
        </tr>
        <tr>
            <td>Email</td>
            <td>$email</td>
        </tr>
        <tr>
            <td>Sõnum</td>
            <td>$message</td>
        </tr>
    </tbody>
<table>
EOD;

mail('info@a-ameerika.ee', 'Teile on saabunud uus infopäring', $message, $headers);