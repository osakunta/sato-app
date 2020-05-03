# sato-app

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Setup local development environment

To get the firebase CLI run:

    npm install -g firebase-tools

### Cloud Functions

Cloud functions that reside in the `functions/` directory. They need the environment variables from the production environment which can be downloaded with:

    firebase functions:config:get > functions/.runtimeconfig.json

Download a new private key for Firbase Admin SDK from the Firebase console and add them as file `functions/.runtimecredentials.json`. Then set the following to your environment (e.g. with `direnv` to file `.envrc`):

    export GOOGLE_APPLICATION_CREDENTIALS="functions/.runtimecredentials.json"

### Start emulators

To start emulating Firebase services on your local environment run:

    firebase emulators:start
