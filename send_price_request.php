<?php

$inputJSON = file_get_contents('php://input');
$input= json_decode($inputJSON, true);

print_r($input);

$name = $input['name'];
$company = $input['company'];
$email = $input['email'];
$phone = $input['phone'];
$price = $input['price'];
$auction_link = $input['auction_link'];

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'From: ' . $email . "\r\n";

$message = <<<EOD
<h1>Teile on saabunud uus hinnapäring</h1>
<table>
    <tbody>
        <tr>
            <td>Nimi</td>
            <td>$name</td>
        </tr>
        <tr>
            <td>Ettevõte</td>
            <td>$company</td>
        </tr>
        <tr>
            <td>E-mail</td>
            <td>$email</td>
        </tr>
        <tr>
            <td>Telefon</td>
            <td>$phone</td>
        </tr>
        <tr>
            <td>Hind (€)</td>
            <td>$price</td>
        </tr>
        <tr>
            <td>Kuulutuse link<td/>
            <td><a href="$auction_link">$auction_link<a/>
        </tr>
    </tbody>
<table>
EOD;

mail('info@a-ameerika.ee', 'Teile on saabunud uus hinnapäring', $message, $headers);