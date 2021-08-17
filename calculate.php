<?php

$opts = [
    "http" => [
        "method" => "GET",
        "header" => "Accept: application/vnd.sdmx.data+json;version=1.0.0-wd"
    ]
];

$context = stream_context_create($opts);

$json = file_get_contents("https://sdw-wsrest.ecb.europa.eu/service/data/EXR/D.USD.EUR.SP00.A?lastNObservations=1&detail=dataonly&dimensionAtObservation=AllDimensions", false, $context);

$exchange_rate = json_decode($json, true)['dataSets'][0]['observations']['0:0:0:0:0:0'][0];
$car_price = ceil($_GET["car_price"] / $exchange_rate);
$container_price = 1050;
$customs = ceil($car_price * .1);
$inner_transport = 650;
$tax_percentage = .2;
$documentation_and_service = .15;

$taxable = $car_price + $container_price + $inner_transport;
$tax = ceil($taxable * $tax_percentage);
$service = ceil(($tax + $taxable + $customs) * $documentation_and_service);
$total = $taxable + $tax + $customs + $service;

echo json_encode(
    [
        "car_price" => $car_price,
        "container_price" => $container_price,
        "customs" => $customs,
        "inner_transport" => $inner_transport,
        "tax" => $tax,
        "service" => $service >= 1500 ? $service : 1500,
        "total" => $total
    ]
);