#!/usr/bin/env bash

NETWORK=127.0.0.1
#127.0.0.1
#net.ton.dev
NWK=se
#se
#dev
DEBOT_NAME=fidosafeDebot

tondev sol compile fidosafeDebot.sol

DEBOT_ADDRESS=$(tondev contract info $DEBOT_NAME -n $NWK | grep "Address:" | cut -d " " -f 4)

ICON_BYTES=$(base64 -w 0 hellodebot.png)
ICON=$(echo -n "data:image/png;base64,$ICON_BYTES" | xxd -ps -c 20000)
DEBOT_ABI=$(cat $DEBOT_NAME.abi.json | xxd -ps -c 20000)

tondev contract deploy $DEBOT_NAME.sol -n $NWK

tonos-cli --url $NETWORK call $DEBOT_ADDRESS setABI "{\"dabi\":\"$DEBOT_ABI\"}"  --abi $DEBOT_NAME.abi.json --sign keys.json
tonos-cli --url $NETWORK call $DEBOT_ADDRESS setIcon "{\"icon\":\"$ICON\"}"  --abi $DEBOT_NAME.abi.json --sign keys.json