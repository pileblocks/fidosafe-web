#!/usr/bin/env bash

NETWORK=127.0.0.1
DEBOT_NAME=fidosafeDebot

DEBOT_ADDRESS=$(tondev contract info $DEBOT_NAME | grep "Address:" | cut -d " " -f 4)

echo "DeBot name: $DEBOT_NAME"
echo "DeBot address: $DEBOT_ADDRESS"

tos=tonos-cli

fidosafe_code=$(base64 -w 0 fidosafe.tvc)

$tos --url $NETWORK call $DEBOT_ADDRESS setFidoSafeCode "{\"code\":\"$fidosafe_code\"}" --abi $DEBOT_NAME.abi.json --sign keys.json