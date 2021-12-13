# Fidosafe 1.0.7

Firstly, build the web app, then compile and deploy contract.

``
./deploy.sh
``

Then, install and run the web app.

### Install the requirements for the web app
```
npm install
```

### Run the app for dev
```
./node_modules/.bin/vue-cli-service serve --mode staging
```

### Build the app for dev

```
./node_modules/.bin/vue-cli-service build --mode staging
```

### Build the app for production

```
./node_modules/.bin/vue-cli-service build
```