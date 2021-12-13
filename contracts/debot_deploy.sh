#!/usr/bin/env bash

NWK=main

#se
#dev
#main

DEBOT_NAME=fidosafeDebot

if [ $NWK == "se" ]
then
    NETWORK=127.0.0.1
    KEYS=keys
    SIGNER=norton
    sed -i "s/https:\/\/[0-9a-zA-Z\.]*fidosafe.com\/#\//https:\/\/test.fidosafe.com\/#\//g" fidosafeDebot.sol
elif [ $NWK == "dev" ]
then
    NETWORK=net.ton.dev
    KEYS=keys
    SIGNER=norton
    sed -i "s/https:\/\/[0-9a-zA-Z\.]*fidosafe.com\/#\//https:\/\/test.fidosafe.com\/#\//g" fidosafeDebot.sol
else
    NETWORK=main.ton.dev
    KEYS=prod.keys
    SIGNER=prod_signer
    sed -i "s/https:\/\/[0-9a-zA-Z\.]*fidosafe.com\/#\//https:\/\/app.fidosafe.com\/#\//g" fidosafeDebot.sol
fi




tondev sol compile fidosafeDebot.sol
tondev js wrap fidosafeDebot.sol --output ../contract_wrappers/FidosafeDebotContract.js

# Prepare and add the Fidosafe code
tondev sol compile fidosafe.sol
tondev js wrap fidosafe.sol --output ../contract_wrappers/FidosafeContract.js

FIDOSAFE_CODE=$(base64 -w 0 fidosafe.tvc)

DEBOT_ADDRESS=$(tondev contract info $DEBOT_NAME -n $NWK -s $SIGNER | grep "Address:" | cut -d " " -f 4)
ICON_BYTES=$(base64 -w 0 logo.png)
ICON=$(echo -n "data:image/png;base64,$ICON_BYTES" | xxd -ps -c 20000)
DEBOT_ABI=$(cat $DEBOT_NAME.abi.json | xxd -ps -c 20000)

tondev contract deploy $DEBOT_NAME.sol -n $NWK -v 500000000 -s $SIGNER -d mCode:\"$FIDOSAFE_CODE\"
tonos-cli --url $NETWORK call $DEBOT_ADDRESS setABI "{\"dabi\":\"$DEBOT_ABI\"}"  --abi $DEBOT_NAME.abi.json --sign $KEYS.json
tonos-cli --url $NETWORK call $DEBOT_ADDRESS setIcon "{\"icon\":\"$ICON\"}"  --abi $DEBOT_NAME.abi.json --sign $KEYS.json
tonos-cli --url $NETWORK call $DEBOT_ADDRESS setFidosafeCode "{\"code\":\"$FIDOSAFE_CODE\"}" --abi $DEBOT_NAME.abi.json --sign $KEYS.json


#tondev contract run -n $NWK -s $SIGNER --address $DEBOT_ADDRESS $DEBOT_NAME.abi.json setIcon -i icon:\"$ICON\"

# Set up the debot address in the web app
if [ $NWK == "se" ]
then
    sed -i "s/VUE_APP_DEBOT_CONTRACT=0:[0-9a-f]*$/VUE_APP_DEBOT_CONTRACT=$DEBOT_ADDRESS/g" ../.env
elif [ $NWK == "dev" ]
then
    sed -i "s/VUE_APP_DEBOT_CONTRACT=0:[0-9a-f]*$/VUE_APP_DEBOT_CONTRACT=$DEBOT_ADDRESS/g" ../.env.staging
else
    sed -i "s/VUE_APP_DEBOT_CONTRACT=0:[0-9a-f]*$/VUE_APP_DEBOT_CONTRACT=$DEBOT_ADDRESS/g" ../.env.production
fi