<?php

$opts = [
    "http" => [
        "method" => "GET",
        "header" => "Accept: application/vnd.sdmx.data+json;version=1.0.0-wd"
    ]
];

$timestamp = fgets(fopen('last_sync.txt', 'r'));
$exchange_rate = fgets(fopen('conversion.txt', 'r'));
if(!$exchange_rate) {
    $exchange_rate = 1.05;
}


if(time() - $timestamp > 86400 || !$timestamp) {
    $context = stream_context_create($opts);
    $json = file_get_contents("https://sdw-wsrest.ecb.europa.eu/service/data/EXR/D.USD.EUR.SP00.A?lastNObservations=1&detail=dataonly&dimensionAtObservation=AllDimensions", false, $context);
    if(!$json) {
        file_put_contents('last_sync.txt', time() - (86400 - 3600));
    } else {
        file_put_contents('conversion.txt', json_decode($json, true)['dataSets'][0]['observations']['0:0:0:0:0:0'][0]);
    }
}

$exchange_rate = 1 / $exchange_rate;
$car_price = ceil($_GET["car_price"] * $exchange_rate * 1.03);
$container_price = 1190;
$customs = ceil(($car_price + $container_price) * .1);
$inner_transport = 850;
$port_fees = 314;
$tax_percentage = .2;
$documentation_and_service = .15;

$taxable = $car_price + $container_price + $inner_transport + $port_fees;
$tax = ceil($taxable * $tax_percentage);
$service = ceil(($tax + $taxable + $customs) * $documentation_and_service);
$total = $taxable + $customs + $service;
$tax = ceil($total * $tax_percentage);
$total = $taxable + $tax + $customs + $service;

// Käibemaksu all hetkel autohind + konteiner + sisetransport + teenus
//

echo json_encode(
    [
        "car_price" => $car_price,
        "container_price" => $container_price,
        "customs" => $customs,
        "inner_transport" => $inner_transport,
        "port_fees" => $port_fees,
        "tax" => $tax,
        "service" => $service >= 1500 ? $service : 1500,
        "total" => $total
    ]
);
