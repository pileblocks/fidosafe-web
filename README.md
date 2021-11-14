# FidoSafe 0.1

Firstly, build the web app, then compile and deploy contract.

Then create a couple of users by AddUser (user the transaction Id = 0).

Finally, view the list of users at http://localhost:8080/#/<contract address>, for example, 
http://localhost:8080/#/0:a5824355d891873b6f59a0a8b84a06dfb3bd7cc222fd952fd13ea91b5c0124fc

 

### Install the requirements for the web app
```
npm install
```

### Run the app
```
npm run serve
```

### Compile and deploy the contract

```
cd contracts
tondev sol compile fidosafe.sol
tondev contract deploy fidosafe.sol --network se -v 100000000000

tondev contract deploy fidosafeDebot.sol --network se -v 100000000000
tonos-cli --url localhost call $DEBOT_ADDRESS setTodoCode "{\"code\":\"$todo_code\"}" \
    --sign $DEBOT_NAME.keys.json \
    --abi $DEBOT_NAME.abi.json
```

### (Optional) Update the ABI wrapper

```dockerfile
tondev js wrap fidosafe.abi.json
mv FidosafeContract.js ../contract_wrappers
```

### Create a user

```
tondev c run fidosafe -n se
```

1. Choose AddUser
2. Specify 
  pubkey (uint256): 0x1bdfe03401657bfb1aae235be487b9641f0056965eb5573c17ed3685750e3000
  trId (uint32): 0
3. Run the web app with the deployed contract address, for example
http://localhost:8080/#/0:a5824355d891873b6f59a0a8b84a06dfb3bd7cc222fd952fd13ea91b5c0124fc

You'll see the list of users.