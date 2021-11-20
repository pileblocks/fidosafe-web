#!/usr/bin/env bash

NWK=dev

#se
#dev

DEBOT_NAME=fidosafeDebot

if [ $NWK == "se" ]
then
    NETWORK=127.0.0.1
else
    NETWORK=net.ton.dev
fi

tondev sol compile fidosafeDebot.sol
tondev js wrap fidosafeDebot.sol --output ../contract_wrappers/FidosafeDebotContract.js

DEBOT_ADDRESS=$(tondev contract info $DEBOT_NAME -n $NWK | grep "Address:" | cut -d " " -f 4)
ICON_BYTES=$(base64 -w 0 hellodebot.png)
ICON=$(echo -n "data:image/png;base64,$ICON_BYTES" | xxd -ps -c 20000)
DEBOT_ABI=$(cat $DEBOT_NAME.abi.json | xxd -ps -c 20000)

tondev contract deploy $DEBOT_NAME.sol -n $NWK -v 1000000000

tonos-cli --url $NETWORK call $DEBOT_ADDRESS setABI "{\"dabi\":\"$DEBOT_ABI\"}"  --abi $DEBOT_NAME.abi.json --sign keys.json
tonos-cli --url $NETWORK call $DEBOT_ADDRESS setIcon "{\"icon\":\"$ICON\"}"  --abi $DEBOT_NAME.abi.json --sign keys.json

# Prepare and add the Fidosafe code
tondev sol compile fidosafe.sol
tondev js wrap fidosafe.sol --output ../contract_wrappers/FidosafeContract.js

FIDOSAFE_CODE=$(base64 -w 0 fidosafe.tvc)
tonos-cli --url $NETWORK call $DEBOT_ADDRESS setFidosafeCode "{\"code\":\"$FIDOSAFE_CODE\"}" --abi $DEBOT_NAME.abi.json --sign keys.json

# Set up the debot address in the web app
if [ $NWK == "se" ]
then
    sed -i "s/VUE_APP_DEBOT_CONTRACT=0:[0-9a-f]*$/VUE_APP_DEBOT_CONTRACT=$DEBOT_ADDRESS/g" ../.env
else
    sed -i "s/VUE_APP_DEBOT_CONTRACT=0:[0-9a-f]*$/VUE_APP_DEBOT_CONTRACT=$DEBOT_ADDRESS/g" ../.env.staging
fi